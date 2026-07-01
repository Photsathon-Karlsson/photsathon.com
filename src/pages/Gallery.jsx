import React, { useState } from 'react';
import '../index.css';

const img = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

const colors = [
  '#b00000',
  '#9a6700',
  '#1d4ed8',
  '#1f7a3f',
  '#6d4aa2',
  '#be123c',
  '#f59e0b',
];

const GalleryCarousel = ({ gallery }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? gallery.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === gallery.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="gallery-carousel-card">
      <div className="gallery-carousel-image-wrap">
        <button
          className="gallery-arrow gallery-arrow-left"
          type="button"
          onClick={prevImage}
          aria-label={`Previous image in ${gallery.title}`}
        >
          ‹
        </button>

        <img
          src={gallery.images[index]}
          alt={`${gallery.title} ${index + 1}`}
          className="gallery-carousel-image"
        />

        <button
          className="gallery-arrow gallery-arrow-right"
          type="button"
          onClick={nextImage}
          aria-label={`Next image in ${gallery.title}`}
        >
          ›
        </button>
      </div>

      <div className="gallery-carousel-info">
        <h4>{gallery.title}</h4>
        <span>
          {index + 1} / {gallery.images.length}
        </span>
      </div>
    </article>
  );
};

const Gallery = () => {
  const hoverText = (text) =>
    text.split('').map((letter, index) => (
      <span
        key={`${letter}-${index}`}
        className="gallery-hover-letter"
        style={{ '--hover-color': colors[index % colors.length] }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));

  const workMoments = [
    {
      title: 'Head Start International School, Phuket Thailand',
      images: [
        img('Gallery-Headstart1.jpg'),
        img('Gallery-Headstart2.jpg'),
        img('Gallery-Headstart4.jpg'),
        img('Gallery-Headstart5.jpg'),
        img('Gallery-Headstart6.jpg'),
      ],
    },
    {
      title: 'The Genius Language School, Phuket Thailand',
      images: [
        img('Gallery-TheGeniusLanguageSchool2.jpg'),
        img('Gallery-TheGeniusLanguageSchool3.jpg'),
        img('Gallery-TheGeniusLanguageSchool4.jpg'),
        img('Gallery-TheGeniusLanguageSchool5.jpg'),
        img('Gallery-TheGeniusLanguageSchool6.jpg'),
        img('Gallery-TheGeniusLanguageSchool7.jpg'),
        img('Gallery-TheGeniusLanguageSchool8.jpg'),
        img('Gallery-TheGeniusLanguageSchool9.jpg'),
      ],
    },
    {
      title: 'Anuban Khonkaen, Khonkaen Thailand',
      images: [
        img('Gallery-AnubanKhonkaen1.png'),
        img('Gallery-AnubanKhonkaen2.jpg'),
        img('Gallery-AnubanKhonkaen3.jpg'),
        img('Gallery-AnubanKhonkaen4.png'),
        img('Gallery-AnubanKhonkaen5.jpg'),
      ],
    },
    {
      title: 'Phuket Dog Resort, Phuket Thailand',
      images: [
        img('Gallery-PhuketDogResort1.jpg'),
        img('Gallery-PhuketDogResort2.jpg'),
        img('Gallery-PhuketDogResort3.jpg'),
      ],
    },
  ];

  const schoolEducation = [
    {
      title: 'FrontEnd Developer : NBI-Handelsakademin, Gothenburg Sweden',
      images: [
        img('Gallery-NBI-Handelsakademin1.jpg'),
        img('Gallery-NBI-Handelsakademin3.jpg'),
        img('Gallery-NBI-Handelsakademin4.jpg'),
        img('Gallery-NBI-Handelsakademin6.jpg'),
        img('Gallery-NBI-Handelsakademin7.jpg'),
        img('Gallery-NBI-Handelsakademin8.jpg'),
        img('Gallery-NBI-Handelsakademin9.jpg'),
      ],
    },
    {
      title: 'FrontEnd Developer : Internship - SBS Thailand',
      images: [
        img('Gallery-SBS1.jpg'),
        img('Gallery-SBS2.jpg'),
        img('Gallery-SBS3.jpg'),
        img('Gallery-SBS4.jpg'),
        img('Gallery-SBS5.jpg'),
        img('Gallery-SBS6.jpg'),
        img('Gallery-SBS7.jpg'),
        img('Gallery-SBS8.jpg'),
        img('Gallery-SBS9.jpg'),
      ],
    },
    {
      title: 'Swedish for Immigrants (SFI), Gothenburg Sweden',
      images: [
        img('Gallery-SFI1.jpg'),
        img('Gallery-SFI2.jpg'),
        img('Gallery-SFI3.jpg'),
        img('Gallery-SFI4.jpg'),
      ],
    },
    {
      title: 'SFI-TalangBarnomsorg, Gothenburg Sweden',
      images: [
        img('Gallery-SFI-TalangBarnomsorg1.jpg'),
        img('Gallery-SFI-TalangBarnomsorg2.jpg'),
        img('Gallery-SFI-TalangBarnomsorg3.jpg'),
        img('Gallery-SFI-TalangBarnomsorg4.jpg'),
        img('Gallery-SFI-TalangBarnomsorg5.jpg'),
        img('Gallery-SFI-TalangBarnomsorg6.jpg'),
        img('Gallery-SFI-TalangBarnomsorg7.jpg'),
      ],
    },
    {
      title: 'Bachelor of Arts (BA) English Language and Literature : Naresuan University Thailand',
      images: [
        img('Gallery-NaresuanUniversity1.jpg'),
        img('Gallery-NaresuanUniversity3.jpg'),
        img('Gallery-NaresuanUniversity4.jpg'),
        img('Gallery-NaresuanUniversity5.jpg'),
        img('Gallery-NaresuanUniversity6.jpg'),
        img('Gallery-NaresuanUniversity7.jpg'),
        img('Gallery-NaresuanUniversity8.jpg'),
        img('Gallery-NaresuanUniversity9.jpg'),
      ],
    },
    {
      title: 'Språkcafe, Götaplatsen, Gothenburg Sweden',
      images: [
        img('Gallery-Språkcafe1.jpg'),
        img('Gallery-Språkcafe2.jpg'),
        img('Gallery-Språkcafe3.jpg'),
        img('Gallery-Språkcafe4.jpg'),
        img('Gallery-Språkcafe5.jpg'),
        img('Gallery-Språkcafe6.jpg'),
      ],
    },
  ];

  const hobbies = [
    {
      title: 'Drawing',
      images: [
        img('Gallery-Drawing1.png'),
        img('Gallery-Drawing2.png'),
        img('Gallery-Drawing3.png'),
        img('Gallery-Drawing4.png'),
      ],
    },
    {
      title: 'Crafts',
      images: [
        img('Gallery-Craft1.png'),
        img('Gallery-Craft2.jpg'),
        img('Gallery-Craft3.jpg'),
        img('Gallery-Craft4.jpg'),
      ],
    },
    {
      title: 'Crochet',
      images: [
        img('Gallery-Crochet1.png'),
        img('Gallery-Crochet2.png'),
        img('Gallery-Crochet3.png'),
        img('Gallery-Crochet4.png'),
        img('Gallery-Crochet5.png'),
      ],
    },
  ];

  const places = [
    {
      title: 'Thailand',
      images: Array.from({ length: 13 }, (_, i) =>
        img(`Gallery-Thailand${i + 1}.jpg`)
      ),
    },
    {
      title: 'Sweden',
      images: Array.from({ length: 13 }, (_, i) =>
        img(`Gallery-Sweden${i + 1}.jpg`)
      ),
    },
    {
      title: 'Denmark',
      images: Array.from({ length: 4 }, (_, i) =>
        img(`Gallery-Denmark${i + 1}.jpg`)
      ),
    },
    {
      title: 'Poland',
      images: Array.from({ length: 12 }, (_, i) =>
        img(`Gallery-Poland${i + 1}.jpg`)
      ),
    },
    {
      title: 'Vietnam',
      images: Array.from({ length: 6 }, (_, i) =>
        img(`Gallery-Vietnam${i + 1}.jpg`)
      ),
    },
  ];

  const milestones = [
    {
      icon: '🇹🇭',
      title: 'Thailand',
      description: 'My roots, early education, and first work experiences.',
    },
    {
      icon: '🎓',
      title: 'English Degree',
      description: 'Studied English Language and Literature.',
    },
    {
      icon: '👩‍🏫',
      title: 'Teaching',
      description: 'Worked as a teacher and teacher assistant.',
    },
    {
      icon: '🇸🇪',
      title: 'Sweden',
      description: 'Started a new chapter with study, work, and daily life.',
    },
    {
      icon: '👶',
      title: 'Preschool Work',
      description: 'Worked with children, routines, communication, and teamwork.',
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Studied web development and built digital projects.',
    },
    {
      icon: '🚀',
      title: 'Web Portfolio',
      description: 'Creating my own space to show projects, skills, and journey.',
    },
  ];

  return (
    <main className="life-page" id="lifestyle">
      <section className="life-hero">
        <div className="life-hero-text">
          <h1 aria-label="Gallery">{hoverText('Gallery')}</h1>

          <p>
            A collection of my work, studies, creativity, hobbies, and places
            that shaped me. <span className="heart">♡</span>
          </p>
        </div>
      </section>

      <section className="life-section">
        <h2>Moments & Memories</h2>

        <div className="gallery-subsection">
          <h3>Work Moments</h3>
          <div className="gallery-carousel-grid">
            {workMoments.map((gallery) => (
              <GalleryCarousel gallery={gallery} key={gallery.title} />
            ))}
          </div>
        </div>

        <div className="gallery-subsection">
          <h3>School & Education</h3>
          <div className="gallery-carousel-grid">
            {schoolEducation.map((gallery) => (
              <GalleryCarousel gallery={gallery} key={gallery.title} />
            ))}
          </div>
        </div>

        <div className="gallery-subsection">
          <h3>Hobbies</h3>
          <div className="gallery-carousel-grid">
            {hobbies.map((gallery) => (
              <GalleryCarousel gallery={gallery} key={gallery.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="life-section">
        <h2>Places I’ve Been</h2>

        <div className="gallery-carousel-grid">
          {places.map((gallery) => (
            <GalleryCarousel gallery={gallery} key={gallery.title} />
          ))}
        </div>
      </section>

      <section className="life-section">
        <h2>Milestones</h2>

        <div className="life-timeline">
          {milestones.map((item) => (
            <div className="life-timeline-item" key={item.title}>
              <div className="life-timeline-dot" />
              <div className="life-timeline-icon">{item.icon}</div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="life-cta">
        <h2>♡ Like what you see?</h2>
        <p>Let’s turn memories, ideas, and stories into something meaningful.</p>
        <a href="#contact">Say Hello 👋</a>
      </section>
    </main>
  );
};

export default Gallery;