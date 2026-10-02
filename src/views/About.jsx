/*
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* ---------- Hero ---------- *}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </p>
          <h1>About Us</h1>
          <p className="about-hero-subtitle">
            We're a small team obsessed with good fashion — picking pieces we'd
            actually wear ourselves, pricing them fairly, and getting them to
            your door without the wait.
          </p>
        </div>
      </section>

      {/* ---------- Our Story ---------- *}
      <section className="about-story">
        <div className="story-img">
          <img
            src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFib3V0JTIwdXMlMjBpbWd8ZW58MHx8MHx8fDA%3D"
            alt="Our Story"
          />
        </div>
        <div className="story-text">
          <span className="about-badge">Our Story</span>
          <h2>Fashion That Fits Your Life</h2>
          <p>
            It started with a laptop, a handful of samples, and a simple belief
            — buying clothes online shouldn't feel like a gamble. No confusing
            sizing, no items that look nothing like the photo. Just pieces worth
            wearing, at prices that make sense.
          </p>
          <p>
            Today we work with makers who care about stitching as much as we
            care about your order arriving on time. Every product is chosen by
            hand, checked twice, and backed by a real team — not a chatbot — if
            something's ever not right.
          </p>
          <Link to="/" className="story-btn">
            Explore Collection <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- *}
      <section className="about-features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-award"></i>
            </div>
            <h3>Quality Products</h3>
            <p>Every item is carefully checked before it reaches your door.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping, right to your doorstep.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h3>Secure Payments</h3>
            <p>Your transactions are safe with encrypted checkout.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Our team is always here to help, whenever you need us.</p>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- *}
      <section className="about-stats">
        <div className="stat-item">
          <h3>50K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>10K+</h3>
          <p>Products</p>
        </div>
        <div className="stat-item">
          <h3>8+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h3>25+</h3>
          <p>Countries Served</p>
        </div>
      </section>

      {/* ---------- CTA ---------- *}
      <section className="about-cta">
        <h2>Ready to Find Your Next Favorite Outfit?</h2>
        <p>
          Browse our latest collection and enjoy quality fashion at prices
          you'll love.
        </p>
        <Link to="/" className="cta-btn">
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>
    </div>
  );
}   */

import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <p>ABOUT BLOOMHAVEN</p>
          <h1>Flowers With Love</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=900&q=80"
            alt="Flowers"
          />
        </div>

        <div className="about-text">
          <p className="small-title">OUR STORY</p>

          <h2>Bringing Nature's Beauty To Your Door</h2>

          <p>
            BloomHaven was created with one simple idea: flowers can make
            ordinary moments extraordinary.
          </p>

          <p>
            We carefully select fresh flowers and create beautiful arrangements
            for birthdays, anniversaries, weddings and everyday surprises.
          </p>

          <div className="about-features">
            <div>
              <strong>100%</strong>
              <span>Fresh Flowers</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Customer Support</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
