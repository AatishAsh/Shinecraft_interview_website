
function EmergencySupport() {
  return (
    <section className="emergency-section">
      <div className="emergency-card">

        {/* Pulsing alert icon */}
        <div className="emergency-icon-wrap">
          <span className="emergency-icon">⚡</span>
          <span className="emergency-pulse" />
        </div>

        <h2 className="emergency-title">Emergency Support</h2>
        <p className="emergency-subtitle">Electrical Fire or Water Emergency?</p>
        <p className="emergency-desc">
          Get immediate assistance from our rapid-response team. Our emergency
          service is available for critical situations that require urgent attention.
        </p>

        <button className="emergency-btn">
            Request Emergency Service
        </button>

      </div>
    </section>
  );
}

export default EmergencySupport;