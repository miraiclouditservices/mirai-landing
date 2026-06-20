"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./business-comm.css";

export default function BusinessCommunication() {
  const benefits = [
    {
      title: "Seamless Collaboration",
      desc: "Connect your global workforce across multiple devices and time zones instantly.",
      icon: "bi-people-fill",
    },
    {
      title: "Faster Communication",
      desc: "Reduce response times with unified chat, voice, and video tools.",
      icon: "bi-lightning-charge",
    },
    {
      title: "Secure Connectivity",
      desc: "End-to-end encryption for all your confidential corporate communications.",
      icon: "bi-shield-check",
    },
    {
      title: "Improved Productivity",
      desc: "Integrate communication tools into your daily workflow applications.",
      icon: "bi-graph-up-arrow",
    },
  ];

  const services = [
    {
      title: "Unified Communication",
      desc: "A single platform for voice, video, messaging, and presence.",
      icon: "bi-headset",
    },
    {
      title: "Video Conferencing",
      desc: "High-definition, secure video meetings for teams of any size.",
      icon: "bi-camera-video-fill",
    },
    {
      title: "Business VoIP",
      desc: "Enterprise-grade cloud telephony systems with advanced call routing.",
      icon: "bi-telephone-outbound-fill",
    },
    {
      title: "Team Messaging",
      desc: "Persistent chat channels for departments, projects, and direct messages.",
      icon: "bi-chat-square-text-fill",
    },
    {
      title: "Contact Center Solutions",
      desc: "Omnichannel support tools to improve your customer experience.",
      icon: "bi-person-lines-fill",
    },
    {
      title: "Cloud Communication",
      desc: "Scalable communication APIs (CPaaS) customized for your applications.",
      icon: "bi-cloud-arrow-up-fill",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Connect",
      desc: "Link all your offices, remote workers, and devices to one network.",
      icon: "bi-link-45deg",
    },
    {
      step: "02",
      title: "Communicate",
      desc: "Use crystal-clear voice and HD video to bridge the distance.",
      icon: "bi-mic-fill",
    },
    {
      step: "03",
      title: "Collaborate",
      desc: "Share screens, co-author documents, and brainstorm in real time.",
      icon: "bi-file-earmark-person-fill",
    },
    {
      step: "04",
      title: "Manage",
      desc: "Administer users, numbers, and policies from a centralized dashboard.",
      icon: "bi-sliders",
    },
    {
      step: "05",
      title: "Grow",
      desc: "Easily scale your communication licenses as your business expands.",
      icon: "bi-bar-chart-fill",
    },
  ];

  const techStack = [
    {
      title: "Cloud Calling",
      desc: "Global PSTN connectivity leveraging robust SIP trunking technologies.",
      icon: "bi-cloud-fill",
    },
    {
      title: "AI Communication",
      desc: "Automated transcription, smart summaries, and intelligent call routing.",
      icon: "bi-robot",
    },
    {
      title: "Mobile Collaboration",
      desc: "Feature-rich native mobile applications for iOS and Android devices.",
      icon: "bi-phone-fill",
    },
    {
      title: "Integration Tools",
      desc: "Pre-built connectors for popular CRM, ticketing, and productivity suites.",
      icon: "bi-puzzle-fill",
    },
    {
      title: "Automation",
      desc: "Streamlined workflow triggers across communication channels.",
      icon: "bi-gear-wide-connected",
    },
    {
      title: "Analytics",
      desc: "Deep insights into call quality, usage trends, and team productivity.",
      icon: "bi-pie-chart-fill",
    },
  ];

  const securityItems = [
    {
      title: "Encrypted Communication",
      desc: "Secure Real-Time Transport Protocol (SRTP) for all voice and video traffic.",
      icon: "bi-shield-lock-fill",
    },
    {
      title: "Data Protection",
      desc: "Strict adherence to data residency and privacy regulations globally.",
      icon: "bi-server",
    },
    {
      title: "Access Management",
      desc: "Integration with corporate SSO and strict Multi-Factor Authentication.",
      icon: "bi-person-badge-fill",
    },
    {
      title: "Reliable Infrastructure",
      desc: "Geographically redundant data centers ensuring 99.999% SLA.",
      icon: "bi-hdd-network-fill",
    },
  ];

  const industries = [
    {
      title: "Enterprise",
      icon: "bi-buildings-fill",
    },
    {
      title: "Healthcare",
      icon: "bi-heart-pulse-fill",
    },
    {
      title: "Education",
      icon: "bi-book-fill",
    },
    {
      title: "Finance",
      icon: "bi-bank2",
    },
    {
      title: "Retail",
      icon: "bi-shop-window",
    },
    {
      title: "Technology",
      icon: "bi-laptop-fill",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bc-page min-h-screen">
        <div className="bc-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="bc-hero" className="bc-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="bc-hero-subtitle">CONNECTPRO</span>
                <h1 className="bc-hero-title">
                  <span>Unified business communication</span>
                </h1>
                <p className="bc-hero-desc">
                  Unified communication systems that simplify collaboration and improve productivity. Enable seamless communication across voice, video, chat and collaboration platforms.
                </p>
                <div className="bc-hero-buttons">
                  <a href="#services" className="btn-bc-primary">
                    Explore Solutions <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-bc-outline">
                    Talk to Expert <i className="bi bi-chat-dots"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="bc-hero-right">
                  <div className="bc-illustration-box">
                    <Image 
                      src="/images/services/hero_comm_1781975062623.png" 
                      width={400} height={400} 
                      alt="Business Communication" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Communication Benefits Section */}
        <section id="benefits" className="bc-section bc-section-white pt-0">
          <div className="container">
            <div className="bc-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="bc-benefit-card">
                      <div className="bc-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="bc-benefit-title">{benefit.title}</h3>
                      <p className="bc-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Communication Services Section */}
        <section id="services" className="bc-section bc-section-light">
          <div className="bc-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="bc-sec-subtitle">SERVICES</span>
              <h2 className="bc-sec-title">Complete communication solutions for modern businesses</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="bc-service-card">
                    <div className="bc-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="bc-benefit-title">{service.title}</h3>
                    <p className="bc-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Collaboration Workflow Section */}
        <section id="process" className="bc-section bc-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="bc-sec-subtitle">WORKFLOW</span>
              <h2 className="bc-sec-title">The collaborative process</h2>
            </div>

            <div className="bc-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="bc-process-step">
                  <div className="bc-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="bc-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="bc-process-step-title">{step.title}</h3>
                  <p className="bc-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Communication Technology Section */}
        <section id="technologies" className="bc-section bc-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="bc-sec-subtitle">TECHNOLOGY</span>
              <h2 className="bc-sec-title">Built with advanced communication technologies</h2>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="bc-tech-card">
                    <div className="bc-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="bc-tech-title">{tech.title}</h3>
                    <p className="bc-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Team Collaboration Dashboard Section (Dark Theme) */}
        <section id="dashboard" className="bc-section bc-section-dark">
          <div className="bc-grid-dark"></div>
          <div className="bc-glow-blue" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Dashboard UI */}
              <div className="col-lg-6">
                <div className="bc-dashboard-box">
                  <div className="bc-dashboard-header">
                    <span className="db-title">TEAM HUB DASHBOARD</span>
                    <span className="db-status">
                      <span className="db-pulse"></span> SYNCED
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="bc-metric-card">
                        <div className="metric-val">14</div>
                        <div className="metric-label">Live Meetings</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bc-metric-card">
                        <div className="metric-val alert">1,245</div>
                        <div className="metric-label">Active Users</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart gauges */}
                  <div className="bc-chart-row">
                    <div className="bc-chart-label">
                      <span>Video Quality Bandwidth</span>
                      <span>1080p HD</span>
                    </div>
                    <div className="bc-progress-track">
                      <div className="bc-progress-fill" style={{ width: "95%", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                  </div>

                  <div className="bc-chart-row">
                    <div className="bc-chart-label">
                      <span>Network Stability</span>
                      <span>Optimal</span>
                    </div>
                    <div className="bc-progress-track">
                      <div className="bc-progress-fill" style={{ width: "100%", backgroundColor: "var(--accent-emerald)" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="bc-intel-list">
                  <div>
                    <span className="bc-sec-subtitle-emerald">WORKSPACE</span>
                    <h2 className="bc-sec-title">Everything your team needs in one platform</h2>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-camera-video-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Live meetings</h4>
                      <p className="intel-content-desc">Host interactive video conferences with screen sharing and recording capabilities.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-chat-left-dots-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Team chats</h4>
                      <p className="intel-content-desc">Organized messaging channels to keep departmental conversations focused.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-person-check-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">User presence</h4>
                      <p className="intel-content-desc">Instantly see who is available, in a meeting, or away from their desk.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-bar-chart-line-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Performance analytics</h4>
                      <p className="intel-content-desc">Track engagement metrics and communication habits to optimize teamwork.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Security & Reliability Section */}
        <section id="security" className="bc-section bc-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="bc-sec-subtitle">SECURITY</span>
              <h2 className="bc-sec-title">Enterprise security &amp; reliability</h2>
            </div>

            <div className="row g-4 mt-2">
              {securityItems.map((item, i) => (
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
        <section id="industries" className="bc-section bc-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="bc-sec-subtitle">INDUSTRIES</span>
              <h2 className="bc-sec-title">Tailored for your industry</h2>
            </div>

            <div className="row g-4 mt-2">
              {industries.map((ind, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div className="bc-industry-card">
                    <div className="bc-industry-icon">
                      <i className={`bi ${ind.icon}`}></i>
                    </div>
                    <h3 className="bc-industry-title">{ind.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Call To Action Section */}
        <section id="cta" className="bc-section bc-section-white">
          <div className="container">
            <div className="bc-cta-banner">
              <div className="bc-glow-emerald" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="bc-cta-title">Transform the way your teams communicate</h2>
              <p className="bc-cta-desc">
                Deploy a unified collaboration platform designed for modern, distributed workforces.
              </p>
              <Link href="/#contact" className="btn-bc-cta-light">
                Start Your Communication Journey <i className="bi bi-rocket-takeoff"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
