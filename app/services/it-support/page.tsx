"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./it-support.css";

export default function ITSupport() {
  const benefits = [
    {
      title: "Faster Issue Resolution",
      desc: "Minimize disruptions with rapid response times and expert troubleshooting.",
      icon: "bi-lightning-charge-fill",
    },
    {
      title: "Reduced Downtime",
      desc: "Keep your operations running smoothly with reliable hardware and software support.",
      icon: "bi-graph-down-arrow",
    },
    {
      title: "Proactive Monitoring",
      desc: "Identify and resolve potential system issues before they affect your users.",
      icon: "bi-activity",
    },
    {
      title: "Business Continuity",
      desc: "Ensure seamless recovery and uninterrupted access to your core business systems.",
      icon: "bi-arrow-repeat",
    },
  ];

  const services = [
    {
      title: "Help Desk Support",
      desc: "Dedicated technical assistance for software troubleshooting and user queries.",
      icon: "bi-headset",
    },
    {
      title: "Hardware Maintenance",
      desc: "Comprehensive repair, replacement, and upgrades for physical IT assets.",
      icon: "bi-pc-display-horizontal",
    },
    {
      title: "Network Support",
      desc: "Configuration, monitoring, and optimization of enterprise network connectivity.",
      icon: "bi-router-fill",
    },
    {
      title: "Software Support",
      desc: "Patch management, licensing, and update installations for business applications.",
      icon: "bi-window-stack",
    },
    {
      title: "Server Management",
      desc: "Ongoing administration and health checks for on-premise and virtual servers.",
      icon: "bi-server",
    },
    {
      title: "Cloud Support",
      desc: "Management of cloud infrastructure, including Microsoft 365 and AWS environments.",
      icon: "bi-cloud-arrow-up-fill",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "IT Assessment",
      desc: "Comprehensive audit of your existing infrastructure and hardware inventory.",
      icon: "bi-search",
    },
    {
      step: "02",
      title: "Planning",
      desc: "Develop a customized support SLA and preventive maintenance schedule.",
      icon: "bi-calendar-check-fill",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Deploy monitoring agents, remote tools, and finalize helpdesk onboarding.",
      icon: "bi-tools",
    },
    {
      step: "04",
      title: "Monitoring",
      desc: "24/7 proactive surveillance of networks, servers, and connected endpoints.",
      icon: "bi-display",
    },
    {
      step: "05",
      title: "Maintenance",
      desc: "Scheduled check-ups, prompt ticketing resolution, and quarterly reviews.",
      icon: "bi-arrow-clockwise",
    },
  ];

  const techStack = [
    {
      title: "System Health Checks",
      desc: "Regular diagnostics to ensure hardware longevity and optimal operating conditions.",
      icon: "bi-heart-pulse-fill",
    },
    {
      title: "Security Updates",
      desc: "Timely deployment of OS patches, antivirus definitions, and firewall rules.",
      icon: "bi-shield-fill-check",
    },
    {
      title: "Performance Monitoring",
      desc: "Tracking CPU, memory, and bandwidth utilization to prevent bottlenecks.",
      icon: "bi-speedometer2",
    },
    {
      title: "Backup Management",
      desc: "Automated verification of local and cloud backups for disaster recovery readiness.",
      icon: "bi-device-hdd-fill",
    },
    {
      title: "Hardware Inspection",
      desc: "Physical cleaning and condition assessment of critical networking equipment.",
      icon: "bi-wrench-adjustable",
    },
    {
      title: "Network Optimization",
      desc: "Tuning routers and switches to eliminate latency and improve packet delivery.",
      icon: "bi-wifi",
    },
  ];



  const industries = [
    {
      title: "Corporate Offices",
      icon: "bi-buildings-fill",
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
      title: "Manufacturing",
      icon: "bi-gear-wide-connected",
    },
    {
      title: "Retail",
      icon: "bi-shop",
    },
    {
      title: "Startups",
      icon: "bi-rocket-takeoff-fill",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="it-page min-h-screen">
        <div className="it-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="it-hero" className="it-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="it-hero-subtitle">TECHCARE</span>
                <h1 className="it-hero-title">
                  <span>Reliable IT support</span>
                </h1>
                <p className="it-hero-desc">
                  Responsive support and preventive maintenance solutions for uninterrupted business operations. Manage your IT infrastructure with expert support, monitoring and proactive maintenance.
                </p>
                <div className="it-hero-buttons">
                  <a href="#services" className="btn-it-primary">
                    Explore Services <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-it-outline">
                    Request AMC <i className="bi bi-clipboard-check"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="it-hero-right">
                  <div className="it-illustration-box">
                    <Image 
                      src="/images/services/hero_itsupport_1781975086191.png" 
                      width={400} height={400} 
                      alt="IT Support" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. IT Support Benefits Section */}
        <section id="benefits" className="it-section it-section-white pt-0">
          <div className="container">
            <div className="it-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="it-benefit-card">
                      <div className="it-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="it-benefit-title">{benefit.title}</h3>
                      <p className="it-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. IT Services Section */}
        <section id="services" className="it-section it-section-light">
          <div className="it-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="it-sec-subtitle">SERVICES</span>
              <h2 className="it-sec-title">Complete IT support solutions</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="it-service-card">
                    <div className="it-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="it-benefit-title">{service.title}</h3>
                    <p className="it-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. AMC Process Section */}
        <section id="process" className="it-section it-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="it-sec-subtitle">WORKFLOW</span>
              <h2 className="it-sec-title">Our proactive AMC approach</h2>
            </div>

            <div className="it-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="it-process-step">
                  <div className="it-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="it-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="it-process-step-title">{step.title}</h3>
                  <p className="it-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Preventive Maintenance Section */}
        <section id="maintenance" className="it-section it-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="it-sec-subtitle">PREVENTIVE CARE</span>
              <h2 className="it-sec-title">Prevent problems before they impact your business</h2>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="it-tech-card">
                    <div className="it-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="it-tech-title">{tech.title}</h3>
                    <p className="it-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Dashboard Section (Dark cyber theme) */}
        <section id="dashboard" className="it-section it-section-dark">
          <div className="it-grid-dark"></div>
          <div className="it-glow-blue" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Dashboard UI */}
              <div className="col-lg-6">
                <div className="it-dashboard-box">
                  <div className="it-dashboard-header">
                    <span className="db-title">IT OPERATIONS CENTER</span>
                    <span className="db-status">
                      <span className="db-pulse"></span> HEALTHY
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="it-metric-card">
                        <div className="metric-val">100%</div>
                        <div className="metric-label">System Status</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="it-metric-card">
                        <div className="metric-val alert">2</div>
                        <div className="metric-label">Open Tickets</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart gauges */}
                  <div className="it-chart-row">
                    <div className="it-chart-label">
                      <span>Server Resource Load</span>
                      <span>32%</span>
                    </div>
                    <div className="it-progress-track">
                      <div className="it-progress-fill" style={{ width: "32%", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                  </div>

                  <div className="it-chart-row">
                    <div className="it-chart-label">
                      <span>Network Availability</span>
                      <span>99.9%</span>
                    </div>
                    <div className="it-progress-track">
                      <div className="it-progress-fill" style={{ width: "99.9%", backgroundColor: "var(--accent-emerald)" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="it-intel-list">
                  <div>
                    <span className="it-sec-subtitle-emerald">MONITORING</span>
                    <h2 className="it-sec-title">Complete visibility of your IT environment</h2>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-hdd-network-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Network health</h4>
                      <p className="intel-content-desc">Real-time tracking of switch statuses, bandwidth allocation, and firewall traffic.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-exclamation-circle-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Proactive alerts</h4>
                      <p className="intel-content-desc">Instant notification generation for failing drives, high temps, or offline devices.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-ticket-detailed-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Ticket tracking</h4>
                      <p className="intel-content-desc">Transparent view of issue resolution progress directly from our centralized help desk.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-file-earmark-bar-graph-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Performance reports</h4>
                      <p className="intel-content-desc">Monthly SLA reports detailing uptime, ticket metrics, and maintenance outcomes.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 8. Industries Section */}
        <section id="industries" className="it-section it-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="it-sec-subtitle">INDUSTRIES</span>
              <h2 className="it-sec-title">Trusted across sectors</h2>
            </div>

            <div className="row g-4 mt-2">
              {industries.map((ind, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div className="it-industry-card">
                    <div className="it-industry-icon">
                      <i className={`bi ${ind.icon}`}></i>
                    </div>
                    <h3 className="it-industry-title">{ind.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Call To Action Section */}
        <section id="cta" className="it-section it-section-white">
          <div className="container">
            <div className="it-cta-banner">
              <div className="it-glow-emerald" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="it-cta-title">Keep your business technology running smoothly</h2>
              <p className="it-cta-desc">
                Partner with our experts to secure, maintain, and optimize your IT infrastructure.
              </p>
              <Link href="/#contact" className="btn-it-cta-light">
                Start Your AMC Plan <i className="bi bi-headset"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
