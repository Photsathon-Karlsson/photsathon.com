import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

const colors = ['#FF2DD1', '#FDFFB8', '#4DFFBE', '#63C8FF'];

const HoverText = ({ text, className = '' }) => {
  const words = text.split(' ');

  return (
    <span className={`hover-text ${className}`}>
      {words.map((word, wordIndex) => (
        <span className="hover-word" key={`${word}-${wordIndex}`}>
          {word.split('').map((char, charIndex) => (
            <span
              key={`${char}-${charIndex}`}
              className="hover-letter"
              style={{
                '--hover-color': colors[(wordIndex + charIndex) % colors.length],
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="hover-space">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const formSubmitKey = '23d7ddc1426bf94f637de05c0bc90412';

  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(t('contactPage.sendingStatus'));

    const formBody = {
      name: formData.name,
      email: formData.emailAddress,
      subject: formData.subject,
      message: formData.message,
      _subject: formData.subject || t('contactPage.defaultSubject'),
    };

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${formSubmitKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formBody),
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setStatus(t('contactPage.successStatus'));
      setFormData({
        name: '',
        emailAddress: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus(t('contactPage.errorStatus'));
    }
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">
        <div className="contact-hero">
          <div className="contact-hero-text">
            <h1 className="contact-title">
              <HoverText text={t('contactPage.titleLine1')} />
              <br />
              <HoverText text={t('contactPage.titleLine2')} />
            </h1>

            <p className="contact-subtitle">
              {t('contactPage.subtitleLine1')}
              <br />
              {t('contactPage.subtitleLine2')}
              <br />
              {t('contactPage.subtitleLine3')}
            </p>
          </div>

          <div className="contact-hero-image-wrap">
            <img
              className="contact-hero-image"
              src={`${import.meta.env.BASE_URL}dist/img/contact-me.png`}
              alt={t('contactPage.imageAlt')}
            />
          </div>
        </div>

        <div className="contact-grid">
          <article className="contact-card contact-form-card">
            <div className="contact-card-header">
              <FaEnvelope className="contact-card-icon" />

              <div>
                <h2>
                  <HoverText text={t('contactPage.talkTitle')} />
                </h2>

                <p>
                  {t('contactPage.talkLine1')}
                  <br />
                  {t('contactPage.talkLine2')}
                  <br />
                  {t('contactPage.talkLine3')}
                  <br />
                  {t('contactPage.talkLine4')}
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">{t('contactPage.nameLabel')}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t('contactPage.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="emailAddress">{t('contactPage.emailLabel')}</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder={t('contactPage.emailPlaceholder')}
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">{t('contactPage.subjectLabel')}</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={t('contactPage.subjectPlaceholder')}
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">{t('contactPage.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder={t('contactPage.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="contact-form-actions">
                <button className="contact-send-button" type="submit">
                  {t('contactPage.sendButton')} <FaPaperPlane />
                </button>

                <span>{status || t('contactPage.defaultStatus')}</span>
              </div>
            </form>
          </article>

          <div className="contact-side">
            <article className="contact-card contact-online-card">
              <h2>
                <HoverText text={t('contactPage.onlineTitle')} />
              </h2>

              <div className="contact-links">
                <a
                  href="https://github.com/Photsathon-Karlsson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <FaGithub />
                  </span>

                  <span>
                    <strong>{t('contactPage.github')}</strong>
                    <small>Photsathon-Karlsson</small>
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/photsathon-karlsson-50755617a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <FaLinkedin />
                  </span>

                  <span>
                    <strong>{t('contactPage.linkedin')}</strong>
                    <small>Photsathon Karlsson</small>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/photsathon_koi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    <FaInstagram />
                  </span>

                  <span>
                    <strong>{t('contactPage.instagram')}</strong>
                    <small>@photsathon_koi</small>
                  </span>
                </a>
              </div>
            </article>

            <article className="contact-card contact-connect-card">
              <h2 className="contact-connect-title">
                <HoverText text={t('contactPage.connectTitle')} />
              </h2>

              <p>
                {t('contactPage.connectLine1')}
                <br />
                {t('contactPage.connectLine2')}
                <br />
                {t('contactPage.connectLine3')}
                <br />
                {t('contactPage.connectLine4')}
              </p>

              <div className="contact-paper-plane">✈</div>
            </article>
          </div>
        </div>

        <div className="contact-bottom">
          <p>{t('contactPage.bottomText')}</p>
          <span>{t('contactPage.bottomBye')}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;