import "./WorkInProgress.css";

export default function App() {
  return (
    <div className="page-work">
      <div className="hero-work">
        {/* Nav */}
        <header className="nav">
          <div className="nav-brand">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />
              <path
                d="M18 10 C18 10 11 14 11 19.5 C11 23.5 14 25.5 18 25.5 C22 25.5 25 23.5 25 19.5 C25 14 18 10 18 10Z"
                fill="rgba(255,255,255,0.9)"
              />
            </svg>
            <div>
              <p className="brand-name">Molina Psicoterapia</p>
              <p className="brand-sub">
                Consultoría Familiar · La Paz, Bolivia
              </p>
            </div>
          </div>
          <a href="mailto:molinapsicoterapia@gmail.com" className="nav-contact">
            Contactar
          </a>
        </header>

        {/* Main content */}
        <main className="hero-main">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot" />
              Sitio en construcción
            </div>

            <div className="heading-block">
              <h1 className="heading">
                Estamos <span className="heading-accent">renovando</span>
                <br />
                nuestra presencia.
              </h1>
              <p className="subheading">
                Pronto encontrarás aquí toda la información sobre nuestros
                servicios de psicoterapia individual, de pareja y familiar.
              </p>
            </div>

            <div className="contact-links">
              <a href="https://wa.me/59172564060" className="contact-link">
                <span className="contact-icon">M</span>
                WhatsApp
              </a>
              <a
                href="mailto:molinapsicoterapia@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>
                molinapsicoterapia@gmail.com
              </a>
            </div>
          </div>
        </main>

        {/* Wave */}
        <div className="wave-container">
          <svg
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            className="wave-svg"
          >
            <path
              d="M0,64 C360,96 1080,0 1440,64 L1440,96 L0,96 Z"
              fill="#f8f9fa"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 Molina Psicoterapia — La Paz, Bolivia</span>
        <span className="footer-services">
          Psicoterapia · Consultoría Familiar · Bienestar Emocional
        </span>
      </footer>
    </div>
  );
}
