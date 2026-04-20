import { useState } from 'react'

const faqs = [
  {
    q: 'Почему у вас цена выше, чем «от 450 ₽/м²» у других?',
    a: 'Потому что «от 450 ₽» — это цена без материалов, без подъёма, без маяков, без уборки. Итоговая цена там такая же, как у нас, а то и выше. Мы называем финальную стоимость сразу — без приманок и доплат в процессе. Хотите — можем пройти экспертизу качества и сравнить.',
  },
  {
    q: 'Бригады российские специалисты?',
    a: 'Да. Все наши бригады — российские специалисты с опытом работы в Москве и МО. Это один из ключевых принципов нашего подбора команды.',
  },
  {
    q: 'Вы не повредите коммуникации?',
    a: 'Работаем аккуратно с уже смонтированными трубами и проводкой. За 7 лет и 500+ объектов — ни одного случая повреждения коммуникаций. Если коммуникации ещё не закрыты — мы скажем об этом до начала работ.',
  },
  {
    q: 'Уберёте после себя?',
    a: 'Да. Уборка входит в стоимость — в том числе вывоз строительного мусора и уборка песка у подъезда. Соседи не пострадают.',
  },
  {
    q: 'Через сколько дней можно укладывать финишное покрытие?',
    a: 'Зависит от типа стяжки и толщины. Полусухая стяжка — от 3–4 дней до лёгкой нагрузки, полное высыхание 28 дней. Мокрая — дольше. Менеджер скажет точно по вашему объекту при звонке.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Оплата по факту выполненных работ. Аванс не требуем. После приёмки подписываем акт выполненных работ, оплачиваете полностью. Работаем с физлицами — наличными или переводом.',
  },
  {
    q: 'А вдруг потрескается или затопим соседей?',
    a: 'Трещины исключены при соблюдении технологии — мы за этим следим. Затопление исключено: стяжка не является источником воды. Если трещина появится в течение гарантийного срока (2 года) — устраняем бесплатно, это прописано в договоре.',
  },
  {
    q: 'Работаете только на западе Москвы?',
    a: 'Основной ареал — запад Москвы и ближнее Подмосковье (Митино, Красногорск, Одинцово, Химки, Балашиха). На другие направления берёмся избирательно — уточняйте при звонке.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      style={{
        padding: '100px 24px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
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
            Вопросы и ответы
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
            Спрашивают чаще всего
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius:
                  i === 0
                    ? '10px 10px 0 0'
                    : i === faqs.length - 1
                    ? '0 0 10px 10px'
                    : 0,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
                ...(open === i && { borderColor: 'rgba(232,112,26,0.35)' }),
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: open === i ? 'var(--accent)' : 'var(--text)',
                    fontFamily: 'Golos Text, sans-serif',
                    transition: 'color 0.2s',
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: 'var(--accent)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.25s',
                    minWidth: 24,
                    textAlign: 'center',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  className="anim-fade-up"
                  style={{ padding: '0 24px 20px' }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
