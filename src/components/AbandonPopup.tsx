import { useState } from 'react'
import { sendLead } from '../utils/sendLead'

interface Props {
  onClose: () => void
}

type Messenger = 'max' | 'telegram' | 'call'

export default function AbandonPopup({ onClose }: Props) {
  const [phone, setPhone] = useState('')
  const [messenger, setMessenger] = useState<Messenger>('max')
  const [sent, setSent] = useState(false)

  const handleSend = async () => {
    if (!phone.trim()) return
    await sendLead({
      source: 'abandon_popup',
      phone,
      messenger,
    })
    setSent(true)
  }

  const options: { value: Messenger; label: string }[] = [
    { value: 'max', label: 'Max' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'call', label: 'Звонок' },
  ]

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="anim-scale-in"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '40px 40px',
          maxWidth: 440,
          width: '100%',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'transparent',
            border: 'none',
            color: 'var(--muted)',
            fontSize: 20,
            cursor: 'pointer',
            lineHeight: 1,
            padding: 4,
          }}
        >
          ✕
        </button>

        {!sent ? (
          <>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Не уходите!
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 12px',
                lineHeight: 1.2,
              }}
            >
              Остались вопросы?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Мы готовы ответить прямо сейчас — укажите контакт
              и выберите удобный способ связи.
            </p>

            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{ marginBottom: 12 }}
              autoFocus
            />

            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              {options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setMessenger(opt.value)}
                  style={{
                    flex: 1,
                    background: messenger === opt.value ? 'rgba(232,112,26,0.15)' : 'var(--surface2)',
                    border: `1px solid ${messenger === opt.value ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: 8,
                    padding: '9px 4px',
                    color: messenger === opt.value ? 'var(--accent)' : 'var(--muted)',
                    fontFamily: 'Golos Text, sans-serif',
                    fontSize: 13,
                    fontWeight: messenger === opt.value ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleSend}
              disabled={!phone.trim()}
              style={{
                width: '100%',
                background: phone.trim() ? 'var(--accent)' : 'rgba(232,112,26,0.3)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '13px',
                fontFamily: 'Golos Text, sans-serif',
                fontWeight: 700,
                fontSize: 15,
                cursor: phone.trim() ? 'pointer' : 'not-allowed',
                transition: 'background 0.2s',
              }}
            >
              Написать мне →
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 56,
                height: 56,
                background: 'rgba(232,112,26,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: 24,
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 10px',
              }}
            >
              Отлично!
            </h3>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
              Свяжемся с вами в ближайшее время.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
