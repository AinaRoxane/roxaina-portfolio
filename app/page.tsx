import Image from "next/image";

import PortfolioContent from "./_components/PortfolioContent";

export default function Home() {
  return (
    <>
      {/* ============================================================
          STARRY BACKGROUND
      ============================================================ */}
      <div className="starfield" aria-hidden="true">
        <div className="stars"></div>
        <div className="stars-small"></div>
      </div>

      {/* ============================================================
          HEADER
      ============================================================ */}
      <header className="header" role="banner">
        <div className="header-inner">
          <div className="header-left-group">
            <div className="logo">Roxane R.</div>
            <nav className="nav-links" aria-label="Main navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
            </nav>
          </div>
          <div className="header-actions">
            <a href="mailto:roxane.rakotoarimanana@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/roxane-rakotoarimanana"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}
      <main className="app">
        {/* ============================================================
            HERO
        ============================================================ */}
        <section id="home" className="hero-section">
          <div className="hero-art">
            {/* <Image
              src="/images/Sans_titre_7_20260408223008-removebg-preview.png"
              alt="Roxane illustration"
              width={433}
              height={577}
              priority
              className="hero-image"
            /> */}
          </div>
          <div className="hero-content">
            <h1>
              hi, <span className="accent">roxane</span> here
              <span className="blinking-cursor">|</span>
            </h1>
            <p>
              FullStack developer and aspiring artist in Antananarivo.
              I participate in building Madagascar{"'"}s next-generation infrastructure by day
              and dedicate my nights to the creative community. Yes, I am always on the move (^-^)
            </p>
            <a href="mailto:roxane.rakotoarimanana@gmail.com" className="btn-say-hi">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Say hi!
            </a>
          </div>
        </section>

        {/* ============================================================
            ABOUT
        ============================================================ */}
        <section style={{ marginBottom: "4rem" }} id="about">
          <div className="section-header">
            <h2>
              <span className="slash">/</span> about me
            </h2>
            <span className="line"></span>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am currently a <strong>FullStack Developer</strong> at{" "}
                <span className="highlight">e-Fanamby</span>, where I put my business
                management, data analyst, computer vision and developer skills to work
                for the continent{"'"}s future sports analytics platform. Previously, I
                worked for{" "}
                <a href="https://www.kidinov.fr/" target="_blank">
                  Kidinov
                </a>{" "}
                and{" "}
                <a href="https://fianarako.io/" target="_blank">
                  Fianarako.io
                </a>{" "}
                as a freelancer to quick-start their platforms.
              </p>
              <p>Here are some technologies I have been working with:</p>
              <div className="tech-grid">
                <div className="tech-grid-item">Python</div>
                <div className="tech-grid-item">Java</div>
                <div className="tech-grid-item">Spring Boot</div>
                <div className="tech-grid-item">Next.js</div>
                <div className="tech-grid-item">PostgreSQL</div>
                <div className="tech-grid-item">TypeScript</div>
                <div className="tech-grid-item">React Native</div>
                <div className="tech-grid-item">Docker</div>
              </div>
            </div>

            <div className="about-image">
              <Image
                src="/images/Sans_titre_7_20260408223008-removebg-preview.png"
                alt="Roxane artwork"
                width={433}
                height={577}
                className="about-image-img"
              />
            </div>
          </div>
        </section>

        <PortfolioContent />

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <footer className="footer">
          <p>© 2026 Roxane Aina. Built with Next.js & Tailwind. Deployed on Vercel.</p>
        </footer>
      </main>
    </>
  );
}