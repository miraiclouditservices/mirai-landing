"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background elements */}
      <div className="hero-grid-pattern"></div>
      <div className="glow-light hero-glow-1" style={{ top: "10%", right: "10%" }}></div>
      <div className="glow-light hero-glow-2" style={{ bottom: "10%", left: "5%" }}></div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Text & CTA */}
          <div className="col-lg-6">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>LEADER IN IT SERVICES</span>
            </div>
            
            <h1 className="hero-title">
              Empowering Businesses with Cloud, Cybersecurity &amp; IT Infrastructure Solutions
            </h1>
            
            <p className="hero-description text-muted">
              We design, secure and manage the digital foundations that help organisations scale with confidence.
            </p>
            
            <div className="hero-buttons">
              <Link href="#contact" className="btn btn-primary-custom">
                Get a Quote <i className="bi bi-arrow-up-right"></i>
              </Link>
              <Link href="tel:+1234567890" className="btn btn-secondary-custom">
                <i className="bi bi-telephone"></i> Contact Us
              </Link>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>24/7 Support</span>
              </div>
              <div className="hero-feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Enterprise Security</span>
              </div>
              <div className="hero-feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Hero Visual Mockup */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              
              {/* Security Protected badge */}
              <div className="floating-card-security">
                <i className="bi bi-shield-fill-check"></i>
                <span>Security Protected</span>
              </div>
              
              {/* Main Image Container */}
              <div className="hero-img-container">
                <Image
                  src="https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg"
                  alt="Cloud computing server room with network infrastructure"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="hero-main-img"
                  unoptimized // Skip build-time caching errors if URL is dynamic/unreachable
                />
              </div>

              {/* Infrastructure Status card */}
              <div className="floating-card-status">
                <div className="floating-card-status-header">
                  <span className="status-label">INFRASTRUCTURE STATUS</span>
                  <div className="status-pulse-wrapper">
                    <span className="status-pulse-dot"></span>
                  </div>
                </div>
                
                <h4 className="status-title text-white">All systems operational</h4>
                
                <div className="status-progress-bar">
                  <div className="status-progress-fill"></div>
                </div>
                
                <div className="status-footer">
                  <span>Uptime</span>
                  <span className="status-uptime-val">99.99%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
