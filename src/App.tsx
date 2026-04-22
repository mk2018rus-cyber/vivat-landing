const faqItems = [
  {
    q: 'Сколько времени занимает стяжка?',
    a: 'В среднем 1 день на выполнение работ и от 3 дней до лёгкой нагрузки, в зависимости от типа стяжки и толщины.',
  },
  {
    q: 'Нужно ли приглашать замерщика?',
    a: 'Нет. Мы рассчитываем стоимость по площади, адресу и этажу. Это ускоряет старт работ и экономит ваше время.',
  },
  {
    q: 'Даете ли гарантию?',
    a: 'Да, письменная гарантия 5 лет по договору на все виды работ.',
  },
]

const steps = [
  'Оставляете заявку на сайте',
  'Отвечаете на 3 коротких вопроса',
  'Получаете точную смету и дату выхода бригады',
]

const advantages = [
  'Без выезда замерщика',
  'Старт работ от 3 дней',
  'Гарантия 5 лет по договору',
  'Прозрачная смета без скрытых доплат',
]

export default function App() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar__row">
          <a href="#" className="brand">VIVA STROY</a>
          <nav>
            <a href="#steps">Как это работает</a>
            <a href="#benefits">Преимущества</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className="btn btn--small">Оставить заявку</button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Полусухая стяжка пола в Москве и МО</p>
            <h1>Современный лендинг в HTML с чистым и уверенным дизайном</h1>
            <p className="lead">
              Аккуратная типографика, мягкая палитра, акцентный CTA и удобная структура
              блоков — как в референсе, но в виде готовой HTML-страницы.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#cta">Рассчитать стоимость</a>
              <a className="btn btn--ghost" href="#steps">Смотреть блоки</a>
            </div>
            <ul className="hero__tags">
              <li>500+ объектов</li>
              <li>7 лет опыта</li>
              <li>Рейтинг 5.0</li>
            </ul>
          </div>

          <div className="heroCard">
            <h2>Быстрый расчёт</h2>
            <p>3 вопроса, 20 минут и точная стоимость без лишних звонков.</p>
            <form>
              <label>
                Площадь, м²
                <input type="number" placeholder="Например: 48" />
              </label>
              <label>
                Район / адрес
                <input type="text" placeholder="Например: Химки" />
              </label>
              <label>
                Этаж
                <input type="number" placeholder="Например: 8" />
              </label>
              <button type="button" className="btn">Получить расчёт</button>
            </form>
          </div>
        </div>
      </section>

      <section id="steps" className="section section--soft">
        <div className="container">
          <p className="eyebrow">Как это работает</p>
          <h2>Простой сценарий от заявки до старта работ</h2>
          <div className="cards cards--3">
            {steps.map((step, idx) => (
              <article className="card" key={step}>
                <span className="index">0{idx + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <div className="container">
          <p className="eyebrow">Преимущества</p>
          <h2>Фокус на качестве и прозрачности</h2>
          <div className="cards cards--2">
            {advantages.map(item => (
              <article className="card" key={item}>
                <h3>{item}</h3>
                <p>
                  Работаем по договору, фиксируем условия заранее и держим связь на каждом
                  этапе — от консультации до приемки объекта.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section--soft">
        <div className="container narrow">
          <p className="eyebrow">Вопросы и ответы</p>
          <h2>Часто спрашивают</h2>
          <div className="faq">
            {faqItems.map(item => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section cta">
        <div className="container narrow">
          <p className="eyebrow">Готовы начать?</p>
          <h2>Оставьте заявку и получите смету уже сегодня</h2>
          <p className="lead">Бесплатно, без обязательств и навязчивых продаж.</p>
          <a className="btn" href="#">Отправить заявку</a>
        </div>
      </section>
    </main>
  )
}
