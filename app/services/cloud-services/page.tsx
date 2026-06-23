"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./cloud-services.css";

export default function CloudServices() {
  const benefits = [
    {
      title: "Enterprise Security",
      desc: "Robust protection for databases and application workloads.",
      icon: "bi-shield-check",
    },
    {
      title: "Easy Scalability",
      desc: "Instantly expand your server resources as traffic demands grow.",
      icon: "bi-arrow-up-right-square",
    },
    {
      title: "High Reliability",
      desc: "SLA-backed uptime guarantees with geo-redundant hosting.",
      icon: "bi-cpu",
    },
    {
      title: "Cost Optimisation",
      desc: "Maximise infrastructure value while cutting unnecessary overheads.",
      icon: "bi-cash-coin",
    },
  ];

  const services = [
    {
      title: "Cloud Migration",
      desc: "Seamless workload transitions to modern architectures with zero data loss or service disruption.",
      icon: "bi-cloud-arrow-up",
    },
    {
      title: "Cloud Hosting",
      desc: "High-performance hosting built on top-tier infrastructure for reliable database and web deployments.",
      icon: "bi-server",
    },
    {
      title: "Cloud Optimisation",
      desc: "Continuous performance audits and auto-scaling setups to guarantee lightning-fast response times.",
      icon: "bi-speedometer2",
    },
    {
      title: "Cloud Security",
      desc: "Advanced encryption, virtual firewalls, active threat detection, and strict compliance monitoring.",
      icon: "bi-shield-lock",
    },
    {
      title: "Managed Cloud",
      desc: "24/7 expert system administration, routine updates, backups, and proactive health checks.",
      icon: "bi-headset",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Assess",
      desc: "Evaluate existing systems and outline requirements.",
      icon: "bi-search",
    },
    {
      step: "02",
      title: "Design",
      desc: "Formulate custom landing zone topology and cloud architecture.",
      icon: "bi-vector-pen",
    },
    {
      step: "03",
      title: "Migrate",
      desc: "Transfer files, services, and databases securely.",
      icon: "bi-box-arrow-in-right",
    },
    {
      step: "04",
      title: "Optimise",
      desc: "Refine costs, speed, autoscaling, and backup schedules.",
      icon: "bi-sliders",
    },
    {
      step: "05",
      title: "Manage",
      desc: "Provide 24/7 monitoring, security patches, and SLA support.",
      icon: "bi-shield-shaded",
    },
  ];

  const techStack = [
    {
      title: "Kubernetes",
      desc: "Robust container orchestration for hosting microservices at scale.",
      icon: "bi-grid-3x3-gap",
    },
    {
      title: "Docker",
      desc: "Standardised app virtualization to ensure clean deployment environments.",
      icon: "bi-box-seam",
    },
    {
      title: "DevOps",
      desc: "CI/CD pipeline automation for fast, bug-free software releases.",
      icon: "bi-infinity",
    },
    {
      title: "AI Cloud",
      desc: "Integrated machine learning pipelines for predictive intelligence.",
      icon: "bi-robot",
    },
    {
      title: "Database",
      desc: "High-speed SQL & NoSQL clusters built for data integrity and zero lag.",
      icon: "bi-database",
    },
    {
      title: "Serverless",
      desc: "Scalable event-driven computing that bills only when requests run.",
      icon: "bi-lightning-charge",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="cloud-page min-h-screen">
        <div className="cloud-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="cloud-hero" className="cloud-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Content */}
              <div className="col-lg-6">
                <span className="cloud-hero-subtitle">For migration, hosting and optimisation</span>
                <h1 className="cloud-hero-title">
                  <span>Secure cloud computing</span>
                </h1>
                <p className="cloud-hero-desc">
                  We design, secure, and manage the digital foundations that help modern organisations move workloads, modernise legacy servers, and scale with absolute confidence.
                </p>
                <div className="cloud-hero-buttons">
                  <a href="#services" className="btn-cloud-primary">
                    Explore Services <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-cloud-outline">
                    Talk to an Expert <i className="bi bi-chat-dots"></i>
                  </Link>
                </div>
              </div>

              {/* Visual Mockup */}
              <div className="col-lg-6">
                <div className="cloud-hero-right">
                  <div className="cloud-illustration-box">
                    <Image
                      src="/images/services/hero_cloud_1781975015296.png"
                      width={400} height={400}
                      alt="Cloud Services"
                      className="img-fluid position-relative z-1"
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Cloud Benefits Section (Floating Card Section) */}
        <section id="benefits" className="cloud-section cloud-section-white pt-0">
          <div className="container">
            <div className="cloud-benefits-wrapper">
              <div className="cloud-benefits-card">
                <div className="row g-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="col-md-6 col-lg-3">
                      <div className="benefit-col">
                        <div className="benefit-icon-box">
                          <i className={`bi ${benefit.icon}`}></i>
                        </div>
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-desc">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="cloud-section cloud-section-light">
          <div className="cloud-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cloud-sec-subtitle">OUR SERVICES</span>
              <h2 className="cloud-sec-title">End-to-end cloud solutions tailored to your needs</h2>
              <p className="cloud-sec-desc">
                From simple server hosting to complex multi-cloud migrations and DevOps automations.
              </p>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="cloud-service-card">
                    <div className="c-service-icon-wrapper">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="c-service-title">{service.title}</h3>
                    <p className="c-service-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Cloud Process Section */}
        <section id="process" className="cloud-section cloud-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cloud-sec-subtitle">OUR APPROACH</span>
              <h2 className="cloud-sec-title">How we guide your cloud migration</h2>
              <p className="cloud-sec-desc">
                A structured, step-by-step roadmap engineered to minimize downtime and prevent security leaks.
              </p>
            </div>

            <div className="process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="process-step">
                  <div className="process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="process-step-num">{step.step}</span>
                  </div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 7. Security Section */}
        <section id="security" className="cloud-section cloud-section-dark">
          <div className="cloud-grid-dark"></div>
          <div className="cloud-glow-emerald" style={{ bottom: "10%", left: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Details */}
              <div className="col-lg-6">
                <span className="cloud-sec-subtitle-emerald">CYBERSECURITY ACCREDITED</span>
                <h2 className="cloud-sec-title">Enterprise compliance and data protection</h2>
                <p className="cloud-sec-desc mb-5">
                  Protecting your customer data is at the center of everything we build. Our landing zones align with strict compliance standards.
                </p>

                <div className="sec-info-box">
                  <div className="sec-info-header">
                    <i className="bi bi-shield-fill-check sec-info-icon"></i>
                    <h3 className="sec-info-title">Data protection</h3>
                  </div>
                  <p className="sec-info-desc">
                    AES-256 encryption at rest and TLS 1.3 in transit to keep confidential database records secure.
                  </p>
                </div>

                <div className="sec-info-box">
                  <div className="sec-info-header">
                    <i className="bi bi-shield-fill-check sec-info-icon"></i>
                    <h3 className="sec-info-title">Global compliance standards</h3>
                  </div>
                  <p className="sec-info-desc">
                    Aligned with ISO 27001, SOC2, HIPAA, and GDPR configuration baselines.
                  </p>
                </div>

                <div className="sec-info-box">
                  <div className="sec-info-header">
                    <i className="bi bi-shield-fill-check sec-info-icon"></i>
                    <h3 className="sec-info-title">Automated backups &amp; recovery</h3>
                  </div>
                  <p className="sec-info-desc">
                    Hourly snapshot intervals with multi-region backup replication and automatic restore testing.
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Shield */}
              <div className="col-lg-6">
                <div className="sec-visual-box">
                  <div className="sec-shield-container">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div className="sec-lock-badge">
                    <span></span> 24/7 Security Monitoring Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Technology Stack Section */}
        <section id="tech-stack" className="cloud-section cloud-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="cloud-sec-subtitle">ENGINEERING STANDARD</span>
              <h2 className="cloud-sec-title">Our modern cloud technology stack</h2>
              <p className="cloud-sec-desc">
                We leverage best-of-breed open source and cloud native technologies to design high-performance architectures.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {techStack.map((tech, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="tech-card">
                    <div className="tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="tech-title">{tech.title}</h3>
                    <p className="tech-desc">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Call To Action Section */}
        <section id="cta" className="cloud-section cloud-section-white">
          <div className="container">
            <div className="cloud-cta-banner">
              <div className="cloud-glow-blue" style={{ top: "-20%", left: "30%" }}></div>
              <h2 className="cloud-cta-title">Ready to accelerate your cloud journey?</h2>
              <p className="cloud-cta-desc">
                Talk to our certified cloud architects today for a free infrastructure cost and security assessment.
              </p>
              <Link href="/#contact" className="btn-cta-light">
                Get Started Today <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
