export default function CtaBlock() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        padding: '100px 24px',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232,112,26,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          maxWidth: 700,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Готовы начать?
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(44px, 6vw, 72px)',
            color: 'var(--text)',
            margin: '0 0 20px',
            lineHeight: 1,
          }}
        >
          Рассчитайте стоимость прямо сейчас
        </h2>
        <p
          style={{
            fontSize: 17,
            color: 'var(--muted)',
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          3 вопроса, 20 минут на ответ — и вы знаете точную цену
          и дату выхода бригады.
        </p>
        <button
          onClick={scrollToQuiz}
          style={{
            background: 'var(--accent)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '18px 48px',
            fontFamily: 'Golos Text, sans-serif',
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            const t = e.currentTarget
            t.style.background = 'var(--accent-hover)'
            t.style.transform = 'translateY(-2px)'
            t.style.boxShadow = '0 12px 40px rgba(232,112,26,0.3)'
          }}
          onMouseLeave={e => {
            const t = e.currentTarget
            t.style.background = 'var(--accent)'
            t.style.transform = 'translateY(0)'
            t.style.boxShadow = 'none'
          }}
        >
          Рассчитать стоимость →
        </button>
        <div
          style={{
            marginTop: 20,
            fontSize: 14,
            color: 'var(--muted)',
          }}
        >
          Бесплатно · Без обязательств · Ответим за 20 минут
        </div>
      </div>
    </section>
  )
}
