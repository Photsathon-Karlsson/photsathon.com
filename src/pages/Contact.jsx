import React, { useState } from 'react';
import '../index.css';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

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
              style={{ '--hover-color': colors[(wordIndex + charIndex) % colors.length] }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className="hover-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

const Contact = () => {
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
    setStatus('Sending...');

    const formBody = {
      name: formData.name,
      email: formData.emailAddress,
      subject: formData.subject,
      message: formData.message,
      _subject: formData.subject || 'New message from photsathon.com',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${formSubmitKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formBody),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setStatus('Message sent! ♡');
      setFormData({
        name: '',
        emailAddress: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('Sorry, please try again or contact me on Instagram.');
    }
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">
        <div className="contact-hero">
          <div className="contact-hero-text">
            <h1 className="contact-title">
              <HoverText text="Let's Build" />
              <br />
              <HoverText text="Something Together" />
            </h1>

            <p className="contact-subtitle">
              From ideas to websites,
              <br />
              let&apos;s create something simple,
              <br />
              beautiful, and meaningful. ♡
            </p>
          </div>

          <div className="contact-hero-image-wrap">
            <img
              className="contact-hero-image"
              src={`${import.meta.env.BASE_URL}img/contact-me.png`}
              alt="Photsathon waving while working on a laptop"
            />
          </div>
        </div>

        <div className="contact-grid">
          <article className="contact-card contact-form-card">
            <div className="contact-card-header">
              <FaEnvelope className="contact-card-icon" />

              <div>
                <h2>
                  <HoverText text="Let's Talk" />
                </h2>

                <p>
                  Whether it&apos;s a website,
                  <br />
                  a collaboration,
                  <br />
                  or a question,
                  <br />
                  I&apos;m happy to help.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="emailAddress">Email Address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="your@email.com"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me a little about your project, idea, or anything you'd like to share..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="contact-form-actions">
                <button className="contact-send-button" type="submit">
                  Send Message <FaPaperPlane />
                </button>

                <span>{status || "I'll reply soon! ♡"}</span>
              </div>
            </form>
          </article>

          <div className="contact-side">
            <article className="contact-card contact-online-card">
              <h2>
                <HoverText text="Find Me Online" />
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
                    <strong>GitHub</strong>
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
                    <strong>LinkedIn</strong>
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
                    <strong>Instagram</strong>
                    <small>@photsathon_koi</small>
                  </span>
                </a>
              </div>
            </article>

            <article className="contact-card contact-connect-card">
              <h2 className="contact-connect-title">
                <HoverText text="Let's Make Something Awesome" />
              </h2>

              <p>
                I&apos;m always open to
                <br />
                new opportunities,
                <br />
                creative collaborations,
                <br />
                and friendly conversations.
              </p>

              <div className="contact-paper-plane">✈</div>
            </article>
          </div>
        </div>

        <div className="contact-bottom">
          <p>Thanks for stopping by! ♡</p>
          <span>See you soon! 👋</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;