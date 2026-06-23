"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Cloud Services",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Mirai Cloud Consultation: ${formData.service}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Cloud Services",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("There was an issue sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-light" style={{ top: "30%", right: "10%" }}></div>
      
      <div className="container">
        <div className="row g-5 align-items-stretch">
          
          {/* Left Column: Contact details & Map snippet */}
          <div className="col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <span className="section-subtitle">CONTACT US</span>
              <h2 className="section-title">
                Let&apos;s build smarter infrastructure together.
              </h2>
              <p className="lead fs-6 text-muted">
                Tell us about your goals and our team will help you find the right technology path forward.
              </p>
              
              <div className="contact-info-list">
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:hello@miraicloud.in" className="contact-info-value">
                      hello@miraicloud.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <span className="contact-info-label">Phone</span>
                    <a href="tel:+919876543210" className="contact-info-value">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <span className="contact-info-label">Office</span>
                    <span className="contact-info-value">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Snippet */}
            <div className="contact-map-snippet">
              <div className="contact-map-pin">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <span className="contact-map-label">Hyderabad, India</span>
            </div>
          </div>
          
          {/* Right Column: consultation request card */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Request a consultation</h3>
              <p className="contact-form-subtitle">
                Share a few details and we&apos;ll get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    
                    {/* Your Name */}
                    <div className="col-md-6 form-group">
                      <label htmlFor="name" className="form-label-custom">Your name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="form-control-custom"
                      />
                    </div>
                    
                    {/* Work Email */}
                    <div className="col-md-6 form-group">
                      <label htmlFor="email" className="form-label-custom">Work email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter work email"
                        className="form-control-custom"
                      />
                    </div>
                    
                    {/* Phone Number */}
                    <div className="col-md-6 form-group">
                      <label htmlFor="phone" className="form-label-custom">Phone number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="form-control-custom"
                      />
                    </div>
                    
                    {/* Service Interest */}
                    <div className="col-md-6 form-group">
                      <label htmlFor="service" className="form-label-custom">Service interest</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-control-custom"
                      >
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="Network Infrastructure">Network Infrastructure</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="CCTV &amp; Surveillance">CCTV &amp; Surveillance</option>
                        <option value="Website Development">Website Development</option>
                        <option value="IT Support &amp; AMC">IT Support &amp; AMC</option>
                      </select>
                    </div>
                    
                    {/* How can we help */}
                    <div className="col-12 form-group">
                      <label htmlFor="message" className="form-label-custom">How can we help?</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="form-control-custom"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="col-12">
                      {error && <div className="text-danger mb-3" style={{ fontSize: "0.9rem" }}>{error}</div>}
                      <button type="submit" className="btn btn-primary-custom" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"} {!loading && <i className="bi bi-send-fill ms-2" style={{ fontSize: "0.85rem" }}></i>}
                      </button>
                      
                      {submitted && (
                        <div className="alert alert-success d-flex align-items-center gap-2 py-3 px-4 border-0 mt-4" style={{ borderRadius: "12px", backgroundColor: "var(--accent-emerald-light)", color: "var(--accent-emerald)" }} role="alert">
                          <i className="bi bi-check-circle-fill fs-5"></i>
                          <div>
                            <strong>Thank you!</strong> Your message has been sent successfully. We will contact you soon.
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
