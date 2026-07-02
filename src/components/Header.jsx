import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../index.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      12;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <header className="header">
      <div className="header-top">
        <button
          className="logo"
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home section"
        >
          <span>photsathon.com</span>
        </button>

        <nav className="nav" aria-label="Main navigation">
          <button type="button" onClick={() => scrollToSection('home')}>
            {t('nav.home')}
          </button>

          <button type="button" onClick={() => scrollToSection('projects')}>
            {t('nav.projects')}
          </button>

          <button type="button" onClick={() => scrollToSection('whatido')}>
            {t('nav.whatido')}
          </button>

          <button type="button" onClick={() => scrollToSection('lifestyle')}>
            {t('nav.gallery')}
          </button>

          <button type="button" onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </button>
        </nav>

        <div className="right-section">
          <div className="lang-buttons">
            <button type="button" onClick={() => changeLanguage('en')}>
              EN
            </button>

            <button type="button" onClick={() => changeLanguage('th')}>
              TH
            </button>

            <button type="button" onClick={() => changeLanguage('sv')}>
              SV
            </button>
          </div>

          <button
            className="dark-toggle"
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;