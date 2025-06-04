import React, { useState } from 'react';
import './contact.css';
import contactpage from '../../assets/contactpage.png'; // Assuming you have a contact page image in your assets

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="main-title">
            Let's work
            <br />
            together!
          </h1>
          <p className="subtitle">
            Let us help you become even greater at what you do.
            <br />
            Fill out the following form and we'll get back to you in the next 24 hours.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>01</label>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span className="helper-text">Type your full name</span>
              </div>
            </div>

            <div className="form-group">
              <label>02</label>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="What's your email address?"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>03</label>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  placeholder="What's your phone number?"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>04</label>
              <div className="input-container">
                <input
                  type="text"
                  name="company"
                  placeholder="What's your company/organization name?"
                  value={formData.company}
                  onChange={handleChange}
                />
                <span className="helper-text">Type your company/organization name</span>
              </div>
            </div>

            <div className="form-group">
              <label>05</label>
              <div className="input-container">
                <textarea
                  name="message"
                  placeholder="Give Your General opinion about website."
                  value={formData.message}
                  onChange={handleChange}
                />
                <span className="helper-text">A feedback message from the user</span>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE ✓
            </button>
          </form>

          
        </div>
        <div className="contact-right">
          <div className="crypto-badge">
            <div className="crypto-icon">
              <div className="wallet-container">
                <div className="wallet-base"></div>
                <div className="wallet-flap"></div>
                <div className="wallet-button"></div>
              </div>
              <div className="coins-container">
                <div className="coin coin-purple">
                  <div className="coin-dots"></div>
                </div>
                <div className="coin coin-gold">
                  <div className="bitcoin-symbol">₿</div>
                </div>
                <div className="coin coin-black">
                  <div className="ethereum-symbol">◆</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-section">
              <h3>CALL US</h3>
              <p>+1 (234) 567890</p>
              <p>+1 4567 890123</p>
            </div>

            <div className="info-section">
              <h3>ADDRESS</h3>
              <p>2194 Gloden Falls Road</p>
              <p>Reyburn: Sector:61</p>
              <p>Madhya Pradesh(India): 06462</p>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;