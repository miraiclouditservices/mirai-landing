"use client";

import Image from "next/image";

interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function WhyChooseUs() {
  const whyPoints: WhyItem[] = [
    {
      id: "expertise",
      title: "Certified expertise",
      description: "Experienced engineers with proven delivery across enterprise environments.",
      icon: "bi-patch-check-fill",
    },
    {
      id: "support",
      title: "Always-on support",
      description: "Responsive technical assistance whenever your business needs it.",
      icon: "bi-clock-history",
    },
    {
      id: "security",
      title: "Proactive security",
      description: "Security-first architecture that helps reduce risk before it becomes disruption.",
      icon: "bi-shield-fill-exclamation",
    },
    {
      id: "partnership",
      title: "Long-term partnership",
      description: "We grow with your organisation, from strategy to day-to-day operations.",
      icon: "bi-people-fill",
    },
  ];

  return (
    <section id="about" className="why-section">
      <div className="glow-light" style={{ bottom: "5%", right: "5%" }}></div>
      
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Team Image & Uptime Badge */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="why-image-wrapper">
              
              {/* Uptime Card Overlay */}
              <div className="floating-card-uptime">
                <div className="uptime-icon-box">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <div>
                  <span className="uptime-label">AVERAGE UPTIME</span>
                  <h4 className="uptime-val">99.99%</h4>
                </div>
                <p className="uptime-desc">
                  Reliable systems monitored by specialists around the clock.
                </p>
              </div>

              {/* Main Image Container */}
              <div className="why-img-container">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="IT support team joining hands in unity"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="why-main-img"
                  unoptimized // Skip build-time caching errors if URL is dynamic/unreachable
                />
              </div>

            </div>
          </div>

          {/* Right Column: Why Choose Us Copy & Pillars */}
          <div className="col-lg-6 order-1 order-lg-2">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2 className="section-title">
              A dependable partner for mission-critical IT.
            </h2>
            <p className="lead fs-6 text-muted mb-4">
              We combine strategic thinking, technical depth and service excellence to help you build a smarter digital ecosystem.
            </p>

            {/* Core Pillars List */}
            <div className="why-list">
              {whyPoints.map((point) => (
                <div key={point.id} className="why-list-item">
                  <div className="why-list-icon">
                    <i className={`bi ${point.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="why-list-title">{point.title}</h3>
                    <p className="why-list-desc">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
