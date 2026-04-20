import { useState } from 'react'

interface QuizProps {
  onStart: () => void
  onComplete: () => void
}

type Step = 'area' | 'address' | 'floor' | 'contact' | 'thanks'
type Messenger = 'max' | 'telegram' | 'call'

interface FormData {
  area: string
  address: string
  floor: string
  hasLift: '' | 'yes' | 'passenger' | 'no'
  name: string
  phone: string
  messenger: Messenger
}

function getThankYouMessage(): string {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 6=Sat
  const hour = now.getHours()
  const isWorkday = day >= 1 && day <= 6
  const isWorkHours = hour >= 8 && hour < 20

  if (isWorkday && isWorkHours) {
    return 'Спасибо! Мы свяжемся с вами в течение 20 минут и ответим на все вопросы по вашей заявке.'
  }
  return 'Мы видим вашу заявку. Наш менеджер перезвонит вам с утра, в рабочее время — сразу же с готовым ответом.'
}

const STEPS: Step[] = ['area', 'address', 'floor', 'contact']

export default function Quiz({ onStart, onComplete }: QuizProps) {
  const [step, setStep] = useState<Step>('area')
  const [started, setStarted] = useState(false)
  const [showAreaWarning, setShowAreaWarning] = useState(false)
  const [form, setForm] = useState<FormData>({
    area: '',
    address: '',
    floor: '',
    hasLift: '',
    name: '',
    phone: '',
    messenger: 'max',
  })

  const stepIndex = STEPS.indexOf(step)
  const progress = step === 'thanks' ? 100 : Math.round(((stepIndex) / STEPS.length) * 100)

  const handleStart = () => {
    setStarted(true)
    onStart()
  }

  const handleAreaNext = () => {
    const n = parseFloat(form.area)
    if (!form.area || isNaN(n) || n <= 0) return
    if (n < 20) {
      setShowAreaWarning(true)
    } else {
      setStep('address')
    }
  }

  const handleAreaWarningContinue = () => {
    setShowAreaWarning(false)
    setStep('address')
  }

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim()) return
    // Send lead to API
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // fail silently — lead still shows thank you
    }
    setStep('thanks')
    onComplete()
  }

  const messengerOptions: { value: Messenger; label: string }[] = [
    { value: 'max', label: 'Max' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'call', label: 'Звонок менеджера' },
  ]

  return (
    <section
      id="quiz"
      style={{
        padding: '100px 24px',
        background:
          'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,112,26,0.05) 0%, transparent 70%)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Расчёт стоимости
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: 'var(--text)',
              margin: '0 0 12px',
              lineHeight: 1,
            }}
          >
            Узнайте цену за 3 минуты
          </h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', margin: 0 }}>
            Без выезда замерщика — ответьте на 3 вопроса
          </p>
        </div>

        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '40px 48px',
          }}
        >
          {!started && step !== 'thanks' && (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  background: 'rgba(232,112,26,0.12)',
                  border: '1px solid rgba(232,112,26,0.25)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <span className="font-display" style={{ fontSize: 32, color: 'var(--accent)' }}>3</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', margin: '0 0 8px' }}>
                3 вопроса → точная цена
              </h3>
              <p style={{ color: 'var(--muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
                Площадь, адрес и этаж — этого достаточно для расчёта.
                Никакого выезда, звонков до отправки заявки и ожидания.
              </p>
              <Btn onClick={handleStart}>Начать расчёт →</Btn>
            </div>
          )}

          {started && step !== 'thanks' && (
            <>
              {/* Progress */}
              <div style={{ marginBottom: 36 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}
                >
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                    {step === 'contact'
                      ? 'Последний шаг'
                      : `Вопрос ${stepIndex + 1} из 3`}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                    {progress}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: 'var(--border)',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'var(--accent)',
                      borderRadius: 2,
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              {/* Step: area */}
              {step === 'area' && !showAreaWarning && (
                <div className="anim-fade-up">
                  <Label>Какая площадь помещения?</Label>
                  <Hint>Введите приблизительную площадь в квадратных метрах</Hint>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 16 }}>
                    <input
                      type="number"
                      placeholder="Например: 45"
                      value={form.area}
                      onChange={e => setForm({ ...form, area: e.target.value })}
                      onKeyDown={e => e.key === 'Enter' && handleAreaNext()}
                      style={{ flex: 1 }}
                      autoFocus
                    />
                    <span style={{ color: 'var(--muted)', fontSize: 16, whiteSpace: 'nowrap' }}>м²</span>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <Btn onClick={handleAreaNext} disabled={!form.area}>Далее →</Btn>
                  </div>
                </div>
              )}

              {/* Area warning */}
              {step === 'area' && showAreaWarning && (
                <div className="anim-scale-in">
                  <div
                    style={{
                      background: 'rgba(232,112,26,0.08)',
                      border: '1px solid rgba(232,112,26,0.25)',
                      borderRadius: 10,
                      padding: '20px 24px',
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: 'var(--accent)',
                        marginBottom: 8,
                        fontSize: 15,
                      }}
                    >
                      Обратите внимание
                    </div>
                    <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                      У вас <strong style={{ color: 'var(--text)' }}>{form.area} м²</strong>.
                      Минимальная стоимость заказа — <strong style={{ color: 'var(--text)' }}>65 000 ₽</strong>,
                      независимо от площади. Если вас устраивает — продолжайте,
                      и мы ответим на все вопросы.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <Btn onClick={handleAreaWarningContinue}>Понятно, продолжить →</Btn>
                    <button
                      onClick={() => { setShowAreaWarning(false); setForm({ ...form, area: '' }) }}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                        borderRadius: 8,
                        padding: '12px 20px',
                        fontFamily: 'Golos Text, sans-serif',
                        fontSize: 15,
                        cursor: 'pointer',
                      }}
                    >
                      Изменить
                    </button>
                  </div>
                </div>
              )}

              {/* Step: address */}
              {step === 'address' && (
                <div className="anim-fade-up">
                  <Label>Адрес объекта или ближайшее метро</Label>
                  <Hint>Нужно для оценки доступности объекта и логистики</Hint>
                  <input
                    type="text"
                    placeholder="Например: м. Митино, ЖК «Небесный»"
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                    onKeyDown={e => e.key === 'Enter' && form.address.trim() && setStep('floor')}
                    style={{ marginTop: 16 }}
                    autoFocus
                  />
                  <div style={{ marginTop: 24 }}>
                    <Btn onClick={() => setStep('floor')} disabled={!form.address.trim()}>
                      Далее →
                    </Btn>
                  </div>
                </div>
              )}

              {/* Step: floor */}
              {step === 'floor' && (
                <div className="anim-fade-up">
                  <Label>Этаж и наличие лифта</Label>
                  <Hint>Влияет на стоимость подъёма материалов</Hint>
                  <input
                    type="number"
                    placeholder="Этаж"
                    value={form.floor}
                    onChange={e => setForm({ ...form, floor: e.target.value })}
                    style={{ marginTop: 16, marginBottom: 16 }}
                    autoFocus
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                    {[
                      { value: 'yes' as const, label: 'Грузовой лифт' },
                      { value: 'passenger' as const, label: 'Пассажирский лифт' },
                      { value: 'no' as const, label: 'Без лифта' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setForm({ ...form, hasLift: opt.value })}
                        style={{
                          background: form.hasLift === opt.value ? 'rgba(232,112,26,0.15)' : 'var(--surface2)',
                          border: `1px solid ${form.hasLift === opt.value ? 'var(--accent)' : 'var(--border)'}`,
                          borderRadius: 8,
                          padding: '12px 8px',
                          color: form.hasLift === opt.value ? 'var(--accent)' : 'var(--muted)',
                          fontFamily: 'Golos Text, sans-serif',
                          fontSize: 14,
                          fontWeight: form.hasLift === opt.value ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          textAlign: 'center',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <Btn
                      onClick={() => setStep('contact')}
                      disabled={!form.floor || !form.hasLift}
                    >
                      Далее →
                    </Btn>
                  </div>
                </div>
              )}

              {/* Step: contact */}
              {step === 'contact' && (
                <div className="anim-fade-up">
                  <Label>Как с вами связаться?</Label>
                  <Hint>Менеджер перезвонит с готовым расчётом в течение 20 минут</Hint>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      autoFocus
                    />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <div
                      style={{
                        fontSize: 14,
                        color: 'var(--muted)',
                        marginBottom: 10,
                      }}
                    >
                      Удобный способ связи
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      {messengerOptions.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => setForm({ ...form, messenger: opt.value })}
                          style={{
                            flex: 1,
                            background: form.messenger === opt.value ? 'rgba(232,112,26,0.15)' : 'var(--surface2)',
                            border: `1px solid ${form.messenger === opt.value ? 'var(--accent)' : 'var(--border)'}`,
                            borderRadius: 8,
                            padding: '10px 8px',
                            color: form.messenger === opt.value ? 'var(--accent)' : 'var(--muted)',
                            fontFamily: 'Golos Text, sans-serif',
                            fontSize: 13,
                            fontWeight: form.messenger === opt.value ? 600 : 400,
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <Btn
                      onClick={handleSubmit}
                      disabled={!form.name.trim() || !form.phone.trim()}
                    >
                      Получить расчёт →
                    </Btn>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, textAlign: 'center' }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              )}
            </>
          )}

          {/* Thank you */}
          {step === 'thanks' && (
            <div className="anim-scale-in" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: 'rgba(232,112,26,0.15)',
                  border: '1px solid rgba(232,112,26,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: 28,
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 16px',
                }}
              >
                Заявка принята!
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  margin: '0 auto',
                  maxWidth: 400,
                }}
              >
                {getThankYouMessage()}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: 4,
      }}
    >
      {children}
    </div>
  )
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>
      {children}
    </div>
  )
}

function Btn({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? 'rgba(232,112,26,0.3)' : 'var(--accent)',
        color: '#fff',
        border: 'none',
        borderRadius: 10,
        padding: '14px 28px',
        fontFamily: 'Golos Text, sans-serif',
        fontWeight: 700,
        fontSize: 16,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        width: '100%',
      }}
    >
      {children}
    </button>
  )
}
