"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./cybersecurity.css";

export default function Cybersecurity() {
  const benefits = [
    {
      title: "Advanced Threat Protection",
      desc: "Proactive AI filtering that blocks malware and phishing attempts before they reach your network.",
      icon: "bi-shield-fill-exclamation",
    },
    {
      title: "24/7 Security Monitoring",
      desc: "Continuous detection analysis looking for anomalies across database systems and endpoints.",
      icon: "bi-eye",
    },
    {
      title: "Data Privacy & Compliance",
      desc: "Comprehensive encryption setups conforming to international standards (ISO, GDPR, SOC2).",
      icon: "bi-file-lock2",
    },
    {
      title: "Incident Response",
      desc: "Fast mitigation procedures to isolate security breaches and restore clean service operations.",
      icon: "bi-lightning",
    },
  ];

  const services = [
    {
      title: "Network Security",
      desc: "Advanced next-gen firewall systems, segmentations, and automated intrusion prevention systems.",
      icon: "bi-diagram-3",
    },
    {
      title: "Cloud Security",
      desc: "Secure multi-cloud cloud landing configurations with encryption at rest and in transit.",
      icon: "bi-cloud-check",
    },
    {
      title: "Application Security",
      desc: "Continuous code vulnerability tests and robust Web Application Firewall (WAF) rule sets.",
      icon: "bi-code-slash",
    },
    {
      title: "Endpoint Protection",
      desc: "Managed anti-malware and system protection for user laptops, servers, and remote terminals.",
      icon: "bi-laptop",
    },
    {
      title: "Identity Management",
      desc: "Role-based access control (RBAC), Single Sign-On (SSO), and Multi-Factor Authentication (MFA).",
      icon: "bi-person-badge-fill",
    },
    {
      title: "Security Monitoring",
      desc: "Centralised SIEM monitoring dashboard looking for threat events with automated responses.",
      icon: "bi-shield-shaded",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Identify",
      desc: "Perform comprehensive threat modeling and inventory vulnerability scans.",
      icon: "bi-search",
    },
    {
      step: "02",
      title: "Protect",
      desc: "Install firewalls, MFA, encryption, and configure access controls.",
      icon: "bi-shield-fill-check",
    },
    {
      step: "03",
      title: "Detect",
      desc: "Activate 24/7 system security logs and SIEM anomaly indicators.",
      icon: "bi-eye-fill",
    },
    {
      step: "04",
      title: "Respond",
      desc: "Execute quick incident containment rules to isolate malicious activity.",
      icon: "bi-chat-right-text-fill",
    },
    {
      step: "05",
      title: "Recover",
      desc: "Restore files from clean backups and deploy updated security rules.",
      icon: "bi-arrow-repeat",
    },
  ];

  const techStack = [
    {
      title: "AI Threat Detection",
      desc: "Heuristic analytics pipelines scanning system endpoints in real time.",
      icon: "bi-cpu",
    },
    {
      title: "Machine Learning Security",
      desc: "Self-training ML algorithms flagging credential theft and session Hijacking.",
      icon: "bi-robot",
    },
    {
      title: "Zero Trust Architecture",
      desc: "Continuous verification models enforcing security parameters for all users.",
      icon: "bi-shield-lock-fill",
    },
    {
      title: "Encryption",
      desc: "AES-256 standard encryption for all database records, drives, and backups.",
      icon: "bi-key",
    },
    {
      title: "Firewall Systems",
      desc: "Stateful package inspection looking for network-level vulnerability attacks.",
      icon: "bi-border-inner",
    },
    {
      title: "SIEM Monitoring",
      desc: "Integrated security information events dashboard with telemetry alerts.",
      icon: "bi-bar-chart",
    },
  ];

  const complianceItems = [
    {
      title: "GDPR",
      desc: "Data minimization techniques, user rights support, and breach log audits.",
      icon: "bi-globe",
    },
    {
      title: "ISO Security Standards",
      desc: "ISO/IEC 27001 baseline configurations ensuring standard operations.",
      icon: "bi-award",
    },
    {
      title: "Data Protection",
      desc: "Robust physical and virtual restrictions safeguarding database centers.",
      icon: "bi-safe2",
    },
    {
      title: "Audit Management",
      desc: "Traceable change management records ready for independent security examiners.",
      icon: "bi-check2-square",
    },
  ];



  return (
    <>
      <Navbar />
      <main className="cyber-page min-h-screen">
        <div className="cyber-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="cyber-hero" className="cyber-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="cyber-hero-subtitle">Threat protection, monitoring and security frameworks</span>
                <h1 className="cyber-hero-title">
                  <span>Advanced cybersecurity solutions</span>
                </h1>
                <p className="cyber-hero-desc">
                  Protect your applications, networks, and confidential customer data with intelligent cyber defence systems built for today&apos;s digital threat landscape.
                </p>
                <div className="cyber-hero-buttons">
                  <a href="#services" className="btn-cyber-primary">
                    Explore Security Solutions <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-cyber-outline">
                    Talk to Security Expert <i className="bi bi-chat-dots"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="cyber-hero-right">
                  <div className="cyber-illustration-box">
                    <Image 
                      src="/images/services/hero_cybersecurity_1781975037356.png" 
                      width={400} height={400} 
                      alt="Cybersecurity" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Security Benefits Section */}
        <section id="benefits" className="cyber-section cyber-section-white pt-0">
          <div className="container">
            <div className="cyber-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="cyber-benefit-card">
                      <div className="cyber-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="cyber-benefit-title">{benefit.title}</h3>
                      <p className="cyber-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="cyber-section cyber-section-light">
          <div className="cyber-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cyber-sec-subtitle">SECURITY SOLUTIONS</span>
              <h2 className="cyber-sec-title">Complete security solutions for your business</h2>
              <p className="cyber-sec-desc">
                Defend your architecture with expert firewalling, Identity Access Management (IAM), and endpoint security.
              </p>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="cyber-service-card">
                    <div className="c-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="cyber-benefit-title">{service.title}</h3>
                    <p className="cyber-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Security Framework Process Section */}
        <section id="process" className="cyber-section cyber-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cyber-sec-subtitle">SECURITY FRAMEWORK</span>
              <h2 className="cyber-sec-title">Our threat response process</h2>
              <p className="cyber-sec-desc">
                We align with NIST security framework baselines to protect digital parameters against sophisticated attacks.
              </p>
            </div>

            <div className="cyber-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="cyber-process-step">
                  <div className="cyber-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="cyber-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="cyber-process-step-title">{step.title}</h3>
                  <p className="cyber-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Security Technology Section */}
        <section id="technologies" className="cyber-section cyber-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cyber-sec-subtitle">ADVANCED TELEMETRY</span>
              <h2 className="cyber-sec-title">Powered by advanced security technologies</h2>
              <p className="cyber-sec-desc">
                Leveraging machine learning, zero trust configurations, and next-generation firewalls to detect anomalies.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="cyber-tech-card">
                    <div className="cyber-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="cyber-tech-title">{tech.title}</h3>
                    <p className="cyber-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Threat Intelligence Section (Dark Cyber Theme) */}
        <section id="threat-intelligence" className="cyber-section cyber-section-dark">
          <div className="cyber-grid-dark"></div>
          <div className="cyber-glow-blue" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Analytics Dashboard UI */}
              <div className="col-lg-6">
                <div className="cyber-dashboard-box">
                  <div className="cyber-dashboard-header">
                    <span className="db-title">THREAT INTELLIGENCE FEED</span>
                    <span className="db-status">
                      <span className="db-pulse"></span> SYSTEM OK
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="cyber-metric-card">
                        <div className="metric-val alert">0</div>
                        <div className="metric-label">Active Attacks</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="cyber-metric-card">
                        <div className="metric-val">12,482</div>
                        <div className="metric-label">Daily Scans Blocked</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart gauges */}
                  <div className="cyber-chart-row">
                    <div className="cyber-chart-label">
                      <span>Network Load</span>
                      <span>32%</span>
                    </div>
                    <div className="cyber-progress-track">
                      <div className="cyber-progress-fill" style={{ width: "32%", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                  </div>

                  <div className="cyber-chart-row">
                    <div className="cyber-chart-label">
                      <span>Firewall Security Integrity</span>
                      <span>99.98%</span>
                    </div>
                    <div className="cyber-progress-track">
                      <div className="cyber-progress-fill" style={{ width: "99.98%", backgroundColor: "var(--accent-emerald)" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="cyber-intel-list">
                  <div>
                    <span className="cyber-sec-subtitle-emerald">PREVENTIVE THREAT DEFENCE</span>
                    <h2 className="cyber-sec-title">Stay ahead of cyber threats</h2>
                    <p className="cyber-sec-desc">
                      Continuous intelligence monitoring isolates dangerous anomalies before they affect database access parameters.
                    </p>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-shield-fill-check"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Live threat monitoring</h4>
                      <p className="intel-content-desc">24/7 logging telemetry looking for unauthorized server credential changes.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-shield-fill-check"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Proactive attack prevention</h4>
                      <p className="intel-content-desc">Smart packet inspection rules blocking malformed DDoS streams immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Compliance & Protection Section */}
        <section id="compliance" className="cyber-section cyber-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cyber-sec-subtitle">ENTERPRISE STANDARD</span>
              <h2 className="cyber-sec-title">Compliance &amp; protection frameworks</h2>
              <p className="cyber-sec-desc">
                We align corporate digital operations with legal requirements and international certifications.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {complianceItems.map((item, i) => (
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



        {/* 9. Call To Action Section */}
        <section id="cta" className="cyber-section cyber-section-white">
          <div className="container">
            <div className="cyber-cta-banner">
              <div className="cyber-glow-emerald" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="cyber-cta-title">Secure your business against evolving threats</h2>
              <p className="cyber-cta-desc">
                Request a comprehensive data and server framework vulnerability assessment from our certified team today.
              </p>
              <Link href="/#contact" className="btn-cyber-cta-light">
                Start Security Assessment <i className="bi bi-shield-check"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
