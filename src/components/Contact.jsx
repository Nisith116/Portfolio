import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:mohantynisith116@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I'm always interested in hearing about new projects and opportunities
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:mohantynisith116@gmail.com">
                  mohantynisith116@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h4>Phone</h4>
                <a href="tel:+919769360059">+91 9769360059</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Bengaluru, India (open to remote)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div className="info-content">
                <h4>Portfolio</h4>
                <a href="https://portfolio-nisith-mohanty.vercel.app" target="_blank" rel="noopener noreferrer">
                  portfolio-nisith-mohanty.vercel.app
                </a>
              </div>
            </div>

            <div className="social-media">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/nisith-mohanty-6210bb123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://portfolio-nisith-mohanty.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="Portfolio"
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.7 7.6l-4.8 4.8a1 1 0 01-1.4 0L7.3 12.8a1 1 0 011.4-1.4l2.5 2.5 4.1-4.1a1 1 0 111.4 1.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
