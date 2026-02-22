

// Light theme images
import raiseRequestLight from "../assets/dark_request.png";
import technicianLight   from "../assets/dark_matched.png";
import resolvedLight     from "../assets/dark_solved.png";

// Dark theme images
import raiseRequestDark from "../assets/light_request.png";
import technicianDark   from "../assets/light_matched.png";
import resolvedDark     from "../assets/light_resolved.png";

const steps = [
  {
    num: "01",
    title: "Raise a Request",
    desc: "Select your issue type, describe the problem, and choose a convenient time. Your service request is instantly logged and tracked in real-time.",
    imgLight: raiseRequestLight,
    imgDark:  raiseRequestDark,
    alt: "Raise a request illustration",
    note: null,
  },
  {
    num: "02",
    title: "Get Matched with a Technician",
    desc: "We assign a qualified technician based on availability and expertise. You'll receive confirmation along with technician details and expected arrival time.",
    imgLight: technicianLight,
    imgDark:  technicianDark,
    alt: "Technician match illustration",
    note: "⭐ Premium members enjoy faster response.",
  },
  {
    num: "03",
    title: "Issue Resolved",
    desc: "Our technician visits your location and resolves the issue efficiently. Track the status live and rate your service once completed.",
    imgLight: resolvedLight,
    imgDark:  resolvedDark,
    alt: "Issue resolved illustration",
    note: null,
  },
];

function HowItWorks({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="how-it-works" className="hiw-section">

      <div className="hiw-title-wrap">
        <h2 className="hiw-section-title">How It Works</h2>
        <span className="hiw-title-underline" />
      </div>

      <div className="hiw-steps">
        {steps.map((step, index) => (
          <div className="hiw-step-wrapper" key={step.num}>
            {/* even index → text left + image right | odd index → image left + text right */}
            <div className={`hiw-step ${index % 2 !== 0 ? "hiw-step--reverse" : ""}`}>

              <div className="hiw-step-text">
                <div className="hiw-step-num">{step.num}</div>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
                {step.note && (
                <div className="hiw-premium-note-wrap">
                  <span className="hiw-premium-note">{step.note}</span>
                </div>
              )}
              </div>

              <div className="hiw-step-icon">
                <img
                  src={isDark ? step.imgDark : step.imgLight}
                  alt={step.alt}
                />
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;