import { useState, useEffect } from "react";
import "./styles/theme.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import EmergencySupport from "./components/Emergencysupport";
import Services from "./components/Services";
import AMCPlans from "./components/AMCPlans";
import HowItWorks from "./components/HowItworks";
import Footer from "./components/Footer";
import Store from "./components/Store";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />


      <Hero />
      <EmergencySupport />
      <Services />
      <AMCPlans />
      <HowItWorks theme={theme} />
      <Store/>
      <Footer />
    </>
  );
}

export default App;
