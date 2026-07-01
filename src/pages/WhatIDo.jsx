import React from 'react';
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

const WhatIDo = () => {
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
      icon: '💻',
      title: 'Frontend Development',
      description:
        'I build responsive websites with clean code and user-friendly structure.',
      items: ['React', 'HTML, CSS, JavaScript', 'TypeScript'],
    },
    {
      icon: '🖥️',
      title: 'Web Design',
      description:
        'I design simple, modern websites that are clear, useful, and easy to use.',
      items: ['Responsive Design', 'Website Structure', 'Visual Design'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'I create digital experiences that focus on people, accessibility, and good flow.',
      items: ['Figma', 'WCAG', 'User-friendly Design'],
    },
    {
      icon: '🛠️',
      title: 'IT Support',
      description:
        'I can help with digital tools, basic troubleshooting, and technical support.',
      items: ['Helpdesk', 'Troubleshooting', 'Digital Tools'],
    },
    {
      icon: '👩‍🏫',
      title: 'Preschool Assistant',
      description:
        'I have experience supporting children, teachers, learning, and daily routines.',
      items: ['Learning Support', 'Communication', 'Teamwork'],
    },
    {
      icon: '📋',
      title: 'Administrator',
      description:
        'I have experience with documentation, organization, and customer communication.',
      items: ['Documentation', 'Organization', 'Customer Service'],
    },
  ];

  const skills = [
    {
      icon: '💻',
      title: 'Frontend Development',
      text: 'React, HTML, CSS, JavaScript, TypeScript',
    },
    {
      icon: '🎧',
      title: 'IT Support',
      text: 'Helpdesk, Troubleshooting, Digital Tools',
    },
    {
      icon: '🎨',
      title: 'UX/UI Design',
      text: 'Figma, Responsive Design, WCAG',
    },
    {
      icon: '💬',
      title: 'Customer Service',
      text: 'Communication, Problem Solving',
    },
    {
      icon: '📋',
      title: 'Administration',
      text: 'Documentation, Organization',
    },
    {
      icon: '👩‍🏫',
      title: 'Education',
      text: 'Teaching, Learning Support',
    },
  ];

  const education = [
    '2024 – 2026 | Frontend Development — NBI Handelsakademin, Gothenburg, Sweden',
    '2024 | Programming 1 HTML/CSS — Handelsakademin, Sweden',
    '2024 | Programming 1 C# — Hermods, Sweden',
    '2024 | Swedish as a Second Language 2 — Hermods, Sweden',
    '2022 | Preschool / Nursery Assistant Education — Komvux Alafors, Sweden',
    '2006 | B.A. English Language and Literature — Naresuan University, Thailand',
    '2000 | Business Administration and Computer Applications — Northeastern Technological College, Thailand',
  ];

  const work = [
    '2025 – 2026 | Frontend Development Intern — Satit Bilingual School of Rangsit University, Thailand',
    '2025 | Service Worker / Cleaner — Kungälvs Sjukhus, Sweden',
    '2021 – 2023 | Preschool Assistant — Ale Kommun, Sweden',
    '2019 – 2021 | Preschool Assistant — Göteborg Stad, Sweden',
    '2019 – 2020 | Housekeeper — Radisson Blu Scandinavia Hotel, Sweden',
    '2019 | Preschool Assistant Internship — Skånegatans Förskola, Sweden',
    '2015 | Administrator — HeadStart International School, Phuket, Thailand',
    '2013 – 2015 | Thai Language Teacher — The Genius Language School, Phuket, Thailand',
    '2011 – 2012 | Teacher Assistant — Anuban Khonkaen School, Thailand',
    '2010 – 2011 | English Teacher — Paiboon Wittaya School, Thailand',
    '2010 | English Teacher — Smart English for Kids, Thailand',
  ];

  return (
    <main className="what-page" id="whatido">
      <section className="what-hero">
        <div className="what-hero-text">
          <h1>{hoverText('What I Do')}</h1>
          <p>
            I combine technology, creativity, and communication to create useful
            digital experiences and solve everyday problems.{' '}
            <span className="heart">♡</span>
          </p>
        </div>
      </section>

      <section className="what-section">
        <h2>{hoverText('How I Can Help')}</h2>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
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
        <h2>{hoverText('Skills')}</h2>

        <div className="skills-strip">
          {skills.map((skill) => (
            <article className="skill-mini-card" key={skill.title}>
              <div className="skill-mini-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="what-two-columns">
        <div className="what-section">
          <h2>{hoverText('Education')}</h2>

          <div className="info-list">
            {education.map((item) => (
              <div className="info-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="what-section">
          <h2>{hoverText('Work Experience')}</h2>

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
        <h2>♡ Let&apos;s create together</h2>
        <p>Every great idea starts with a simple conversation.</p>
        <a href="#contact">Say Hello 👋</a>
      </section>
    </main>
  );
};

export default WhatIDo;