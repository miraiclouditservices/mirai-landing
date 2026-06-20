"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./website-dev.css";

export default function WebsiteDevelopment() {
  const benefits = [
    {
      title: "Mobile Responsive",
      desc: "Flawless experiences across all devices, from desktop monitors to smartphones.",
      icon: "bi-phone-vibrate",
    },
    {
      title: "High Performance",
      desc: "Optimized load times and fluid animations that keep visitors engaged.",
      icon: "bi-lightning-charge",
    },
    {
      title: "Secure Development",
      desc: "Built with industry best practices to protect your data and user information.",
      icon: "bi-shield-check",
    },
    {
      title: "User Friendly Design",
      desc: "Intuitive navigation and clear calls-to-action that drive conversions.",
      icon: "bi-cursor-fill",
    },
  ];

  const services = [
    {
      title: "Business Websites",
      desc: "Professional corporate websites that establish trust and clearly communicate your value.",
      icon: "bi-building-fill",
    },
    {
      title: "E-Commerce Development",
      desc: "Robust online stores with secure checkout, inventory management, and analytics.",
      icon: "bi-cart-fill",
    },
    {
      title: "Web Applications",
      desc: "Complex, interactive web apps built with modern frameworks like React and Next.js.",
      icon: "bi-app-indicator",
    },
    {
      title: "Custom Software Solutions",
      desc: "Tailor-made portals, dashboards, and internal tools designed for your unique workflows.",
      icon: "bi-code-square",
    },
    {
      title: "CMS Development",
      desc: "Easy-to-manage websites powered by modern content management systems.",
      icon: "bi-layout-text-window-reverse",
    },
    {
      title: "Website Maintenance",
      desc: "Ongoing support, security updates, and performance tuning for your existing site.",
      icon: "bi-tools",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "We dive deep into your business goals, target audience, and feature requirements.",
      icon: "bi-search",
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Creating wireframes and high-fidelity mockups for your approval.",
      icon: "bi-palette-fill",
    },
    {
      step: "03",
      title: "Development",
      desc: "Translating designs into clean, responsive, and secure code.",
      icon: "bi-braces-asterisk",
    },
    {
      step: "04",
      title: "Testing",
      desc: "Rigorous cross-browser, performance, and security testing.",
      icon: "bi-bug-fill",
    },
    {
      step: "05",
      title: "Launch & Support",
      desc: "Seamless deployment followed by ongoing technical support.",
      icon: "bi-rocket-takeoff-fill",
    },
  ];

  const techStack = [
    {
      title: "React",
      icon: "bi-filetype-jsx",
    },
    {
      title: "Next.js",
      icon: "bi-triangle-half",
    },
    {
      title: "Node.js",
      icon: "bi-box-seam-fill",
    },
    {
      title: "Laravel",
      icon: "bi-fire",
    },
    {
      title: "WordPress",
      icon: "bi-wordpress",
    },
    {
      title: "Cloud Hosting",
      icon: "bi-cloud-check-fill",
    },
  ];



  const performanceTech = [
    {
      title: "Fast Loading",
      desc: "Image optimization, lazy loading, and advanced caching strategies.",
      icon: "bi-speedometer",
    },
    {
      title: "SEO Friendly",
      desc: "Clean semantic HTML, structured data, and server-side rendering.",
      icon: "bi-google",
    },
    {
      title: "Secure Code",
      desc: "Protection against XSS, CSRF, and SQL injection attacks.",
      icon: "bi-file-lock2-fill",
    },
    {
      title: "Cloud Ready",
      desc: "Built for seamless deployment on AWS, Vercel, or custom cloud providers.",
      icon: "bi-cloud-haze2-fill",
    },
    {
      title: "Scalable Architecture",
      desc: "Microservices and serverless functions ready to grow with your user base.",
      icon: "bi-diagram-3-fill",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="wd-page min-h-screen">
        <div className="wd-grid-dark" style={{ height: "1000px", zIndex: 1 }}></div>

        {/* 1. Hero Section */}
        <section id="wd-hero" className="wd-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text Column */}
              <div className="col-lg-6">
                <span className="wd-hero-subtitle">WEBCRAFT</span>
                <h1 className="wd-hero-title">
                  <span>Modern website development</span>
                </h1>
                <p className="wd-hero-desc">
                  Responsive digital experiences designed around your goals, customers and brand identity. Create powerful websites with modern technology, beautiful design and high performance.
                </p>
                <div className="wd-hero-buttons">
                  <a href="#services" className="btn-wd-primary">
                    Explore Services <i className="bi bi-arrow-down-right"></i>
                  </a>
                  <Link href="/#contact" className="btn-wd-outline">
                    Get Free Consultation <i className="bi bi-chat-left-text"></i>
                  </Link>
                </div>
              </div>

              {/* Illustration Column */}
              <div className="col-lg-6">
                <div className="wd-hero-right">
                  <div className="wd-illustration-box">
                    <Image 
                      src="/images/services/hero_webdev_1781975098595.png" 
                      width={400} height={400} 
                      alt="Website Development" 
                      className="img-fluid position-relative z-1" 
                      style={{ borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }} 
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Web Benefits Section */}
        <section id="benefits" className="wd-section wd-section-white pt-0">
          <div className="container">
            <div className="wd-benefits-wrapper">
              <div className="row g-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="col-md-6 col-lg-3">
                    <div className="wd-benefit-card">
                      <div className="wd-benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <h3 className="wd-benefit-title">{benefit.title}</h3>
                      <p className="wd-benefit-desc">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="wd-section wd-section-light">
          <div className="wd-grid-light"></div>
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="wd-sec-subtitle">SERVICES</span>
              <h2 className="wd-sec-title">Complete website development solutions</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {services.map((service, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <div className="wd-service-card">
                    <div className="wd-service-icon-box">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="wd-benefit-title">{service.title}</h3>
                    <p className="wd-benefit-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Development Process Section */}
        <section id="process" className="wd-section wd-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="wd-sec-subtitle">WORKFLOW</span>
              <h2 className="wd-sec-title">Our development process</h2>
            </div>

            <div className="wd-process-timeline">
              {workflow.map((step, i) => (
                <div key={i} className="wd-process-step">
                  <div className="wd-process-circle">
                    <i className={`bi ${step.icon}`}></i>
                    <span className="wd-process-step-num">{step.step}</span>
                  </div>
                  <h3 className="wd-process-step-title">{step.title}</h3>
                  <p className="wd-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technology Stack Section */}
        <section id="technologies" className="wd-section wd-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="wd-sec-subtitle">TECHNOLOGY STACK</span>
              <h2 className="wd-sec-title">Built with modern web technologies</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {techStack.map((tech, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div className="wd-tech-card">
                    <div className="wd-tech-icon">
                      <i className={`bi ${tech.icon}`}></i>
                    </div>
                    <h3 className="wd-tech-title">{tech.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. UI/UX Section */}
        <section id="ui-ux" className="wd-section wd-section-dark">
          <div className="wd-grid-dark"></div>
          <div className="wd-glow-emerald" style={{ top: "10%", right: "5%" }}></div>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left Column: Mockup UI */}
              <div className="col-lg-6">
                <div className="wd-mockup-container">
                  <div className="wd-browser-header">
                    <div className="wd-dot wd-dot-r"></div>
                    <div className="wd-dot wd-dot-y"></div>
                    <div className="wd-dot wd-dot-g"></div>
                  </div>
                  <div className="wd-mockup-body">
                    <div className="wd-wireframe-box" style={{ width: "40%" }}>
                      <div className="wd-wireframe-line" style={{ width: "60%", left: "1rem" }}></div>
                    </div>
                    <div className="wd-wireframe-box" style={{ height: "120px" }}>
                      <div className="wd-wireframe-line" style={{ width: "80%", left: "10%", top: "30%" }}></div>
                      <div className="wd-wireframe-line" style={{ width: "50%", left: "25%", top: "70%" }}></div>
                    </div>
                    <div className="row g-3">
                      <div className="col-4">
                        <div className="wd-wireframe-box" style={{ height: "80px" }}></div>
                      </div>
                      <div className="col-4">
                        <div className="wd-wireframe-box" style={{ height: "80px" }}></div>
                      </div>
                      <div className="col-4">
                        <div className="wd-wireframe-box" style={{ height: "80px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Information */}
              <div className="col-lg-6">
                <div className="wd-intel-list">
                  <div>
                    <span className="wd-sec-subtitle-emerald">UI / UX DESIGN</span>
                    <h2 className="wd-sec-title">Designs that create better user experiences</h2>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-layout-sidebar-inset"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Wireframes & Architecture</h4>
                      <p className="intel-content-desc">Strategic layout planning to ensure logical user flows and intuitive navigation structures.</p>
                    </div>
                  </div>

                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-layers-fill"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Interactive Prototypes</h4>
                      <p className="intel-content-desc">Clickable mockups that let you experience the website before a single line of code is written.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-phone-landscape"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">Responsive Layouts</h4>
                      <p className="intel-content-desc">Fluid grid systems that automatically adapt to provide the perfect viewing experience on any screen.</p>
                    </div>
                  </div>
                  
                  <div className="intel-item">
                    <div className="intel-icon-box">
                      <i className="bi bi-person-heart"></i>
                    </div>
                    <div>
                      <h4 className="intel-content-title">User-Focused Design</h4>
                      <p className="intel-content-desc">Accessibility compliance and visual hierarchies designed to maximize conversions.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 8. Performance & Security Section */}
        <section id="performance" className="wd-section wd-section-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="wd-sec-subtitle">ENTERPRISE STANDARD</span>
              <h2 className="wd-sec-title">Performance & Security</h2>
            </div>

            <div className="row g-4 mt-2 justify-content-center">
              {performanceTech.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-4">
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
        <section id="cta" className="wd-section wd-section-light">
          <div className="container">
            <div className="wd-cta-banner">
              <div className="wd-glow-blue" style={{ top: "-20%", left: "35%" }}></div>
              <h2 className="wd-cta-title">Ready to build your next digital experience?</h2>
              <p className="wd-cta-desc">
                Let's discuss your project requirements and create a website that drives real business results.
              </p>
              <Link href="/#contact" className="btn-wd-cta-light">
                Start Your Website Project <i className="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
