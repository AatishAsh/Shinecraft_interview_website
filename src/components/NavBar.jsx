import logo_light from "../assets/light_main_logo.png";
import logo_dark from "../assets/main_logo.png";
import sunIcon from "../assets/sunIcon.png";
import moonIcon from "../assets/moonIcon.png";

function Navbar({ toggleTheme, theme }) {
  const logo = theme === "dark" ? logo_dark : logo_light;
  const toggleIcon = theme === "dark" ? sunIcon : moonIcon;

  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" style={logoStyle} />

      <button onClick={toggleTheme} style={buttonStyle}>
        <img src={toggleIcon} alt="Toggle Theme" style={iconStyle} />
      </button>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
};

const logoStyle = {
  width: "200px",
};

const buttonStyle = {
  backgroundColor: "var(--toggle-bg)",
  borderRadius: "50px",
  padding: "0.6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const iconStyle = {
  width: "20px",
  height: "20px",
};


export default Navbar;