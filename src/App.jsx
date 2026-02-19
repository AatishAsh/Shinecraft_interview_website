import { useState, useEffect } from "react";
import "./styles/theme.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AMCPlans from "./components/AMCPlans";
import Footer from "./components/Footer";

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
      <Services />
      <AMCPlans />
      <Footer />
    </>
  );
}

export default App;
