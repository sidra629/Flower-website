import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Bloom<span>Haven</span>
        </Link>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "cart-link nav-active" : "cart-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            🛒 Cart
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
