const BASE = 'https://vivatstroy.ru/wp-content/uploads'

const projects = [
  {
    img: `${BASE}/2024/07/kejsy.png`,
    label: 'Запад Москвы, новостройка',
    area: '38 м²',
    type: 'Полусухая стяжка',
  },
  {
    img: `${BASE}/2024/07/kejsy-1.png`,
    label: 'Митино, ЖК «Небесный»',
    area: '42 м²',
    type: 'Полусухая стяжка',
  },
  {
    img: `${BASE}/2024/07/kejsy-2.png`,
    label: 'Одинцово, новостройка',
    area: '31 м²',
    type: 'Мокрая стяжка',
  },
  {
    img: `${BASE}/2024/07/kejsy-3.png`,
    label: 'Химки, ЖК «Новые Химки»',
    area: '44 м²',
    type: 'Полусухая стяжка',
  },
  {
    img: `${BASE}/2024/07/kejsy-4.png`,
    label: 'Красногорск, новостройка',
    area: '27 м²',
    type: 'Наливной пол',
  },
  {
    img: `${BASE}/2024/07/kejsy-1-1.png`,
    label: 'Балашиха, ЖК «Столичный»',
    area: '36 м²',
    type: 'Полусухая стяжка',
  },
]

export default function Gallery() {
  return (
    <section
      style={{
        padding: '100px 24px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
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
              Примеры работ
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              500+ объектов — Запад Москвы и МО
            </h2>
          </div>
          <div
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              textAlign: 'right',
              maxWidth: 200,
              lineHeight: 1.5,
            }}
          >
            Все фото — реальные объекты наших клиентов
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  aspectRatio: '4/3',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--surface2)',
                }}
              >
                <img
                  src={p.img}
                  alt={p.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      parent.style.background = 'var(--surface2)'
                      parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Bebas Neue,sans-serif;font-size:48px;color:rgba(26,25,23,0.1)">м²</div>`
                    }
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    background: 'var(--accent)',
                    borderRadius: 6,
                    padding: '4px 10px',
                  }}
                >
                  <span
                    style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}
                  >
                    {p.area}
                  </span>
                </div>
              </div>
              <div style={{ padding: '14px 18px' }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 3,
                  }}
                >
                  {p.label}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {p.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
