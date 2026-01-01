//src/components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/layout/Header.scss";

export default function Header() {
  const { i18n, t } = useTranslation("header");
  const [open, setOpen] = useState(false);

  const changeLang = (lng) => i18n.changeLanguage(lng);
  const closeMenu = () => setOpen(false);

    const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="header-logo">
          <a href="#home">
            <span className="spanM">M</span>
            <span className="spanv">V</span>
            <span className="spanP">P</span>
          </a>
        </div>

        {/* NAV ESCRITORIO */}
        {/* <nav className={`desktop-nav`}>
          <a href="#home">{t("home")}</a>
          <a href="#about">{t("about")}</a>
          <a href="#projects">{t("projects")}</a>
          <a href="#skills">{t("skills")}</a>
          <a href="#contact">{t("contact")}</a>
        </nav> */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={navLinkClass}>{t("home")}</NavLink>
          <NavLink to="/about" className={navLinkClass}>{t("about")}</NavLink>
          <NavLink to="/projects" className={navLinkClass}>{t("projects")}</NavLink>
          <NavLink to="/skills" className={navLinkClass}>{t("skills")}</NavLink>
          <NavLink to="/contact" className={navLinkClass}>{t("contact")}</NavLink>
        </nav>

        {/* IDIOMAS + THEME */}
        <div className="lang-switcher">
          <button onClick={() => changeLang("es")}>ES</button>
          <button onClick={() => changeLang("en")}>EN</button>
          <button onClick={() => changeLang("eu")}>EU</button>
          <ThemeToggle />
        </div>

        {/* HAMBURGUESA */}
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MENU MOVIL */}
      {/* <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>{t("home")}</a>
        <a href="#about" onClick={() => setOpen(false)}>{t("about")}</a>
        <a href="#projects" onClick={() => setOpen(false)}>{t("projects")}</a>
        <a href="#skills" onClick={() => setOpen(false)}>{t("skills")}</a>
        <a href="#contact" onClick={() => setOpen(false)}>{t("contact")}</a>
      </nav> */}
      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
          {t("home")}
        </NavLink>
        <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
          {t("about")}
        </NavLink>
        <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
          {t("projects")}
        </NavLink>
        <NavLink to="/skills" className={navLinkClass} onClick={closeMenu}>
          {t("skills")}
        </NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
          {t("contact")}
        </NavLink>
       {/* SEPARADOR */}
        <hr />
      
      {/* THEME MOVIL */}
        <ThemeToggle />
        </nav>
    </header>
  );
}