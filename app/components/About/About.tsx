"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="glow-light" style={{ top: "10%", left: "5%" }}></div>
      
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Text Content & Cards */}
          <div className="col-lg-6">
            <span className="section-subtitle">ABOUT MIRAI</span>
            <h2 className="section-title">
              Helping businesses move confidently into what&apos;s next.
            </h2>
            <p className="about-desc">
              Mirai Cloud IT Services is a trusted technology partner delivering secure, intelligent and scalable infrastructure for businesses across India.
            </p>
            
            <div className="row g-4 about-cards-row">
              {/* Vision Card */}
              <div className="col-sm-6">
                <div className="about-card">
                  <div className="about-card-icon">
                    <i className="bi bi-eye-fill"></i>
                  </div>
                  <h3 className="about-card-title">Our Vision</h3>
                  <p className="about-card-text">
                    To shape a more connected, secure and efficient digital future.
                  </p>
                </div>
              </div>
              
              {/* Mission Card */}
              <div className="col-sm-6">
                <div className="about-card">
                  <div className="about-card-icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h3 className="about-card-title">Our Mission</h3>
                  <p className="about-card-text">
                    To empower businesses with technology that works seamlessly every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Corporate Image & Overlay */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              
              {/* Expert Delivery floating card */}
              <div className="floating-card-expert">
                <div className="expert-icon-box">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <h4 className="expert-title">Expert-led delivery</h4>
                  <p className="expert-desc">Strategy. Build. Support.</p>
                </div>
              </div>
              
              {/* Image Container */}
              <div className="about-img-container">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Mirai Cloud corporate office IT collaboration team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="about-main-img"
                  unoptimized
                />
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
