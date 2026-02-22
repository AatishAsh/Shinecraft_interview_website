function AMCPlans() {
    return(
<section id="amc" className="amc">
  <h2 className="section-title">AMC Plans</h2>
  <p className="section-subtitle">
    Affordable Annual Maintenance Contracts for your home & office
  </p>

  <div className="amc-grid">

    {/* Basic Plan */}
    <div className="plan-card">
      <h3>Basic Plan</h3>
      <ul>
        <li>✔ Minor Issues Coverage</li>
        <li>✔ Limited Visits Per Year</li>
        <li>✔ Standard Support</li>
      </ul>
      <button className="plan-btn">Choose Plan</button>
    </div>

    {/* Premium Plan */}
    <div className="plan-card premium">
      <h3>Premium Plan</h3>
      <ul>
        <li>✔ Major + Minor Issues</li>
        <li>✔ Priority Support</li>
        <li>✔ Faster Response Time</li>
        <li>✔ Unlimited Visits</li>
      </ul>
      <button className="plan-btn">Choose Plan</button>
    </div>

  </div>
</section>
);
}
export default AMCPlans;