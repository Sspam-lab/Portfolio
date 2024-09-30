// src/components/Contact.tsx

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'; // Icons for input fields

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission logic
    if (formData.name && formData.email && formData.message) {
      setFeedbackMessage('Your message has been sent successfully!');
      setIsError(false);
      // Reset form data after submission
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFeedbackMessage('Please fill in all fields.');
      setIsError(true);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaComment className="form-icon" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
        {feedbackMessage && (
          <p className={`feedback-message ${isError ? 'error' : 'success'}`}>
            {feedbackMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
