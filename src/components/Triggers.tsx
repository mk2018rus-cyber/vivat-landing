const triggers = [
  'Получили ключи, начали возводить стены — и уже сейчас нужно закрыть стяжку, чтобы не тормозить всё остальное?',
  'Везде видите «от 450 ₽/м²», а когда называют реальную цену — она в 2–3 раза выше?',
  'Боитесь, что рабочие повредят коммуникации или не уберут после себя?',
  'Хотите убедиться, что бригады российские специалисты?',
  'Непонятно, через сколько дней можно укладывать финишный пол после стяжки?',
]

export default function Triggers() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div
        className="triggers-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <div>
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
            Узнаёте себя?
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 4vw, 52px)',
              color: 'var(--text)',
              margin: '0 0 40px',
              lineHeight: 1.05,
            }}
          >
            Это про вас?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {triggers.map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    minWidth: 22,
                    border: '1px solid rgba(232,112,26,0.4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 2,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      background: 'var(--accent)',
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background:
                  'radial-gradient(circle, rgba(232,112,26,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div
              className="font-display"
              style={{
                fontSize: 18,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Мы отвечаем на всё прямо
            </div>
            <p
              style={{
                fontSize: 17,
                color: 'var(--text)',
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Ответьте на 3 вопроса — и через 20 минут у вас будет{' '}
              <strong style={{ color: 'var(--accent)' }}>точная цена</strong>,
              дата выхода бригады и ответы на любые вопросы.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginBottom: 28,
              }}
            >
              {[
                'Бригады — российские специалисты',
                'Коммуникации не трогаем, уборка входит в стоимость',
                'Объясним, откуда берётся цена — без «приманок»',
                'Гарантия 5 лет по договору, акт выполненных работ',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <span
                    style={{
                      color: 'var(--accent)',
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: 'var(--muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToQuiz}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '14px 28px',
                fontFamily: 'Golos Text, sans-serif',
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  'var(--accent-hover)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  'var(--accent)')
              }
            >
              Рассчитать стоимость →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
