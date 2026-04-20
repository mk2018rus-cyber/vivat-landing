export default function Header() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'var(--accent)',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="font-display"
              style={{ fontSize: 18, color: '#fff', lineHeight: 1 }}
            >
              В
            </span>
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: 'var(--text)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Вивастрой
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a
            href="tel:+79991234567"
            style={{
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 15,
              opacity: 0.9,
            }}
          >
            +7 (999) 123-45-67
          </a>
          <button
            onClick={scrollToQuiz}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '9px 20px',
              fontFamily: 'Golos Text, sans-serif',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'background 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              ;(e.target as HTMLButtonElement).style.background =
                'var(--accent-hover)'
            }}
            onMouseLeave={e => {
              ;(e.target as HTMLButtonElement).style.background = 'var(--accent)'
            }}
          >
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </header>
  )
}
