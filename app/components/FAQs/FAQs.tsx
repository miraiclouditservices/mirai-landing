"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQs() {
  const faqs: FAQItem[] = [
    {
      id: "support-infra",
      question: "Do you provide support for existing IT infrastructure?",
      answer: "Yes, we offer comprehensive assessment, optimization, and management support for your existing server assets, legacy software environments, and network setups to make sure they are modern, secure, and resilient.",
    },
    {
      id: "cloud-migration",
      question: "Can Mirai help us migrate to the cloud?",
      answer: "Absolutely. We design end-to-end cloud migration strategies, handle safe database transitions, configure secure virtual private clouds, and optimize hosting packages to keep your cloud bills low and uptime high.",
    },
    {
      id: "custom-solutions",
      question: "Do you offer custom solutions for different industries?",
      answer: "Yes, our engineers align security architectures and network configurations with the specific compliance guidelines (like healthcare HIPAA or financial regulations) and productivity goals of your sector.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs-section">
      <div className="glow-light" style={{ bottom: "10%", right: "10%" }}></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="section-subtitle">FAQS</span>
          <h2 className="section-title">
            Questions? We&apos;re here with answers.
          </h2>
          <p className="lead fs-6 text-muted col-lg-8 mx-auto">
            A few common questions about how we work and support your business.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faqs-container">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <div
                  className="faq-header"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-toggle-icon">
                    <i className="bi bi-plus-lg"></i>
                  </div>
                </div>
                
                <div
                  className="faq-body"
                  style={{
                    maxHeight: isActive ? "200px" : "0px",
                  }}
                >
                  <p className="faq-body-content">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
