"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./data-center.css";

export default function DataCenter() {
  const benefits = [
    {
      title: "Enterprise Reliability",
      desc: "Guaranteed 99.999% uptime with redundant power and cooling systems.",
      icon: "bi-building-check",
    },
    {
      title: "Maximum Performance",
      desc: "High-speed, low-latency network infrastructure for demanding workloads.",
      icon: "bi-speedometer2",
    },
    {
      title: "Advanced Security",
      desc: "Multi-layered physical and logical security to protect your critical assets.",
      icon: "bi-shield-lock",
    },
    {
      title: "Operational Efficiency",
      desc: "Optimized resource utilization and automated management processes.",
      icon: "bi-gear-wide-connected",
    },
  ];

  const services = [
    {
      title: "Data Center Design",
      desc: "Custom architectural planning for scalable and efficient data center facilities.",
      icon: "bi-bounding-box",
    },
    {
      title: "Infrastructure Deployment",
      desc: "Expert installation and configuration of servers, storage, and networking equipment.",
      icon: "bi-hdd-network",
    },
    {
      title: "Server Management",
      desc: "Comprehensive administration, patching, and optimization of physical and virtual servers.",
      icon: "bi-server",
    },
    {
      title: "Network Solutions",
      desc: "High-capacity routing, switching, and load balancing for seamless connectivity.",
      icon: "bi-router",
    },
    {
      title: "Data Center Monitoring",
      desc: "24/7 proactive surveillance of environmental controls and system performance.",
      icon: "bi-activity",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing hardware support, preventive maintenance, and rapid issue resolution.",
      icon: "bi-tools",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Planning",
      desc: "Assess requirements, capacity needs, and strategic objectives.",
      icon: "bi-clipboard-data",
    },
    {
      step: "02",
      title: "Architecture Design",
      desc: "Develop comprehensive blueprints for layout, power, and networking.",
      icon: "bi-pen",
    },
    {
      step: "03",
      title: "Deployment",
      desc: "Procure, install, and configure the necessary infrastructure components.",
      icon: "bi-hdd-stack",
    },
    {
      step: "04",
      title: "Testing",
      desc: "Rigorously validate systems under load and verify failover protocols.",
      icon: "bi-check2-all",
    },
    {
      step: "05",
      title: "Operations",
      desc: "Transition to active management with continuous monitoring and support.",
      icon: "bi-play-circle",
    },
  ];

  const techStack = [
    {
      title: "Cloud Integration",
      desc: "Seamless connectivity with public clouds for hybrid infrastructure deployments.",
      icon: "bi-cloud-arrow-up",
    },
    {
      title: "Virtualization",
      desc: "Advanced hypervisor technologies for optimal resource allocation and scaling.",
      icon: "bi-layers",
    },
    {
      title: "Network Security",
      desc: "Next-generation firewalls and intrusion prevention systems at the edge.",
      icon: "bi-shield-check",
    },
    {
      title: "Storage Systems",
      desc: "High-performance SAN/NAS arrays with automated tiering and deduplication.",
      icon: "bi-device-ssd",
    },
    {
      title: "Backup Solutions",
      desc: "Robust data protection with immutable backups and rapid recovery options.",
      icon: "bi-arrow-counterclockwise",
    },
    {
      title: "Automation",
      desc: "Infrastructure as Code (IaC) and configuration management for consistency.",
      icon: "bi-robot",
    },
  ];

  const complianceItems = [
    {
      title: "Physical Security",
      desc: "Biometric access controls, 24/7 security personnel, and CCTV surveillance.",
      icon: "bi-person-bounding-box",
    },
    {
      title: "Network Protection",
      desc: "DDoS mitigation, deep packet inspection, and secure VPN access.",
      icon: "bi-shield-lock-fill",
    },
    {
      title: "Data Encryption",
      desc: "Military-grade encryption for data at rest and in transit across the facility.",
      icon: "bi-key-fill",
    },
    {
      title: "Compliance Management",
      desc: "Adherence to SOC 2, HIPAA, PCI-DSS, and ISO 27001 industry standards.",
      icon: "bi-file-earmark-check-fill",
    },
  ];



  return (
    <>
      <Navbar />
      <main className="dc-page min-h-screen">
        <div className="dc-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="dc-hero" className="dc-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="dc-hero-subtitle">DATACORE</span>
                <h1 className="dc-hero-title">
                  <span>Modern datacenter solutions</span>
                </h1>
                <p className="dc-hero-desc">
                  Infrastructure planning, deployment and operations that power modern businesses. Deliver secure, scalable and reliable data center environments with expert management.
                </p>
                <div className="dc-hero-buttons">
                  <a href="#services" className="btn-dc-primary">
                    Explore Solutions <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-dc-outline">
                    Talk to Expert <i className="bi bi-chat-dots"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="dc-hero-right">
                  <div className="dc-illustration-box">
                    <Image 
                      src="/images/services/hero_datacenter_1781975049676.png" 
                      width={400} height={400} 
                      alt="Data Center" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Data Center Benefits Section */}
        <section id="benefits" className="dc-section dc-section-white pt-0">
          <div className="container">
            <div className="dc-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="dc-benefit-card">
                      <div className="dc-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="dc-benefit-title">{benefit.title}</h3>
                      <p className="dc-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Data Center Services Section */}
        <section id="services" className="dc-section dc-section-light">
          <div className="dc-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="dc-sec-subtitle">SERVICES</span>
              <h2 className="dc-sec-title">Complete data center solutions</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="dc-service-card">
                    <div className="dc-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="dc-benefit-title">{service.title}</h3>
                    <p className="dc-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Infrastructure Process Section */}
        <section id="process" className="dc-section dc-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="dc-sec-subtitle">WORKFLOW</span>
              <h2 className="dc-sec-title">Infrastructure implementation process</h2>
            </div>

            <div className="dc-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="dc-process-step">
                  <div className="dc-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="dc-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="dc-process-step-title">{step.title}</h3>
                  <p className="dc-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technology Infrastructure Section */}
        <section id="technologies" className="dc-section dc-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="dc-sec-subtitle">TECHNOLOGIES</span>
              <h2 className="dc-sec-title">Powered by advanced infrastructure technologies</h2>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="dc-tech-card">
                    <div className="dc-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="dc-tech-title">{tech.title}</h3>
                    <p className="dc-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Monitoring & Operations Section (Dark Theme) */}
        <section id="monitoring" className="dc-section dc-section-dark">
          <div className="dc-grid-dark"></div>
          <div className="dc-glow-blue" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Dashboard UI */}
              <div className="col-lg-6">
                <div className="dc-dashboard-box">
                  <div className="dc-dashboard-header">
                    <span className="db-title">INFRASTRUCTURE DASHBOARD</span>
                    <span className="db-status">
                      <span className="db-pulse"></span> ONLINE
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="dc-metric-card">
                        <div className="metric-val">99.99%</div>
                        <div className="metric-label">System Uptime</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="dc-metric-card">
                        <div className="metric-val alert">0</div>
                        <div className="metric-label">Critical Alerts</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart gauges */}
                  <div className="dc-chart-row">
                    <div className="dc-chart-label">
                      <span>Overall CPU Utilization</span>
                      <span>45%</span>
                    </div>
                    <div className="dc-progress-track">
                      <div className="dc-progress-fill" style={{ width: "45%", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                  </div>

                  <div className="dc-chart-row">
                    <div className="dc-chart-label">
                      <span>Storage Capacity</span>
                      <span>68%</span>
                    </div>
                    <div className="dc-progress-track">
                      <div className="dc-progress-fill" style={{ width: "68%", backgroundColor: "var(--accent-emerald)" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="dc-intel-list">
                  <div>
                    <span className="dc-sec-subtitle-emerald">OPERATIONS</span>
                    <h2 className="dc-sec-title">24/7 infrastructure monitoring</h2>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-bell-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Real-time alerts</h4>
                      <p className="intel-content-desc">Instant notification of any hardware anomalies or threshold breaches.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Performance tracking</h4>
                      <p className="intel-content-desc">Detailed metrics on bandwidth usage, power consumption, and thermal data.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-heart-pulse-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">System health</h4>
                      <p className="intel-content-desc">Continuous diagnostics to ensure all redundant systems are operational.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Incident management</h4>
                      <p className="intel-content-desc">Rapid response protocols executed by our on-site expert technicians.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Security & Compliance Section */}
        <section id="compliance" className="dc-section dc-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="dc-sec-subtitle">SECURITY</span>
              <h2 className="dc-sec-title">Enterprise security &amp; compliance</h2>
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
        <section id="cta" className="dc-section dc-section-white">
          <div className="container">
            <div className="dc-cta-banner">
              <div className="dc-glow-emerald" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="dc-cta-title">Build a reliable infrastructure foundation</h2>
              <p className="dc-cta-desc">
                Partner with us to design, deploy, and manage your critical data center environments.
              </p>
              <Link href="/#contact" className="btn-dc-cta-light">
                Schedule Consultation <i className="bi bi-calendar-check"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
