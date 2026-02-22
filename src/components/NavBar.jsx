import logo_light from "../assets/light_main_logo.png";
import logo_dark from "../assets/main_logo.png";
import sunIcon from "../assets/sunIcon.png";
import moonIcon from "../assets/moonIcon.png";

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { label: "Home",         href: "#home"         },
  { label: "Services",     href: "#services"      },
  { label: "AMC Plans",    href: "#amc"           },
  { label: "How It Works", href: "#how-it-works"  },
  { label: "Store",        href: "#store"         },
  { label: "Contact",      href: "#final-cta"     },
];

function Navbar({ toggleTheme, theme }) {
  const logo       = theme === "dark" ? logo_dark  : logo_light;
  const toggleIcon = theme === "dark" ? sunIcon     : moonIcon;

  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Add shadow when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

 const handleLinkClick = (href) => {
  setActiveLink(href);
  setMenuOpen(false);

  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};


  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* Logo */}
      <a href="#home" className="navbar-logo" onClick={() => handleLinkClick("#home")}>
        <img src={logo} alt="Company Logo" />
      </a>

      {/* Desktop links */}
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`navbar-link ${activeLink === link.href ? "navbar-link--active" : ""}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: theme toggle + hamburger */}
      <div className="navbar-actions">

        {/* Theme toggle */}
        <button className="navbar-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          <img src={toggleIcon} alt="Toggle Theme" />
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`navbar-hamburger ${menuOpen ? "navbar-hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar-mobile-menu ${menuOpen ? "navbar-mobile-menu--open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-mobile-link ${activeLink === link.href ? "navbar-mobile-link--active" : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
