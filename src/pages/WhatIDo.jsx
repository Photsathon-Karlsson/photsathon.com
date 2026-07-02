import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const colors = [
  '#FF0080',
  '#FF5580',
  '#4300FF',
  '#00CAFF',
  '#00FFDE',
  '#FCB53B',
  '#CF0A0A',
];

const img = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

const WhatIDo = () => {
  const { t } = useTranslation();

  const hoverText = (text) =>
    text.split('').map((letter, index) => (
      <span
        key={`${letter}-${index}`}
        className="what-hover-letter"
        style={{ '--hover-color': colors[index % colors.length] }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));

  const services = [
    {
      icon: img('logo - what i do - Frontend Development.png'),
      title: t('whatidoPage.services.frontend.title'),
      description: t('whatidoPage.services.frontend.description'),
      items: t('whatidoPage.services.frontend.items', { returnObjects: true }),
    },
    {
      icon: img('logo - what i do - Web Design.png'),
      title: t('whatidoPage.services.webdesign.title'),
      description: t('whatidoPage.services.webdesign.description'),
      items: t('whatidoPage.services.webdesign.items', { returnObjects: true }),
    },
    {
      icon: img('logo - what i do - UIUX Design.png'),
      title: t('whatidoPage.services.uiux.title'),
      description: t('whatidoPage.services.uiux.description'),
      items: t('whatidoPage.services.uiux.items', { returnObjects: true }),
    },
    {
      icon: img('logo - what i do - IT Support.png'),
      title: t('whatidoPage.services.itsupport.title'),
      description: t('whatidoPage.services.itsupport.description'),
      items: t('whatidoPage.services.itsupport.items', { returnObjects: true }),
    },
    {
      icon: img('logo - what i do - Preschool Assistant.png'),
      title: t('whatidoPage.services.preschool.title'),
      description: t('whatidoPage.services.preschool.description'),
      items: t('whatidoPage.services.preschool.items', { returnObjects: true }),
    },
    {
      icon: img('logo - what i do - Admin.png'),
      title: t('whatidoPage.services.admin.title'),
      description: t('whatidoPage.services.admin.description'),
      items: t('whatidoPage.services.admin.items', { returnObjects: true }),
    },
  ];

  const skills = [
    {
      icon: img('logo - what i do - Frontend Development 2.png'),
      title: t('whatidoPage.skills.frontend.title'),
      text: t('whatidoPage.skills.frontend.text'),
    },
    {
      icon: img('logo - what i do - IT Support 2.png'),
      title: t('whatidoPage.skills.itsupport.title'),
      text: t('whatidoPage.skills.itsupport.text'),
    },
    {
      icon: img('logo - what i do - UIUX Design 2.png'),
      title: t('whatidoPage.skills.uiux.title'),
      text: t('whatidoPage.skills.uiux.text'),
    },
    {
      icon: img('logo - what i do - Customer Service.png'),
      title: t('whatidoPage.skills.customer.title'),
      text: t('whatidoPage.skills.customer.text'),
    },
    {
      icon: img('logo - what i do - Admin 2.png'),
      title: t('whatidoPage.skills.admin.title'),
      text: t('whatidoPage.skills.admin.text'),
    },
    {
      icon: img('logo - what i do - Education.png'),
      title: t('whatidoPage.skills.education.title'),
      text: t('whatidoPage.skills.education.text'),
    },
  ];

  const education = t('whatidoPage.educationList', { returnObjects: true });
  const work = t('whatidoPage.workList', { returnObjects: true });

  return (
    <main className="what-page" id="whatido">
      <section className="what-hero">
        <div className="what-hero-text">
          <h1>{hoverText(t('whatidoPage.title'))}</h1>
          <p>{t('whatidoPage.subtitle')}</p>
        </div>
      </section>

      <section className="what-section">
        <h2>{hoverText(t('whatidoPage.helpTitle'))}</h2>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon-img"
                />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="what-section">
        <h2>{hoverText(t('whatidoPage.skillsTitle'))}</h2>

        <div className="skills-strip">
          {skills.map((skill) => (
            <article className="skill-mini-card" key={skill.title}>
              <div className="skill-mini-icon">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-mini-icon-img"
                />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="what-two-columns">
        <div className="what-section">
          <h2>{hoverText(t('whatidoPage.educationTitle'))}</h2>

          <div className="info-list">
            {education.map((item) => (
              <div className="info-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="what-section">
          <h2>{hoverText(t('whatidoPage.workTitle'))}</h2>

          <div className="info-list">
            {work.map((item) => (
              <div className="info-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="what-cta">
        <h2>{t('whatidoPage.ctaTitle')}</h2>
        <p>{t('whatidoPage.ctaText')}</p>
        <a href="#contact">{t('whatidoPage.ctaButton')}</a>
      </section>
    </main>
  );
};

export default WhatIDo;