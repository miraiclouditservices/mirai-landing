"use client";

import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Secure, scalable cloud strategies for migration, hosting and optimisation.",
      icon: "bi-cloud",
      link: "/services/cloud-services",
    },
    {
      id: "network-infra",
      title: "Network Infrastructure",
      description: "Reliable connectivity, switching, routing and enterprise network design.",
      icon: "bi-diagram-3",
      link: "/services/network-infrastructure",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Threat protection, monitoring and security frameworks for modern teams.",
      icon: "bi-shield-lock",
      link: "/services/cybersecurity",
    },
    {
      id: "data-center",
      title: "Data Center Solutions",
      description: "High-performance infrastructure planning, deployment and operations.",
      icon: "bi-hdd-stack",
      link: "/services/data-center",
    },
    {
      id: "business-comm",
      title: "Business Communication",
      description: "Unified communication systems that keep your teams connected.",
      icon: "bi-telephone-inbound",
      link: "/services/business-communication",
    },
    {
      id: "cctv-surveillance",
      title: "CCTV & Surveillance",
      description: "Smart surveillance and monitoring systems for safer workplaces.",
      icon: "bi-camera-video",
      link: "/services/cctv-surveillance",
    },
    {
      id: "it-support-amc",
      title: "IT Support & AMC",
      description: "Responsive support and preventive maintenance for business continuity.",
      icon: "bi-wrench-adjustable",
      link: "/services/it-support",
    },
    {
      id: "website-dev",
      title: "Website Development",
      description: "Modern, responsive digital experiences built around your business goals.",
      icon: "bi-laptop",
      link: "/services/website-dev",
    },

  ];

  return (
    <section id="services" className="services-section">
      <div className="glow-light" style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">
            Technology solutions built for resilience and scale.
          </h2>
          <p className="lead fs-6 text-muted col-lg-8 mx-auto">
            From cloud migration to cybersecurity and managed IT, we help businesses modernise with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 services-grid">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-3">
              <Link href={service.link} className="service-card">
                <div className="service-icon-box">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-link">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
