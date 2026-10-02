import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>BloomHaven</h2>
          <p>
            Fresh flowers delivered with love. Make every moment beautiful with
            BloomHaven.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h3>Customer Care</h3>

          <p>📞 +92 300 1234567</p>
          <p>✉️ hello@bloomhaven.com</p>
          <p>📍 Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 BloomHaven. All Rights Reserved.
      </div>
    </footer>
  );
}
