import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p>WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Contact Us</h1>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            Have a question about our flowers or delivery? Send us a message and
            our team will help you.
          </p>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>hello@bloomhaven.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              Your message has been sent successfully! 🌸
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
