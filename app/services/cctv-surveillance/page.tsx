"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./cctv-surveillance.css";

export default function CctvSurveillance() {
  const benefits = [
    {
      title: "Enhanced Security",
      desc: "Deter theft and ensure continuous protection for your property and staff.",
      icon: "bi-shield-check",
    },
    {
      title: "Remote Monitoring",
      desc: "Access live and recorded video feeds securely from any mobile device.",
      icon: "bi-phone-vibrate",
    },
    {
      title: "Smart Analytics",
      desc: "Leverage AI to identify unusual behaviors, objects, and unauthorized access.",
      icon: "bi-cpu-fill",
    },
    {
      title: "Faster Response",
      desc: "Instant real-time notifications enable immediate action during incidents.",
      icon: "bi-lightning-charge-fill",
    },
  ];

  const services = [
    {
      title: "IP Camera Systems",
      desc: "High-resolution networked cameras providing crystal clear image quality.",
      icon: "bi-camera-video-fill",
    },
    {
      title: "AI CCTV Monitoring",
      desc: "Intelligent systems that automatically flag anomalies and reduce false alarms.",
      icon: "bi-eye-fill",
    },
    {
      title: "Access Control",
      desc: "Integrated door locks, biometric scanners, and keycard management.",
      icon: "bi-door-closed-fill",
    },
    {
      title: "Video Analytics",
      desc: "Heat mapping, people counting, and facial recognition for actionable insights.",
      icon: "bi-bar-chart-fill",
    },
    {
      title: "Remote Surveillance",
      desc: "Cloud-based video storage and mobile app integrations for anytime access.",
      icon: "bi-cloud-arrow-up-fill",
    },
    {
      title: "Security Management",
      desc: "Centralized video management software (VMS) to control all cameras easily.",
      icon: "bi-sliders",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Security Assessment",
      desc: "Comprehensive site evaluation to identify blind spots and vulnerabilities.",
      icon: "bi-search",
    },
    {
      step: "02",
      title: "Camera Planning",
      desc: "Strategic placement of cameras and sensors for optimal field of view.",
      icon: "bi-map-fill",
    },
    {
      step: "03",
      title: "Installation",
      desc: "Professional deployment and wiring of all surveillance hardware components.",
      icon: "bi-tools",
    },
    {
      step: "04",
      title: "Monitoring Setup",
      desc: "Configuration of networks, cloud storage, and dashboard interfaces.",
      icon: "bi-display",
    },
    {
      step: "05",
      title: "Continuous Support",
      desc: "Ongoing maintenance, software updates, and 24/7 technical assistance.",
      icon: "bi-headset",
    },
  ];

  const techStack = [
    {
      title: "AI Face Detection",
      desc: "Advanced algorithms for tracking individuals and preventing unauthorized access.",
      icon: "bi-person-bounding-box",
    },
    {
      title: "Motion Detection",
      desc: "Configurable zones that trigger recording only when relevant activity occurs.",
      icon: "bi-person-walking",
    },
    {
      title: "Cloud Monitoring",
      desc: "Secure off-site video storage preventing data loss due to hardware tampering.",
      icon: "bi-cloud-check-fill",
    },
    {
      title: "Mobile Access",
      desc: "Native smartphone apps ensuring you are always connected to your cameras.",
      icon: "bi-phone-fill",
    },
    {
      title: "Night Vision",
      desc: "Infrared and low-light sensors capturing clear footage in total darkness.",
      icon: "bi-moon-stars-fill",
    },
    {
      title: "Video Analytics",
      desc: "Deep learning models that recognize vehicles, license plates, and objects.",
      icon: "bi-camera-reels-fill",
    },
  ];

  const workplaceSecurity = [
    {
      title: "Office Security",
      desc: "Protect confidential data, monitor lobbies, and secure employee entrances.",
      icon: "bi-building-fill",
    },
    {
      title: "Industrial Monitoring",
      desc: "Oversee manufacturing floors, monitor safety compliance, and secure perimeters.",
      icon: "bi-factory",
    },
    {
      title: "Retail Protection",
      desc: "Prevent theft, manage crowds, and monitor point-of-sale transactions.",
      icon: "bi-shop",
    },
    {
      title: "Campus Safety",
      desc: "Ensure student safety with comprehensive coverage across educational facilities.",
      icon: "bi-book-half",
    },
  ];

  const industries = [
    {
      title: "Corporate Offices",
      icon: "bi-buildings-fill",
    },
    {
      title: "Manufacturing",
      icon: "bi-gear-wide-connected",
    },
    {
      title: "Healthcare",
      icon: "bi-hospital-fill",
    },
    {
      title: "Education",
      icon: "bi-journal-bookmark-fill",
    },
    {
      title: "Retail Stores",
      icon: "bi-bag-check-fill",
    },
    {
      title: "Residential",
      icon: "bi-house-door-fill",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="cctv-page min-h-screen">
        <div className="cctv-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="cctv-hero" className="cctv-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="cctv-hero-subtitle">SECUREVISION</span>
                <h1 className="cctv-hero-title">
                  <span>Smart surveillance systems</span>
                </h1>
                <p className="cctv-hero-desc">
                  Advanced CCTV and monitoring systems designed to protect your people, assets and operations. Secure your business with intelligent cameras, real-time monitoring and advanced security solutions.
                </p>
                <div className="cctv-hero-buttons">
                  <a href="#services" className="btn-cctv-primary">
                    Explore Solutions <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-cctv-outline">
                    Request Demo <i className="bi bi-display"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="cctv-hero-right">
                  <div className="cctv-illustration-box">
                    <Image 
                      src="/images/services/hero_cctv_1781975073875.png" 
                      width={400} height={400} 
                      alt="CCTV & Surveillance" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Surveillance Benefits Section */}
        <section id="benefits" className="cctv-section cctv-section-white pt-0">
          <div className="container">
            <div className="cctv-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="cctv-benefit-card">
                      <div className="cctv-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="cctv-benefit-title">{benefit.title}</h3>
                      <p className="cctv-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. CCTV Solutions Section */}
        <section id="services" className="cctv-section cctv-section-light">
          <div className="cctv-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cctv-sec-subtitle">SOLUTIONS</span>
              <h2 className="cctv-sec-title">Complete surveillance solutions for every business</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="cctv-service-card">
                    <div className="cctv-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="cctv-benefit-title">{service.title}</h3>
                    <p className="cctv-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section id="process" className="cctv-section cctv-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cctv-sec-subtitle">HOW IT WORKS</span>
              <h2 className="cctv-sec-title">Implementation process</h2>
            </div>

            <div className="cctv-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="cctv-process-step">
                  <div className="cctv-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="cctv-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="cctv-process-step-title">{step.title}</h3>
                  <p className="cctv-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Smart Technology Section */}
        <section id="technologies" className="cctv-section cctv-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cctv-sec-subtitle">TECHNOLOGY</span>
              <h2 className="cctv-sec-title">Powered by intelligent surveillance technology</h2>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="cctv-tech-card">
                    <div className="cctv-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="cctv-tech-title">{tech.title}</h3>
                    <p className="cctv-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Dashboard Section (Dark cyber theme) */}
        <section id="dashboard" className="cctv-section cctv-section-dark">
          <div className="cctv-grid-dark"></div>
          <div className="cctv-glow-blue" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Dashboard UI */}
              <div className="col-lg-6">
                <div className="cctv-dashboard-box">
                  <div className="cctv-dashboard-header">
                    <span className="db-title">SECURITY OPERATIONS CENTER</span>
                    <span className="db-status">
                      <span className="db-pulse"></span> LIVE
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="cctv-metric-card">
                        <div className="metric-val">32</div>
                        <div className="metric-label">Active Cameras</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="cctv-metric-card">
                        <div className="metric-val alert">0</div>
                        <div className="metric-label">Security Breaches</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart gauges */}
                  <div className="cctv-chart-row">
                    <div className="cctv-chart-label">
                      <span>Cloud Storage Capacity</span>
                      <span>85%</span>
                    </div>
                    <div className="cctv-progress-track">
                      <div className="cctv-progress-fill" style={{ width: "85%", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                  </div>

                  <div className="cctv-chart-row">
                    <div className="cctv-chart-label">
                      <span>Network Bandwidth Usage</span>
                      <span>Stable</span>
                    </div>
                    <div className="cctv-progress-track">
                      <div className="cctv-progress-fill" style={{ width: "60%", backgroundColor: "var(--accent-emerald)" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="cctv-intel-list">
                  <div>
                    <span className="cctv-sec-subtitle-emerald">MONITORING</span>
                    <h2 className="cctv-sec-title">Monitor everything from anywhere</h2>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-camera-reels-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Live camera feeds</h4>
                      <p className="intel-content-desc">Stream multiple high-definition security feeds directly to your control center.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Security alerts</h4>
                      <p className="intel-content-desc">Receive immediate push notifications when suspicious activity is detected.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-crosshair"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Activity tracking</h4>
                      <p className="intel-content-desc">Advanced algorithms that follow movement and log entry/exit events accurately.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-file-earmark-text-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Incident reports</h4>
                      <p className="intel-content-desc">Automatically compiled video clips and data logs for quick law enforcement handover.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Workplace Security Section */}
        <section id="workplace-security" className="cctv-section cctv-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cctv-sec-subtitle">ENVIRONMENTS</span>
              <h2 className="cctv-sec-title">Custom workplace security</h2>
            </div>

            <div className="row g-4 mt-2">
              {workplaceSecurity.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <div className="compliance-card">
                    <div className="compliance-badge">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h3 className="compliance-title">{item.title}</h3>
                    <p className="compliance-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Industries Section */}
        <section id="industries" className="cctv-section cctv-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cctv-sec-subtitle">INDUSTRIES</span>
              <h2 className="cctv-sec-title">Trusted across sectors</h2>
            </div>

            <div className="row g-4 mt-2">
              {industries.map((ind, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div className="cctv-industry-card">
                    <div className="cctv-industry-icon">
                      <i className={`bi ${ind.icon}`}></i>
                    </div>
                    <h3 className="cctv-industry-title">{ind.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Call To Action Section */}
        <section id="cta" className="cctv-section cctv-section-white">
          <div className="container">
            <div className="cctv-cta-banner">
              <div className="cctv-glow-emerald" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="cctv-cta-title">Protect your workplace with intelligent surveillance</h2>
              <p className="cctv-cta-desc">
                Deploy state-of-the-art camera systems and AI-powered monitoring for ultimate peace of mind.
              </p>
              <Link href="/#contact" className="btn-cctv-cta-light">
                Schedule Security Demo <i className="bi bi-camera-video"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
