//src/components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

export default function Header() {
  const { i18n, t } = useTranslation("header");
  const [open, setOpen] = useState(false);

  const changeLang = (lng) => i18n.changeLanguage(lng);
  const closeMenu = () => setOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* LOGO */}
        <div className={styles.headerLogo}>
          <a href="#home" className={styles.logo} aria-label="M.V. Pinero">
            <span className={styles.logoShort}>MVP</span>

            <span className={styles.logoFull}>
              {["M", ".", "V", ".", "P", "i", "n", "e", "r", "o"].map((char, i) => (
                <span
                  key={i}
                  className={styles.char}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </a>
        </div>
        {/* NAV ESCRITORIO */}
        <nav className={styles.desktopNav}>
          <NavLink to="/" end className={navLinkClass}>{t("home")}</NavLink>
          <NavLink to="/about" className={navLinkClass}>{t("about")}</NavLink>
          <NavLink to="/projects" className={navLinkClass}>{t("projects")}</NavLink>
          <NavLink to="/skills" className={navLinkClass}>{t("skills")}</NavLink>
          <NavLink to="/contact" className={navLinkClass}>{t("contact")}</NavLink>
        </nav>

        {/* IDIOMAS + THEME */}
        <div className={styles.langSwitcher}>
          <button onClick={() => changeLang("es")}>ES</button>
          <button onClick={() => changeLang("en")}>EN</button>
          <button onClick={() => changeLang("eu")}>EU</button>
          <ThemeToggle />
        </div>

        {/* HAMBURGUESA */}
        <button
          className={`${styles.burger} ${open ? styles.open : ""}`}
          aria-label="Abrir menú"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MENU MOVIL */}
      <nav
        className={`${styles.mobileNav} ${open ? styles.open : ""}`}
        onClick={closeMenu}
      >
        <NavLink to="/" end className={navLinkClass}>{t("home")}</NavLink>
        <NavLink to="/about" className={navLinkClass}>{t("about")}</NavLink>
        <NavLink to="/projects" className={navLinkClass}>{t("projects")}</NavLink>
        <NavLink to="/skills" className={navLinkClass}>{t("skills")}</NavLink>
        <NavLink to="/contact" className={navLinkClass}>{t("contact")}</NavLink>

        <hr />

        <div className={styles.langSwitcherNav}>
          <button onClick={() => changeLang("es")}>ES</button>
          <button onClick={() => changeLang("en")}>EN</button>
          <button onClick={() => changeLang("eu")}>EU</button>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
