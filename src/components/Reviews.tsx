const YANDEX_URL =
  'https://yandex.ru/maps/org/vivat_stroy/162007283976/reviews/?ll=37.500001%2C55.782406&z=17'

const reviews = [
  {
    name: 'Алексей К.',
    initials: 'АК',
    area: '58 м², Химки',
    date: '15 марта',
    text: 'Оставил заявку вечером, утром уже перезвонили с расчётом. Через 4 дня бригада была на объекте. Стяжка ровная, всё сделали за день.',
    rating: 5,
  },
  {
    name: 'Марина Г.',
    initials: 'МГ',
    area: '72 м², Митино',
    date: '2 апреля',
    text: 'Долго искала нормальных — все требовали выезд на замер. Вивастрой сделали расчёт по трём вопросам. Цена совпала с финальной сметой — без пересчётов.',
    rating: 5,
  },
  {
    name: 'Дмитрий Н.',
    initials: 'ДН',
    area: '43 м², Реутов',
    date: '28 февраля',
    text: 'Брал для квартиры в новостройке. Приехали вовремя, работали аккуратно. После себя убрали всё — включая песок у подъезда. Соседи спросили контакты.',
    rating: 5,
  },
  {
    name: 'Ольга П.',
    initials: 'ОП',
    area: '91 м², Одинцово',
    date: '10 января',
    text: 'Большая квартира — переживала за ровность. Сделали с перепадом не больше 2 мм. Гарантию дали на бумаге по договору. Буду рекомендовать.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
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
            Отзывы клиентов
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
            Отзывы наших клиентов на{' '}
            <span style={{ color: 'var(--accent)' }}>Яндекс Картах</span>
          </h2>
        </div>

        <div className="reviews-yandex-layout">
          {/* Yandex dark card — вся карточка кликабельна */}
          <a
            href={YANDEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yandex-card"
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span
                className="font-display"
                style={{ fontSize: 56, color: '#fff', lineHeight: 1 }}
              >
                5,0
              </span>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }}>из 5,0</span>
            </div>

            <div style={{ display: 'flex', gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: '#FFB800', fontSize: 22 }}>
                  ★
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{ fontSize: 15, color: '#fff', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                Яндекс
              </span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.3)',
                  display: 'inline-block',
                }}
              />
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>Карты</span>
            </div>

            <div
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}
            >
              На основе 433 оценок
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <span
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '10px 0',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Оставить отзыв
              </span>
              <span
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 8,
                  padding: '10px 0',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Посмотреть →
              </span>
            </div>
          </a>

          {/* Scrollable review cards */}
          <div className="reviews-cards-scroll">
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 280,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'var(--text)',
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                      {r.date}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 2 }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#FFB800', fontSize: 14 }}>
                      ★
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  "{r.text}"
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                  }}
                >
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{r.area}</span>
                  <a
                    href={YANDEX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Смотреть полностью →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
