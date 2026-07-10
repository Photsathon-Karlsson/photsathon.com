import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const img = (fileName) =>
  `${import.meta.env.BASE_URL}dist/img/${fileName}`;

const colors = [
  '#FF0080',
  '#FF5580',
  '#4300FF',
  '#00CAFF',
  '#00FFDE',
  '#FCB53B',
  '#CF0A0A',
];

const GalleryCarousel = ({ gallery, t }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setIndex((prev) =>
      prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article className="gallery-carousel-card">
      <div className="gallery-carousel-image-wrap">
        <button
          className="gallery-arrow gallery-arrow-left"
          type="button"
          onClick={prevImage}
          aria-label={`${t('galleryPage.ariaPrevious')} ${gallery.title}`}
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
          aria-label={`${t('galleryPage.ariaNext')} ${gallery.title}`}
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
  const { t } = useTranslation();

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
      title: t('galleryPage.work.headstart'),
      images: [
        img('Gallery-Headstart1.jpg'),
        img('Gallery-Headstart2.jpg'),
        img('Gallery-Headstart4.jpg'),
        img('Gallery-Headstart5.jpg'),
        img('Gallery-Headstart6.jpg'),
      ],
    },
    {
      title: t('galleryPage.work.genius'),
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
      title: t('galleryPage.work.anuban'),
      images: [
        img('Gallery-AnubanKhonkaen1.png'),
        img('Gallery-AnubanKhonkaen2.jpg'),
        img('Gallery-AnubanKhonkaen3.jpg'),
        img('Gallery-AnubanKhonkaen4.png'),
        img('Gallery-AnubanKhonkaen5.jpg'),
      ],
    },
    {
      title: t('galleryPage.work.dogresort'),
      images: [
        img('Gallery-PhuketDogResort1.jpg'),
        img('Gallery-PhuketDogResort2.jpg'),
        img('Gallery-PhuketDogResort3.jpg'),
      ],
    },
  ];

  const schoolEducation = [
    {
      title: t('galleryPage.school.nbi'),
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
      title: t('galleryPage.school.sbs'),
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
      title: t('galleryPage.school.sfi'),
      images: [
        img('Gallery-SFI1.jpg'),
        img('Gallery-SFI2.jpg'),
        img('Gallery-SFI3.jpg'),
        img('Gallery-SFI4.jpg'),
      ],
    },
    {
      title: t('galleryPage.school.talang'),
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
      title: t('galleryPage.school.naresuan'),
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
      title: t('galleryPage.school.sprakcafe'),
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
      title: t('galleryPage.hobby.drawing'),
      images: [
        img('Gallery-Drawing1.png'),
        img('Gallery-Drawing2.png'),
        img('Gallery-Drawing3.png'),
        img('Gallery-Drawing4.png'),
      ],
    },
    {
      title: t('galleryPage.hobby.crafts'),
      images: [
        img('Gallery-Craft1.png'),
        img('Gallery-Craft2.jpg'),
        img('Gallery-Craft3.jpg'),
        img('Gallery-Craft4.jpg'),
      ],
    },
    {
      title: t('galleryPage.hobby.crochet'),
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
      title: t('galleryPage.places.thailand'),
      images: Array.from({ length: 13 }, (_, i) =>
        img(`Gallery-Thailand${i + 1}.jpg`)
      ),
    },
    {
      title: t('galleryPage.places.sweden'),
      images: Array.from({ length: 13 }, (_, i) =>
        img(`Gallery-Sweden${i + 1}.jpg`)
      ),
    },
    {
      title: t('galleryPage.places.denmark'),
      images: Array.from({ length: 4 }, (_, i) =>
        img(`Gallery-Denmark${i + 1}.jpg`)
      ),
    },
    {
      title: t('galleryPage.places.poland'),
      images: Array.from({ length: 12 }, (_, i) =>
        img(`Gallery-Poland${i + 1}.jpg`)
      ),
    },
    {
      title: t('galleryPage.places.vietnam'),
      images: Array.from({ length: 6 }, (_, i) =>
        img(`Gallery-Vietnam${i + 1}.jpg`)
      ),
    },
  ];

  const milestones = [
    {
      icon: '🇹🇭',
      title: t('galleryPage.milestones.thailand.title'),
      description: t('galleryPage.milestones.thailand.description'),
    },
    {
      icon: '🎓',
      title: t('galleryPage.milestones.degree.title'),
      description: t('galleryPage.milestones.degree.description'),
    },
    {
      icon: '👩‍🏫',
      title: t('galleryPage.milestones.teaching.title'),
      description: t('galleryPage.milestones.teaching.description'),
    },
    {
      icon: '🇸🇪',
      title: t('galleryPage.milestones.sweden.title'),
      description: t('galleryPage.milestones.sweden.description'),
    },
    {
      icon: '👶',
      title: t('galleryPage.milestones.preschool.title'),
      description: t('galleryPage.milestones.preschool.description'),
    },
    {
      icon: '💻',
      title: t('galleryPage.milestones.frontend.title'),
      description: t('galleryPage.milestones.frontend.description'),
    },
    {
      icon: '🚀',
      title: t('galleryPage.milestones.portfolio.title'),
      description: t('galleryPage.milestones.portfolio.description'),
    },
  ];

  return (
    <main className="life-page" id="lifestyle">
      <section className="life-hero">
        <div className="life-hero-text">
          <h1 aria-label={t('galleryPage.title')}>
            {hoverText(t('galleryPage.title'))}
          </h1>

          <p>{t('galleryPage.subtitle')}</p>
        </div>
      </section>

      <section className="life-section">
        <h2>{hoverText(t('galleryPage.momentsTitle'))}</h2>

        <div className="gallery-subsection">
          <h3>{hoverText(t('galleryPage.workMoments'))}</h3>

          <div className="gallery-carousel-grid">
            {workMoments.map((gallery) => (
              <GalleryCarousel
                gallery={gallery}
                key={gallery.title}
                t={t}
              />
            ))}
          </div>
        </div>

        <div className="gallery-subsection">
          <h3>{hoverText(t('galleryPage.schoolEducation'))}</h3>

          <div className="gallery-carousel-grid">
            {schoolEducation.map((gallery) => (
              <GalleryCarousel
                gallery={gallery}
                key={gallery.title}
                t={t}
              />
            ))}
          </div>
        </div>

        <div className="gallery-subsection">
          <h3>{hoverText(t('galleryPage.hobbies'))}</h3>

          <div className="gallery-carousel-grid">
            {hobbies.map((gallery) => (
              <GalleryCarousel
                gallery={gallery}
                key={gallery.title}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="life-section">
        <h2>{hoverText(t('galleryPage.placesTitle'))}</h2>

        <div className="gallery-carousel-grid">
          {places.map((gallery) => (
            <GalleryCarousel
              gallery={gallery}
              key={gallery.title}
              t={t}
            />
          ))}
        </div>
      </section>

      <section className="life-section">
        <h2>{hoverText(t('galleryPage.milestonesTitle'))}</h2>

        <div className="life-timeline">
          {milestones.map((item) => (
            <div className="life-timeline-item" key={item.title}>
              <div className="life-timeline-dot" />

              <div className="life-timeline-icon">
                {item.icon}
              </div>

              <strong>{item.title}</strong>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="life-cta">
        <h2>{t('galleryPage.ctaTitle')}</h2>
        <p>{t('galleryPage.ctaText')}</p>
        <a href="#contact">{t('galleryPage.ctaButton')}</a>
      </section>
    </main>
  );
};

export default Gallery;