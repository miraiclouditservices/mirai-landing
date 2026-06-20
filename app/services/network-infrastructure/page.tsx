"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./network-infrastructure.css";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function NetworkInfrastructure() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "diff",
      question: "What makes NexGrid different from other infrastructure providers?",
      answer: "We focus on end-to-end resilience and scalability. Our certified engineers design bespoke network architectures tailored to your specific performance requirements, combined with 24/7 proactive monitoring.",
    },
    {
      id: "timeline",
      question: "How long does a typical infrastructure project take?",
      answer: "Timeline depends on complexity. Initial assessments are done within 1-2 weeks. Design and deployment for enterprise networks usually span between 4 to 8 weeks, including thorough testing and zero-downtime cutover.",
    },
    {
      id: "multisite",
      question: "Do you support multi-site networks?",
      answer: "Yes, we specialize in multi-site routing, SD-WAN, and secure site-to-site VPN solutions that connect geographically distributed offices and remote teams seamlessly under a unified security architecture.",
    },
    {
      id: "support",
      question: "What ongoing support is included?",
      answer: "We provide comprehensive ongoing support plans, including SLA-backed maintenance, automated security patching, active threat detection, regular health checks, and a 24/7 network operations center (NOC) helpdesk.",
    },
  ];

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <main className="net-infra-page min-h-screen">
        <div className="net-grid-pattern"></div>
        <div className="net-glow-blob" style={{ top: "15%", left: "10%" }}></div>
        <div className="net-glow-blob" style={{ top: "60%", right: "10%" }}></div>

        {/* Hero Section */}
        <section id="net-hero" className="net-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Text & Content */}
              <div className="col-lg-6">
                <span className="net-hero-subtitle">ENTERPRISE NETWORK INFRASTRUCTURE</span>
                <h1 className="net-hero-title">
                  <span>Enterprise network infrastructure</span>
                </h1>
                <p className="net-hero-desc">
                  We design, deploy and optimise resilient infrastructure for organisations that depend on speed, uptime and secure connectivity at every layer.
                </p>
                <div className="net-hero-cta">
                  <a href="#what-we-do" className="btn-net-explore">
                    Explore services <i className="bi bi-arrow-down"></i>
                  </a>
                </div>
                <div className="net-hero-features">
                  <div className="net-feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>24/7 network monitoring</span>
                  </div>
                  <div className="net-feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Vendor-neutral expertise</span>
                  </div>
                  <div className="net-feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Scalable by design</span>
                  </div>
                </div>
              </div>

              {/* Visual Mockup */}
              <div className="col-lg-6">
                <div className="net-hero-right">
                  <div className="net-img-wrapper">
                    <Image
                      src="/images/services/hero_network_1781975026065.png"
                      alt="Enterprise network cables and server"
                      fill
                      priority
                      className="net-main-img"
                      unoptimized
                    />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="net-section net-section-light">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-lg-6">
                <span className="net-section-subtitle">WHAT WE DO</span>
                <h2 className="net-section-title">Infrastructure engineered for continuity.</h2>
              </div>
              <div className="col-lg-6">
                <p className="net-section-desc mb-0">
                  From core switching to multi-site routing, we create networks that are secure, observable and ready to scale with the demands of your business.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {/* Switching Card */}
              <div className="col-md-4">
                <div className="net-card">
                  <div className="net-card-img-box">
                    <Image
                      src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg"
                      alt="High-performance switching cables"
                      fill
                      className="net-card-img"
                      unoptimized
                    />
                  </div>
                  <div className="net-card-body">
                    <span className="net-card-meta">01 / SWITCHING</span>
                    <h3 className="net-card-title">High-performance switching</h3>
                    <p className="net-card-desc">
                      Low-latency, fault-tolerant switching environments built for uninterrupted operations.
                    </p>
                    <div className="net-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Routing Card */}
              <div className="col-md-4">
                <div className="net-card">
                  <div className="net-card-img-box">
                    <Image
                      src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
                      alt="Intelligent routing servers"
                      fill
                      className="net-card-img"
                      unoptimized
                    />
                  </div>
                  <div className="net-card-body">
                    <span className="net-card-meta">02 / ROUTING</span>
                    <h3 className="net-card-title">Intelligent routing</h3>
                    <p className="net-card-desc">
                      Secure, resilient traffic paths that keep your teams and systems connected without compromise.
                    </p>
                    <div className="net-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Card */}
              <div className="col-md-4">
                <div className="net-card">
                  <div className="net-card-img-box">
                    <Image
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="Enterprise network planning blueprint"
                      fill
                      className="net-card-img"
                      unoptimized
                    />
                  </div>
                  <div className="net-card-body">
                    <span className="net-card-meta">03 / DESIGN</span>
                    <h3 className="net-card-title">Enterprise network design</h3>
                    <p className="net-card-desc">
                      Future-ready architectures mapped to your business, users and growth trajectory.
                    </p>
                    <div className="net-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="net-section net-section-white">
          <div className="container">
            <div className="row g-5">
              {/* Left Column: Heading */}
              <div className="col-lg-5">
                <span className="net-section-subtitle">HOW WE WORK</span>
                <h2 className="net-section-title">Clarity from assessment to operation.</h2>
                <p className="net-section-desc mt-3">
                  We combine technical depth with practical delivery, so your infrastructure investment is aligned, measurable and built to last.
                </p>
              </div>

              {/* Right Column: Steps */}
              <div className="col-lg-7">
                <div className="net-work-steps">
                  <div className="net-step-item">
                    <span className="net-step-num">01</span>
                    <div className="net-step-content">
                      <h3 className="net-step-title">Assess</h3>
                      <p className="net-step-desc">
                        We audit current performance, bottlenecks, security posture and growth demands.
                      </p>
                    </div>
                  </div>

                  <div className="net-step-item">
                    <span className="net-step-num">02</span>
                    <div className="net-step-content">
                      <h3 className="net-step-title">Architect</h3>
                      <p className="net-step-desc">
                        Our team designs a resilient network blueprint with the right topology, hardware and controls.
                      </p>
                    </div>
                  </div>

                  <div className="net-step-item">
                    <span className="net-step-num">03</span>
                    <div className="net-step-content">
                      <h3 className="net-step-title">Operate</h3>
                      <p className="net-step-desc">
                        We deploy, optimise and continuously monitor so your teams stay connected with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="net-faqs" className="net-section net-section-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="net-section-subtitle">COMMON QUESTIONS</span>
              <h2 className="net-section-title">Clarity from our infrastructure experts.</h2>
            </div>

            <div className="net-faqs-container">
              {faqs.map((faq) => {
                const isActive = activeFaq === faq.id;
                return (
                  <div key={faq.id} className={`net-faq-item ${isActive ? "active" : ""}`}>
                    <div className="net-faq-header" onClick={() => toggleFaq(faq.id)}>
                      <h3 className="net-faq-question">{faq.question}</h3>
                      <div className="net-faq-toggle">
                        <i className="bi bi-plus-lg"></i>
                      </div>
                    </div>
                    <div
                      className="net-faq-body"
                      style={{
                        maxHeight: isActive ? "200px" : "0px",
                      }}
                    >
                      <p className="net-faq-content">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section id="net-cta" className="net-section net-section-white">
          <div className="container">
            <div className="net-cta-wrapper">
              <div className="net-cta-card d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div>
                  <span className="net-cta-label">START WITH CLARITY</span>
                  <h2 className="net-cta-title">Ready for a network that performs when it matters most?</h2>
                  <p className="net-cta-desc">
                    Talk to our infrastructure team about a smarter, more resilient network strategy.
                  </p>
                </div>
                <div>
                  <Link href="/#contact" className="btn-net-cta" aria-label="Get in touch">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
