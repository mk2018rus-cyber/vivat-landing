const steps = [
  {
    num: '01',
    title: 'Ответьте на 3 вопроса',
    desc: 'Площадь, адрес и этаж — этого достаточно для расчёта. Никакого выезда замерщика.',
  },
  {
    num: '02',
    title: 'Получите точную цену',
    desc: 'Менеджер перезвонит в течение 20 минут с готовым расчётом и ответами на ваши вопросы.',
  },
  {
    num: '03',
    title: 'Бригада выходит на объект',
    desc: 'Согласуем удобную дату. Бригада выходит от 3 дней. Работаем с гарантией 5 лет по договору.',
  },
]

export default function HowItWorks() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
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
            Как это работает
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 60px)',
              color: 'var(--text)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Три шага до готовой стяжки
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === 2 ? '0 12px 12px 0' : 0,
                padding: '40px 36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 24,
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 80,
                  lineHeight: 1,
                  color: 'rgba(26,25,23,0.05)',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(232,112,26,0.12)',
                  border: '1px solid rgba(232,112,26,0.25)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: 20, color: 'var(--accent)' }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 12px',
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <button
            onClick={scrollToQuiz}
            style={{
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid rgba(232,112,26,0.4)',
              borderRadius: 10,
              padding: '14px 32px',
              fontFamily: 'Golos Text, sans-serif',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const t = e.currentTarget
              t.style.background = 'rgba(232,112,26,0.1)'
              t.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              const t = e.currentTarget
              t.style.background = 'transparent'
              t.style.borderColor = 'rgba(232,112,26,0.4)'
            }}
          >
            Начать расчёт →
          </button>
        </div>
      </div>
    </section>
  )
}
