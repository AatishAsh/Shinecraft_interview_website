import { useState } from "react";
import electricalBg from "../assets/electrical_bg.jpg";
import plumbingBg from "../assets/plumbing_bg.jpg";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
        <section id="services" className="services">
    <h2 className="section-title">Our Services</h2>
    <p className="section-subtitle">Professional 24/7 Emergency Services</p>

    <div className="services-grid"> 

        <div
        className={`service-card ${activeCard === 0 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${electricalBg})` }}
        onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
        >
        <div className="card-overlay">
            <div className="badge">24/7 Emergency</div>
            <h3>Electrical</h3>
            <ul>
            <li>Switch / Light Repair</li>
            <li>Wiring / Power Issues</li>
            <li>Electrical Emergency</li>
            </ul>
        </div>
        </div>

        <div
        className={`service-card ${activeCard === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${plumbingBg})` }}
        onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
        >
        <div className="card-overlay">
            <div className="badge">24/7 Emergency</div>
            <h3>Plumbing</h3>
            <ul>
            <li>Tap / Pipe Leakage</li>
            <li>Shower / Bathroom Issues</li>
            <li>Water Emergency</li>
            </ul>
        </div>
        </div>

    </div>
    </section>

  );
}

export default Services;
