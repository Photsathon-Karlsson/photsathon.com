import React, { useState } from 'react';
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
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    'All Projects',
    'UI/UX',
    'JavaScript',
    'HTML/CSS',
    'Testing',
    'Agile',
    'TypeScript',
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

  const projects = [
    {
      id: 1,
      title: 'FirstStep',
      categories: ['Website', 'JavaScript'],
      description:
        'A web app that helps schools manage student onboarding in one place. Try it - ✉️: admin@test.com 🔑: 12345678',
      image: `${import.meta.env.BASE_URL}img/Project-FirstStep.jpg`,
      link: 'https://firststep-n9zi.onrender.com/',
    },
    {
      id: 2,
      title: 'Chappy Chat App',
      categories: ['Website', 'TypeScript'],
      description:
        'A simple real-time chat app where users can send and receive messages online.',
      image: `${import.meta.env.BASE_URL}img/Project-ChappyChatApp.jpg`,
      link: 'https://chappy-chat-app-fullstack.onrender.com/',
    },
    {
      id: 3,
      title: 'SunnyPlay Webshop',
      categories: ['Website', 'JavaScript'],
      description:
        'An online toy shop with product browsing, shopping cart, and admin features.',
      image: `${import.meta.env.BASE_URL}img/Project-WebShop.jpg`,
      link: 'https://photsathon-karlsson.github.io/Webbshop_SunnyPlay/',
    },
    {
      id: 4,
      title: 'Cyber Petz',
      categories: ['UI/UX'],
      description:
        'A modern UI/UX concept for a smart pet brand with shopping and checkout flows.',
      image: `${import.meta.env.BASE_URL}img/Project-CyberPetz.jpg`,
      link: 'https://www.figma.com/proto/h0AOGTG7yqtktfOJev90dt/Inl%C3%A4mningsuppgift-UX---Cyber-Petz?node-id=104-4359&p=f&t=T68YKmFeXj59pKrs-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A167&starting-point-node-id=104%3A4359',
    },
    {
      id: 5,
      title: 'Better Web',
      categories: ['HTML/CSS'],
      description:
        'A conference website with event details, schedules, and online registration.',
      image: `${import.meta.env.BASE_URL}img/Project-BetterWeb.jpg`,
      link: 'https://photsathon-karlsson.github.io/Better-web/',
    },
    {
      id: 6,
      title: 'Hangman Game',
      categories: ['JavaScript'],
      description:
        'A classic word guessing game built with interactive gameplay and score tracking.',
      image: `${import.meta.env.BASE_URL}img/Project-HangmanGame.jpg`,
      link: 'https://ritahelwangi.github.io/Hangman/',
    },
    {
      id: 7,
      title: 'Product Company Website',
      categories: ['HTML/CSS'],
      description:
        'A responsive company website with products, business information, and contact details.',
      image: `${import.meta.env.BASE_URL}img/Project-Produktbolag.jpg`,
      link: 'https://felix-skorvald.github.io/majestic-rabbits/index.html',
    },
    {
      id: 8,
      title: 'Chili Restaurant App',
      categories: ['JavaScript', 'Agile'],
      description:
        'A restaurant web app for browsing menus, placing orders, and managing bookings.',
      image: `${import.meta.env.BASE_URL}img/Project-Chili.jpg`,
      link: 'https://ritahelwangi.github.io/chili',
    },
    {
      id: 9,
      title: 'Foodtruck App',
      categories: ['JavaScript'],
      description:
        'A food ordering app with a digital menu, shopping cart, and online checkout.',
      image: `${import.meta.env.BASE_URL}img/Project-Foodtruck.jpg`,
      link: 'https://photsathon-karlsson.github.io/Foodtruck/',
    },
    {
      id: 10,
      title: 'Travel App',
      categories: ['UI/UX', 'Agile'],
      description:
        'A travel app designed to make public transport easier and more user-friendly.',
      image: `${import.meta.env.BASE_URL}img/Project-TravelApp.jpg`,
      link: 'https://www.figma.com/design/N1IuVPjwyX29Di64YNI51L/Ninja-Kittens?node-id=28-146&t=Ykz87mX05D4vPpva-1',
    },
    {
      id: 11,
      title: 'Book It',
      categories: ['UI/UX', 'Agile'],
      description:
        'A meeting room booking app designed with a user-focused UX process.',
      image: `${import.meta.env.BASE_URL}img/Project-MeetingApp.jpg`,
      link: 'https://www.figma.com/design/809dcjkY3JO4tWzC2AN2ve/Grupparbete-agil-UX?node-id=0-1&t=ZGoTdLfzN49FkR98-1',
    },
    {
      id: 12,
      title: 'Testing TDD',
      categories: ['Testing', 'JavaScript'],
      description:
        'A testing project using unit tests to improve code quality and reliability.',
      image: `${import.meta.env.BASE_URL}img/Project-Testing TDD.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/exam-unit-test',
    },
    {
      id: 13,
      title: 'Testing E2E',
      categories: ['Testing'],
      description:
        'An end-to-end testing project that validates user flows in a web application.',
      image: `${import.meta.env.BASE_URL}img/Project-testing E2E.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/ReadListE2E',
    },
  ];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <main className="projects-page" id="projects">
      <section className="projects-hero">
        <div className="projects-hero-text">
          <h1>
            {renderHoverText('My ', 'projects-title-main')}
            <span>{renderHoverText('Projects', 'projects-title-red')}</span>
          </h1>

          <p>{renderHoverText('From concept to website. ♡')}</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
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
                  <span key={category}>{category}</span>
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
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;