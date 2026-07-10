import React, { useState } from 'react';
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

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('projectsPage.filters.all') },
    { key: 'UI/UX', label: t('projectsPage.filters.uiux') },
    { key: 'JavaScript', label: t('projectsPage.filters.javascript') },
    { key: 'HTML/CSS', label: t('projectsPage.filters.htmlcss') },
    { key: 'Testing', label: t('projectsPage.filters.testing') },
    { key: 'Agile', label: t('projectsPage.filters.agile') },
    { key: 'TypeScript', label: t('projectsPage.filters.typescript') },
  ];

  const renderHoverText = (text, className = '') =>
    text.split('').map((char, index) => (
      <span
        key={`${char}-${index}`}
        className={`projects-hover-letter ${className}`}
        style={{ '--hover-color': colors[index % colors.length] }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  const categoryLabel = (category) => {
    const labels = {
      Website: t('projectsPage.filters.website'),
      'UI/UX': t('projectsPage.filters.uiux'),
      JavaScript: t('projectsPage.filters.javascript'),
      'HTML/CSS': t('projectsPage.filters.htmlcss'),
      Testing: t('projectsPage.filters.testing'),
      Agile: t('projectsPage.filters.agile'),
      TypeScript: t('projectsPage.filters.typescript'),
    };

    return labels[category] || category;
  };

  const projects = [
    {
      id: 1,
      title: t('projectsPage.items.firststep.title'),
      categories: ['Website', 'JavaScript'],
      description: t('projectsPage.items.firststep.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-FirstStep.jpg`,
      link: 'https://firststep-n9zi.onrender.com/',
    },
    {
      id: 2,
      title: t('projectsPage.items.chappy.title'),
      categories: ['Website', 'TypeScript'],
      description: t('projectsPage.items.chappy.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-ChappyChatApp.jpg`,
      link: 'https://chappy-chat-app-fullstack.onrender.com/',
    },
    {
      id: 3,
      title: t('projectsPage.items.sunnyplay.title'),
      categories: ['Website', 'JavaScript'],
      description: t('projectsPage.items.sunnyplay.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-WebShop.jpg`,
      link: 'https://photsathon-karlsson.github.io/Webbshop_SunnyPlay/',
    },
    {
      id: 4,
      title: t('projectsPage.items.cyberpetz.title'),
      categories: ['UI/UX'],
      description: t('projectsPage.items.cyberpetz.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-CyberPetz.jpg`,
      link: 'https://www.figma.com/proto/h0AOGTG7yqtktfOJev90dt/Inl%C3%A4mningsuppgift-UX---Cyber-Petz?node-id=104-4359&p=f&t=T68YKmFeXj59pKrs-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A167&starting-point-node-id=104%3A4359',
    },
    {
      id: 5,
      title: t('projectsPage.items.betterweb.title'),
      categories: ['HTML/CSS'],
      description: t('projectsPage.items.betterweb.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-BetterWeb.jpg`,
      link: 'https://photsathon-karlsson.github.io/Better-web/',
    },
    {
      id: 6,
      title: t('projectsPage.items.hangman.title'),
      categories: ['JavaScript'],
      description: t('projectsPage.items.hangman.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-HangmanGame.jpg`,
      link: 'https://ritahelwangi.github.io/Hangman/',
    },
    {
      id: 7,
      title: t('projectsPage.items.productcompany.title'),
      categories: ['HTML/CSS'],
      description: t('projectsPage.items.productcompany.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-Produktbolag.jpg`,
      link: 'https://felix-skorvald.github.io/majestic-rabbits/index.html',
    },
    {
      id: 8,
      title: t('projectsPage.items.chili.title'),
      categories: ['JavaScript', 'Agile'],
      description: t('projectsPage.items.chili.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-Chili.jpg`,
      link: 'https://ritahelwangi.github.io/chili',
    },
    {
      id: 9,
      title: t('projectsPage.items.foodtruck.title'),
      categories: ['JavaScript'],
      description: t('projectsPage.items.foodtruck.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-Foodtruck.jpg`,
      link: 'https://photsathon-karlsson.github.io/Foodtruck/',
    },
    {
      id: 10,
      title: t('projectsPage.items.travel.title'),
      categories: ['UI/UX', 'Agile'],
      description: t('projectsPage.items.travel.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-TravelApp.jpg`,
      link: 'https://www.figma.com/design/N1IuVPjwyX29Di64YNI51L/Ninja-Kittens?node-id=28-146&t=Ykz87mX05D4vPpva-1',
    },
    {
      id: 11,
      title: t('projectsPage.items.bookit.title'),
      categories: ['UI/UX', 'Agile'],
      description: t('projectsPage.items.bookit.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-MeetingApp.jpg`,
      link: 'https://www.figma.com/design/809dcjkY3JO4tWzC2AN2ve/Grupparbete-agil-UX?node-id=0-1&t=ZGoTdLfzN49FkR98-1',
    },
    {
      id: 12,
      title: t('projectsPage.items.testingtdd.title'),
      categories: ['Testing', 'JavaScript'],
      description: t('projectsPage.items.testingtdd.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-Testing TDD.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/exam-unit-test',
    },
    {
      id: 13,
      title: t('projectsPage.items.testinge2e.title'),
      categories: ['Testing'],
      description: t('projectsPage.items.testinge2e.description'),
      image: `${import.meta.env.BASE_URL}dist/img/Project-testing E2E.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/ReadListE2E',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <main className="projects-page" id="projects">
      <section className="projects-hero">
        <div className="projects-hero-text">
          <h1>
            {renderHoverText(t('projectsPage.titleMy'), 'projects-title-main')}
            <span>
              {renderHoverText(
                t('projectsPage.titleProjects'),
                'projects-title-red'
              )}
            </span>
          </h1>

          <p>{renderHoverText(t('projectsPage.subtitle'))}</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`filter-button ${
                activeFilter === filter.key ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-tags">
                {project.categories.map((category) => (
                  <span key={category}>{categoryLabel(category)}</span>
                ))}
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                {t('projectsPage.viewProject')}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;