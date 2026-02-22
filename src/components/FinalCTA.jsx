
function FinalCTA() {
  return (
    <section  id="final-cta" className="cta-section">

      {/* Decorative blobs */}
      <div className="cta-blob cta-blob--left"  aria-hidden="true" />
      <div className="cta-blob cta-blob--right" aria-hidden="true" />

      <div className="cta-content">
        <p className="cta-eyebrow">Annual Maintenance Contracts</p>
        <h2 className="cta-headline">Get Hassle-Free Maintenance Today</h2>
        <p className="cta-subtext">
          Professional electrical and plumbing support — reliable, affordable,
          and just a click away.
        </p>

        <div className="cta-buttons">
          <button className="cta-btn cta-btn--primary">Request Service</button>
          <button className="cta-btn cta-btn--secondary">Buy AMC</button>
        </div>
      </div>

    </section>
  );
}

export default FinalCTA;