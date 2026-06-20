"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top mirai-navbar">
      <div className="container">
        {/* Brand Logo */}
        <Link href="/" className="mirai-navbar-brand">
          <div className="mirai-logo-icon">
            <i className="bi bi-cloud-fill"></i>
            <i className="bi bi-gear-fill"></i>
          </div>
          <div className="mirai-logo-text">
            <span className="mirai-logo-title">Mirai Cloud</span>
            <span className="mirai-logo-subtitle">IT SERVICES</span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="fs-3">
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mirai-nav-links-container">
            <li className="nav-item">
              <Link href="/#home" className="nav-link mirai-nav-link active" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#services" className="nav-link mirai-nav-link" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#industries" className="nav-link mirai-nav-link" onClick={() => setIsOpen(false)}>
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about" className="nav-link mirai-nav-link" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#contact" className="nav-link mirai-nav-link" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Action Button */}
          <div className="d-flex align-items-center">
            <Link href="/#contact" className="btn-quote" onClick={() => setIsOpen(false)}>
              Get a Quote <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
