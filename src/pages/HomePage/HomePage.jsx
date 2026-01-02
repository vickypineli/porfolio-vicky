// src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./HomePage.module.scss";

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
      <section
        className="home"
        ref={vantaRef}
        aria-labelledby="home-heading"
        role="region"
      >
        <div className="container home-inner">
          <div className="home-content" aria-hidden={false}>
            <h1 id="home-heading" className="home-title">
              {t("welcome", { name: "Vicky" })}
            </h1>

            <p className="home-role">{t("subtitle")}</p>

            <p className="home-phrase">{t("phrase")}</p>

            <div className="home-actions">
              {/* Link a sección de proyectos (ancla o ruta) */}
              <a href="#projects" className="home-cta">
                {t("cta")}
              </a>
              {/* Alternativa con react-router */}
              {/* <Link to="/projects" className="home-cta">{t('cta')}</Link> */}
            </div>
          </div>

          {/* <aside className="home-photo-wrapper" aria-hidden="false">
            <img
              id="home-photo"
              src="/assets/profile-bw.jpg" // coloca tu foto en /public/assets/
              alt={t("altPhoto")}
              className="home-photo"
              width="600"
              height="800"
              loading="lazy"
            />
          </aside> */}
        </div>
      </section>
    </main>
  );
}
