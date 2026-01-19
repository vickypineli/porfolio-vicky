//src/pages/HomePage/sections/ContactSection/ContactSection.jsx


import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { useThemeColors } from "../../../../hooks/useThemeColors"; // Importa tu hook
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const { t } = useTranslation("homeContact");
  const theme = useThemeColors(); // Obtenemos 'light' o 'dark'

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

useEffect(() => {
    if (!window.VANTA?.GLOBE || !window.THREE) return;

    // Definimos los colores según el tema
    // Modo Light: Colores oscuros para que contrasten
    // Modo Dark: Tus colores originales brillantes
    const isLight = theme === "light";
    
    const vantaColors = {
      color2: isLight ? 0x585858 : 0xff3f81,    // Líneas principales
      color: isLight ? 0xff3f81 : 0xe9e5eb,   // Puntos/Nodos
      //size: isLight ? 0.70 : 0.90,             // Opcional: un poco más pequeño en light
      size: 0.90,
    };

    // Si ya existe un efecto, lo destruimos antes de crear el nuevo
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
    }

    vantaEffect.current = window.VANTA.GLOBE({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 500.0,
      minWidth: 500.0,
      scale: 1.0,
      scaleMobile: 1.0,
      size: vantaColors.size,
      color: vantaColors.color,
      color2: vantaColors.color2,
      backgroundAlpha: 0, // Mantenemos transparencia para ver tu degradado CSS
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
    // El efecto se reiniciará cada vez que 'theme' cambie
  }, [theme]);

  return (
    <section
      ref={vantaRef}
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.Inner}>
        <div className={styles.Content}>
          <p className={styles.contactSubtitle0}>
            {t("subtitle0")}
          </p>
          <h2 id="contact-title" className={styles.contactTitle}>
            {t("title")}
          </h2>
          <div className={styles.contactSubtitle}>
            <Trans
              t={t}
              i18nKey="subtitle"
              components={{ span: <span className={styles.contactSpan} /> }}
            />
          </div>
          <Link to="/contact" className={styles.contactButton}>
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
