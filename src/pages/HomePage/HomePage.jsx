// src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";

export default function Home() {
  const { t } = useTranslation("home");

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Inicializar Vanta usando los scripts del index.html
  useEffect(() => {
    // Importante: esperar a que el script global cargue
    if (!window.VANTA || !window.VANTA.BIRDS) {
      console.warn("Vanta no cargó desde CDN todavía");
      return;
    }
    if (!vantaEffect.current && vantaRef.current) {
      try {
        vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            THREE: window.THREE, // usamos el THREE del CDN
            backgroundAlpha: 0,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0xff00d1, // colores personalizables
            color2: 0x460039,
            separation: 20,
            cohesion: 20,
            quantity: 5,
            size: 2.00,
            speed: 2.5,
            showBackground: false,
            colorMode: "lerpGradient"
        });
      } catch (err) {
        console.error("Error iniciando Vanta:", err);
      }
    }
    // Destruir la instancia para evitar fugas cuando cambias de ruta
    return () => {
      try {
        vantaEffect.current?.destroy();
      } catch (err) {
        console.error("Error destruyendo Vanta:", err);
      }
      vantaEffect.current = null;
    };
  }, []);


  return (
    <main>
      <section className={styles.home} ref={vantaRef} aria-labelledby="home-heading">
        <div className={styles.homeInner}>
          <div className={styles.homeContent}>
            <h1 id="home-heading" className={styles.homeTitle}>
              {t("welcome", { name: "Vicky" })}
            </h1>

            <p className={styles.homeRole}>{t("subtitle")}</p>
            <p className={styles.homePhrase}>{t("phrase")}</p>

            <div className={styles.homeActions}>
              <a href="#projects" className={styles.homeCta}>
                {t("cta")}
              </a>
            </div>
          </div>

          {/* Foto opcional */}
          {/* <aside className={styles.homePhotoWrapper}>
            <img src="/assets/profile-bw.jpg" alt={t("altPhoto")} className={styles.homePhoto} />
          </aside> */}
        </div>
      </section>
    </main>
  );
}
