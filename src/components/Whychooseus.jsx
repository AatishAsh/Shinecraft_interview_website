
import verifiedIcon  from "../assets/icons/verified.png";
import responseIcon  from "../assets/icons/fast-response.png";
import partsIcon     from "../assets/icons/genuine.png";
import amcIcon       from "../assets/icons/affordable.png";

import verifiedDark  from "../assets/icons/dark_verified.png";
import responseDark  from "../assets/icons/dark_fast-response.png";
import partsDark     from "../assets/icons/dark_genuine.png";
import amcDark       from "../assets/icons/dark_affordable.png";


const reasons = [
  { iconLight: verifiedIcon, iconDark: verifiedDark,  alt: "Verified Technicians", heading: "Verified Technicians", sub: "Skilled, certified, and background-verified professionals you can trust." },
  { iconLight: responseIcon, iconDark: responseDark,  alt: "Fast Response",         heading: "Fast Response",         sub: "Quick turnaround time with priority handling for urgent requests."  },
  { iconLight: partsIcon,    iconDark: partsDark,     alt: "Genuine Parts",         heading: "Genuine Parts",         sub: "High-quality, reliable components for long-lasting performance."    },
  { iconLight: amcIcon,      iconDark: amcDark,       alt: "Affordable AMC",        heading: "Affordable AMC",        sub: "Flexible and cost-effective plans designed for every home."         },
];

function WhyChooseUs({ theme }) {
  const isDark = theme === "dark";

  return (
    <section  id="why-choose-us" className="wcu-section">

      <div className="wcu-title-wrap">
        <h2 className="wcu-section-title">Why Choose Us</h2>
        <span className="wcu-title-underline" />
        <p className="wcu-section-subtitle">
          Trusted by homeowners across the city for reliable AMC services
        </p>
      </div>
      <div className="wcu-grid">
        {reasons.map((item) => (
          <div className="wcu-card" key={item.heading}>
            <div className="wcu-icon-wrap">
              <img src={isDark ? item.iconDark : item.iconLight} alt={item.alt} />
            </div>
            <h3 className="wcu-heading">{item.heading}</h3>
            <p className="wcu-sub">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;