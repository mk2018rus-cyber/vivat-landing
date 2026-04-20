const items = [
  {
    icon: '⚡',
    title: 'Без выезда замерщика',
    desc: 'Расчёт по трём параметрам — площадь, адрес, этаж. Никаких лишних звонков до подачи заявки.',
  },
  {
    icon: '📅',
    title: 'Бригада от 3 дней',
    desc: 'Собственные бригады в штате. Нет посредников — нет задержек. Выходим на объект в согласованный день.',
  },
  {
    icon: '🛡',
    title: 'Гарантия 5 лет',
    desc: 'Письменная гарантия по договору на все виды работ. Если что-то не так — устраняем за свой счёт.',
  },
  {
    icon: '📐',
    title: 'Контроль качества',
    desc: 'Проверяем горизонт и прочность после укладки. Принимаем объект с актом выполненных работ.',
  },
  {
    icon: '💬',
    title: 'Прозрачная смета',
    desc: 'Фиксированная цена до старта работ. Никаких допрайсов в процессе ремонта.',
  },
  {
    icon: '🏗',
    title: 'Москва и МО',
    desc: 'Работаем по всей Москве и Московской области. Выезд без доплаты за пределы МКАД.',
  },
]

export default function Advantages() {
  return (
    <section
      style={{
        padding: '100px 24px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
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
            Почему Вивастрой
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
            Работаем без лишних слов
          </h2>
        </div>

        <div className="advantages-grid">
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '28px 28px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.borderColor = 'rgba(232,112,26,0.4)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.borderColor = 'var(--border)')
              }
            >
              <div
                style={{
                  fontSize: 28,
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 8px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
