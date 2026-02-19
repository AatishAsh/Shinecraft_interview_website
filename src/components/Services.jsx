import electricalBg from "../assets/electrical_bg.jpg";
import plumbingBg from "../assets/plumbing_bg.jpg";

function Services() {
  return (
        <section className="services">
    <h2 className="section-title">Our Services</h2>
    <p className="section-subtitle">Professional 24/7 Emergency Services</p>

    <div className="services-grid"> 

        <div
        className="service-card"
        style={{ backgroundImage: `url(${electricalBg})` }}
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
        className="service-card"
        style={{ backgroundImage: `url(${plumbingBg})` }}
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
