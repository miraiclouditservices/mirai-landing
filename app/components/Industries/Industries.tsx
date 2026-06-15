"use client";

import Image from "next/image";

interface IndustryItem {
  id: string;
  num: string;
  name: string;
  description: string;
  image: string;
}

export default function Industries() {
  const industries: IndustryItem[] = [
    {
      id: "manufacturing",
      num: "01",
      name: "Manufacturing",
      description: "Connected plants, secure networks and real-time operational visibility.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "education",
      num: "02",
      name: "Education",
      description: "Smarter campuses with Wi-Fi, cloud tools and safer learning environments.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "healthcare",
      num: "03",
      name: "Healthcare",
      description: "Protected data, resilient systems and communication that never misses a beat.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "banking-finance",
      num: "04",
      name: "Banking & Finance",
      description: "Secure infrastructure and continuity-focused systems for critical operations.",
      image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="glow-light" style={{ top: "10%", left: "5%" }}></div>
      
      <div className="container">
        {/* Section Split Header */}
        <div className="row align-items-end mb-5 g-4">
          <div className="col-lg-6">
            <span className="section-subtitle">INDUSTRIES WE EMPOWER</span>
            <h2 className="section-title mb-0" style={{ maxWidth: "500px" }}>
              Built around the way your industry works.
            </h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="lead fs-6 text-muted mb-0">
              Every sector has different operational realities. We shape infrastructure, security and collaboration systems around yours.
            </p>
          </div>
        </div>

        {/* Industries Photo Cards Grid */}
        <div className="row g-4 industries-grid">
          {industries.map((ind) => (
            <div key={ind.id} className="col-12 col-sm-6 col-lg-3">
              <div className="industry-card">
                {/* Image top compartment */}
                <div className="industry-img-box">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} IT solutions`}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                    className="industry-card-img"
                    unoptimized
                  />
                </div>
                
                {/* Text bottom compartment */}
                <div className="industry-content">
                  <span className="industry-num">{ind.num}</span>
                  <h3 className="industry-title">{ind.name}</h3>
                  <p className="industry-desc">{ind.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
