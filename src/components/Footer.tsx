export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 48,
          marginBottom: 40,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: 'var(--accent)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="font-display" style={{ fontSize: 16, color: '#fff' }}>В</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Вивастрой
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 12px' }}>
            Стяжка пола в новостройках Москвы и МО.
            Без выезда замерщика. Бригада от 3 дней.
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>
            Пн–Сб: 08:00–20:00
          </p>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 16 }}>
            Контакты
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="mailto:ooo-vs-grupp@yandex.ru"
              style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}
            >
              ooo-vs-grupp@yandex.ru
            </a>
            <div style={{ fontSize: 14, color: 'var(--muted)' }}>
              Москва и Московская область
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 16 }}>
            Написать нам
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'Telegram', href: 'https://t.me/vivatstroy' },
              { label: 'ВКонтакте', href: 'https://vk.com/vivatstroy' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '8px 16px',
                  fontSize: 13,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--text)'
                  t.style.borderColor = 'var(--muted)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--muted)'
                  t.style.borderColor = 'var(--border)'
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>
          2026 © ООО «Виват Строй»
        </span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>
          123298, г. Москва, ул. 3-я Хорошевская, д.13, к.1
        </span>
      </div>
    </footer>
  )
}
