//src/pages/HomePage/sections/ContactSection/ContactSection.jsx


import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const { t } = useTranslation("homeContact");

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!window.VANTA?.GLOBE || !window.THREE) return;

    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: window.THREE,
      // Controles de la animacion
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
      //Tamaño de la animacion
        minHeight: 500.00,
        minWidth: 500.00,
      //tamaño y escala del globo
        scale: 1.00,
        scaleMobile: 1.00,
        size:0.90,
      //colores
        color2: 0xe9e5eb,
        color: 0xff3f81,
        backgroundAlpha: 0 ,
      });
    }

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

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
