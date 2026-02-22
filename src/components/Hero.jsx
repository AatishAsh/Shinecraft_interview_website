import worker from "../assets/worker.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-wrapper">
        
        {/* Left Side - Text */}
        <div className="hero-left">
          <h1 className="hero-title">
            Electrical & Plumbing Maintenance for Home & Business
          </h1>

          <p className="hero-subtext">
            24/7 Support • Certified Technicians • Fast Service
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Request Service</button>
            <button
              className="secondary-btn"
              onClick={() => {
                document.getElementById("amc").scrollIntoView({ behavior: "smooth" });
                }}>
              View AMC Plans
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-right">
          <img src={worker} alt="Maintenance Worker" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
