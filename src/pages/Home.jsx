import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const colors = [
  '#b00000',
  '#9a6700',
  '#1d4ed8',
  '#1f7a3f',
  '#6d4aa2',
  '#be123c',
  '#f59e0b',
];

const Home = () => {
  const { t } = useTranslation();

  const [trailDots, setTrailDots] = useState([]);
  const [showAbout, setShowAbout] = useState(false);

  const heroWords = t('home.heroWords', { returnObjects: true });
  const fullName = t('home.name');

  const openCV = () => {
    const cvWindow = window.open('', '_blank');

    if (!cvWindow) return;

    cvWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Photsathon Karlsson CV</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 850px;
              margin: 40px auto;
              padding: 40px;
              color: #111;
              line-height: 1.6;
            }

            h1 {
              margin-bottom: 5px;
              font-size: 34px;
              color: #b00000;
            }

            h2 {
              margin-top: 34px;
              border-bottom: 2px solid #111;
              padding-bottom: 6px;
              font-size: 20px;
            }

            h3 {
              margin-bottom: 4px;
            }

            p {
              margin: 6px 0;
            }

            ul {
              padding-left: 20px;
            }

            .contact {
              margin-bottom: 30px;
            }

            .download-button {
              position: fixed;
              top: 20px;
              right: 20px;
              padding: 12px 18px;
              border: 2px solid #111;
              border-radius: 10px;
              background: #111;
              color: #fff;
              font-weight: bold;
              cursor: pointer;
            }

            @media print {
              .download-button {
                display: none;
              }

              body {
                margin: 0;
                padding: 24px;
              }
            }
          </style>
        </head>

        <body>
          <button class="download-button" onclick="window.print()">
            Save / Download PDF
          </button>

          <h1>PHOTSATHON KARLSSON</h1>

          <div class="contact">
            <p>+46 70 913 5407</p>
            <p>photsathon.sangsukwaw@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/photsathonkarlsson</p>
            <p>photsathon.com</p>
          </div>

          <h2>PROFILE</h2>
          <p>I am a responsible, adaptable, and motivated person with experience in education, customer service, administration, and IT.</p>
          <p>I completed my studies in Frontend Development in Sweden and also have educational backgrounds in Early Childhood Education, English Language, and Business Administration.</p>
          <p>I have work experience in both Thailand and Sweden and am comfortable using computers, digital tools, and working both independently and as part of a team.</p>

          <h2>SKILLS</h2>
          <ul>
            <li>Customer Service & Communication</li>
            <li>Administration & Documentation</li>
            <li>IT Support & Digital Tools</li>
            <li>Frontend Development: React, HTML, CSS, JavaScript, TypeScript</li>
            <li>UX/UI Design: Figma, Responsive Design, WCAG</li>
            <li>Teamwork & Collaboration</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Flexible & Adaptable</li>
          </ul>

          <h2>WORK EXPERIENCE</h2>
          <p><strong>2025 – 2026</strong> | Frontend Development Intern — Satit Bilingual School of Rangsit University, Thailand</p>
          <p><strong>2025</strong> | Service Worker / Cleaner — Kungälvs Sjukhus, Sweden</p>
          <p><strong>2021 – 2023</strong> | Preschool Assistant — Ale Kommun, Sweden</p>
          <p><strong>2019 – 2021</strong> | Preschool Assistant — Göteborg Stad, Sweden</p>
          <p><strong>2019 – 2020</strong> | Housekeeper — Radisson Blu Scandinavia Hotel, Sweden</p>
          <p><strong>2019</strong> | Preschool Assistant Internship — Skånegatans Förskola, Sweden</p>
          <p><strong>2015</strong> | Administrator — HeadStart International School, Phuket, Thailand</p>
          <p><strong>2013 – 2015</strong> | Thai Language Teacher — The Genius Language School, Phuket, Thailand</p>
          <p><strong>2011 – 2012</strong> | Teacher Assistant — Anuban Khonkaen School, Thailand</p>
          <p><strong>2010 – 2011</strong> | English Teacher — Paiboon Wittaya School, Thailand</p>
          <p><strong>2010</strong> | English Teacher — Smart English for Kids, Thailand</p>

          <h2>EDUCATION</h2>
          <p><strong>2024 – 2026</strong> | Frontend Development — NBI Handelsakademin, Gothenburg, Sweden</p>
          <p><strong>2024</strong> | Programming 1 HTML/CSS — Handelsakademin, Sweden</p>
          <p><strong>2024</strong> | Programming 1 C# — Hermods, Sweden</p>
          <p><strong>2024</strong> | Swedish as a Second Language 2 — Hermods, Sweden</p>
          <p><strong>2022</strong> | Preschool / Nursery Assistant Education — Komvux Alafors, Sweden</p>
          <p><strong>2006</strong> | B.A. English Language and Literature — Naresuan University, Thailand</p>
          <p><strong>2000</strong> | Business Administration and Computer Applications — Northeastern Technological College, Thailand</p>

          <h2>LANGUAGES</h2>
          <p>Thai — Native</p>
          <p>English — Professional Working Proficiency</p>
          <p>Swedish — Working Proficiency</p>

          <p><strong>References available upon request.</strong></p>
        </body>
      </html>
    `);

    cvWindow.document.close();
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newDot = {
        id: `${Date.now()}-${Math.random()}`,
        x: event.clientX,
        y: event.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setTrailDots((prevDots) => [...prevDots.slice(-14), newDot]);

      const mainLogo = document.querySelector('.logo-main');

      if (mainLogo) {
        const rotateX = (event.clientY / window.innerHeight - 0.5) * -10;
        const rotateY = (event.clientX / window.innerWidth - 0.5) * 10;

        mainLogo.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotate(-2deg)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (trailDots.length === 0) return;

    const timer = setTimeout(() => {
      setTrailDots((prevDots) => prevDots.slice(1));
    }, 350);

    return () => clearTimeout(timer);
  }, [trailDots]);

  return (
    <main className="home-page" id="home">
      <div className="cursor-trail" aria-hidden="true">
        {trailDots.map((dot) => (
          <span
            key={dot.id}
            className="cursor-dot"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              background: dot.color,
            }}
          />
        ))}
      </div>

      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-big-text">
          <h1 id="home-title" aria-label={heroWords.join(' ')}>
            {heroWords.map((word) => (
              <span className="home-word" key={word}>
                {word.split('').map((letter, index) => (
                  <span
                    key={`${word}-${letter}-${index}`}
                    className="home-hover-letter"
                    style={{ '--hover-color': colors[index % colors.length] }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <aside className="home-intro-card" aria-label="Short introduction">
          <div className="home-logo-group">
            <img
              className="home-floating-logo logo-main"
              src={`${import.meta.env.BASE_URL}dist/img/logo - home.png`}
              alt={t('home.logoAlt')}
            />

            <img
              className="logo-side-item"
              src={`${import.meta.env.BASE_URL}dist/img/logo - home2.png`}
              alt=""
              aria-hidden="true"
            />
          </div>

          <p className="home-kicker">{t('home.intro')}</p>

          <h2 className="home-name" aria-label={fullName}>
            {fullName.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={
                  letter === ' '
                    ? 'name-space'
                    : `letter color-${(index % 10) + 1}`
                }
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h2>

          <p className="home-subtitle">{t('home.role')}</p>

          <p className="home-description">
            {t('home.descriptionLine1')}
            <br />
            {t('home.descriptionLine2')}
          </p>

          <div className="home-actions">
            <button type="button" className="home-button" onClick={openCV}>
              {t('home.viewCV')}
            </button>

            <button
              type="button"
              className="home-button"
              onClick={() => setShowAbout(!showAbout)}
            >
              {t('home.aboutMe')}
            </button>
          </div>

          {showAbout && (
            <div className="home-about-box">
              <p>{t('home.aboutLine1')}</p>
              <p>{t('home.aboutLine2')}</p>
            </div>
          )}
        </aside>
      </section>
    </main>
  );
};

export default Home;