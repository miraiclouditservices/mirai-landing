"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">


      {/* 2. Main Footer links & info */}
      <section className="main-footer">
        <div className="container">
          <div className="row g-4">

            {/* Column 1: Brand Info & Left-aligned Socials */}
            <div className="col-lg-4 footer-col">
              <Link href="/" className="footer-logo-container d-flex align-items-center gap-2 mb-3 text-decoration-none">
                <Image src="/mirai_logo.png" alt="Mirai Cloud Logo" width={50} height={50} />
                <div>
                  <span className="footer-logo-title d-block">Mirai Cloud</span>
                  <span className="footer-logo-subtitle d-block">IT SERVICES</span>
                </div>
              </Link>
              <p className="footer-desc pr-lg-4">
                Secure, scalable and reliable technology solutions for businesses ready to move forward.
              </p>

              <div className="social-links justify-content-start mt-4">
                <a href="https://www.linkedin.com/company/mirai-cloud-it-services/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/miraicloud_itservices?igsh=MTRqczhxYjFyemx3bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/share/17DCngKdER/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://whatsapp.com/channel/0029Vb5ZMnB8fewwm8tvFk2c" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="col-sm-6 col-md-4 col-lg-2 footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#industries">Industries</Link></li>
                <li><Link href="/#about">About Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div className="col-sm-6 col-md-4 col-lg-3 footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links">
                <li><Link href="/#services">Cloud Services</Link></li>
                <li><Link href="/#services">Cybersecurity</Link></li>
                <li><Link href="/services/network-infrastructure">Network Infrastructure</Link></li>
                <li><Link href="/#services">Managed IT Support</Link></li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="col-md-4 col-lg-3 footer-col">
              <h4 className="footer-col-title">Get in touch</h4>
              <div className="footer-contact-item">
                <i className="bi bi-envelope"></i>
                <a href="mailto:info@miraiclouditservices.com" className="text-decoration-none" style={{ color: "#94a3b8" }}>
                  info@miraiclouditservices.com
                </a>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone"></i>
                <a href="tel:+919100218218" className="text-decoration-none" style={{ color: "#94a3b8" }}>
                  +91 91002 18218
                </a>
              </div>
              <div className="footer-contact-item d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt mt-1"></i>
                <span style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.4" }}>Kalki chambers A Block 108, NH 65, widia colony Miyapur, Hyderabad, India, 502032</span>
              </div>
            </div>

          </div>

          {/* Copyright Divider and legal links */}
          <div className="footer-divider">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="copyright-text">
                  &copy; {currentYear} Mirai Cloud IT Services. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  <a href="#" className="text-decoration-none" style={{ color: "#64748b" }}>Privacy Policy</a>
                  <a href="#" className="text-decoration-none" style={{ color: "#64748b" }}>Terms of Use</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </footer>
  );
}
