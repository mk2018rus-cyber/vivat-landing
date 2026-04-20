export default function Hero() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 80px',
        background:
          'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(232,112,26,0.06) 0%, transparent 70%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.6,
        }}
      />

      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            className="anim-slide-down"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(232,112,26,0.12)',
              border: '1px solid rgba(232,112,26,0.3)',
              borderRadius: 100,
              padding: '6px 14px',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: 'var(--accent)',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Специализируемся на новостройках Москвы и МО
            </span>
          </div>

          {/* Big Job */}
          <p
            className="anim-fade-up d1"
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              margin: '0 0 14px',
              letterSpacing: '0.02em',
            }}
          >
            Чтобы ремонт шёл по плану — и вы въехали в срок
          </p>

          {/* H1 */}
          <h1
            className="font-display anim-fade-up d2"
            style={{
              fontSize: 'clamp(44px, 6.5vw, 84px)',
              lineHeight: 0.95,
              color: 'var(--text)',
              margin: '0 0 4px',
            }}
          >
            Стяжка пола в Москве
          </h1>
          <h1
            className="font-display anim-fade-up d3"
            style={{
              fontSize: 'clamp(44px, 6.5vw, 84px)',
              lineHeight: 0.95,
              color: 'var(--accent)',
              margin: '0 0 20px',
            }}
          >
            за 1 день
          </h1>

          {/* Tagline — UTP */}
          <p
            className="anim-fade-up d3"
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'var(--text)',
              margin: '0 0 16px',
              lineHeight: 1.4,
            }}
          >
            Реальная цена под ключ — без сюрпризов, гарантия 5 лет по договору
          </p>

          {/* Подзаголовок — ценность */}
          <p
            className="anim-fade-up d4"
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--muted)',
              margin: '0 0 20px',
              maxWidth: 460,
            }}
          >
            Работа, материалы и доставка — всё в одной итоговой цене.
            Убираем мусор и песок после себя. Рейтинг 5.0 на Яндекс Картах — 433 отзыва.
          </p>

          {/* Страх */}
          <div
            className="anim-fade-up d4"
            style={{
              background: 'rgba(232,112,26,0.06)',
              border: '1px solid rgba(232,112,26,0.2)',
              borderRadius: 8,
              padding: '12px 16px',
              marginBottom: 36,
              fontSize: 14,
              color: 'var(--muted)',
              maxWidth: 460,
              lineHeight: 1.55,
            }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>⚠ Осторожно:</span>{' '}
            у конкурентов «от 450 ₽/м²» — итоговая цена в 2–3 раза выше.
            Мы называем окончательную цифру с первого звонка.
          </div>

          {/* CTA */}
          <div
            className="anim-fade-up d5"
            style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 40, flexWrap: 'wrap' }}
          >
            <button
              onClick={scrollToQuiz}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '16px 36px',
                fontFamily: 'Golos Text, sans-serif',
                fontWeight: 700,
                fontSize: 17,
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget
                t.style.background = 'var(--accent-hover)'
                t.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const t = e.currentTarget
                t.style.background = 'var(--accent)'
                t.style.transform = 'translateY(0)'
              }}
            >
              Рассчитать стоимость →
            </button>
            <span style={{ color: 'var(--muted)', fontSize: 14 }}>от 65 000 ₽</span>
          </div>

          {/* Stats */}
          <div
            className="anim-fade-up d6"
            style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}
          >
            {[
              { n: '500+', label: 'объектов' },
              { n: '7 лет', label: 'в Москве' },
              { n: '5 лет', label: 'гарантия' },
            ].map(item => (
              <div key={item.label}>
                <div
                  className="font-display"
                  style={{ fontSize: 28, color: 'var(--text)', lineHeight: 1 }}
                >
                  {item.n}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="hero-image-col anim-scale-in d3" style={{ position: 'relative' }}>
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              position: 'relative',
            }}
          >
            <img
              src="/hero-before-after.png"
              alt="Стяжка пола — до и после"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: -16,
              left: -16,
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '12px 16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>
              Без выезда замерщика
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
              Расчёт за 3 минуты
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              top: -16,
              right: -16,
              background: 'var(--accent)',
              borderRadius: 12,
              padding: '10px 16px',
              boxShadow: '0 8px 32px rgba(232,112,26,0.3)',
            }}
          >
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 1 }}>
              Гарантия
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>5 лет</div>
          </div>
        </div>
      </div>
    </section>
  )
}
