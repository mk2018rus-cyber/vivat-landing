const items = [
  { n: '500+', label: 'объектов сдано' },
  { n: '7', label: 'лет на рынке Москвы' },
  { n: '5 лет', label: 'гарантия на работы' },
  { n: 'от 3 дней', label: 'выход бригады' },
  { n: '0', label: 'выездов на замер', accent: true },
]

export default function Stats() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <div className="stats-bar" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {items.map((item, i) => (
          <div key={i} className="stats-bar-item" style={{ textAlign: 'center' }}>
            <div
              className="font-display"
              style={{
                fontSize: 32,
                color: item.accent ? 'var(--accent)' : 'var(--text)',
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {item.n}
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
