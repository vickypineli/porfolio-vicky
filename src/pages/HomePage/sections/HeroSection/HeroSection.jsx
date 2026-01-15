//src/pages/HomePage/sections/HeroSection/HeroSection.jsx

import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useTypewriter } from "../../../../hooks/useTypewriter";
import styles from "./HeroSection.module.scss";


export default function HeroSection() {
  const { t } = useTranslation("home");

  // --- 1. DECLARACIÓN DE REFS (Primero que nada) ---
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // --- 2. LLAMADA A HOOKS DE MÁQUINA DE ESCRIBIR ---
  // Título: "Hola, soy Vicky"
  const { output: typedTitle, isDone: titleFinished } = useTypewriter(t("welcome"), 70);

  // Subtítulo: "Desarrolladora Frontend" (espera a que el título termine)
  const { output: typedSubtitle } = useTypewriter(
    titleFinished ? t("subtitle") : "", 
    50
  );

  // --- 3. EFECTO PARA VANTA.JS ---
  useEffect(() => {
    // Verificamos que los scripts del CDN estén disponibles
    if (!window.VANTA || !window.VANTA.BIRDS) {
      console.warn("Vanta no cargó desde CDN todavía");
      return;
    }
    
    // Solo inicializamos si no existe ya el efecto y la ref está lista
    if (!vantaEffect.current && vantaRef.current) {
      try {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          THREE: window.THREE, // Usa el THREE global del CDN
          backgroundAlpha: 0,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color2: 0xff3f81,
          color1: 0xff8cb3, //0x460039,
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

    // Limpieza al desmontar el componente
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []); // Se ejecuta una sola vez al montar

  return (
      <section className={styles.section} ref={vantaRef} aria-labelledby="home-heading">
        <div className={styles.homeInner}>
          <div className={styles.homeContent}>
            <div className={styles.homeText}>
              <h1 id="home-heading" className={styles.homeTitle}>
                {typedTitle}
              </h1>
              <p className={styles.homeSubtitle}>
                {typedSubtitle}
              </p>
              <div className={styles.homeSubtitle1}>
                < Trans 
                  t={t} 
                  i18nKey="phrase" 
                  components={{ strong: <strong className={styles.homePhrase} /> }} 
                />  
              </div>

            </div>

            <div className={styles.lottieContainer}>
               <DotLottieReact
                  src="src/assets/animation/scroll.json"
                  loop
                  autoplay
                  className={styles.lottieIcon}
                />           
            </div>
          </div>
        </div>
      </section>
  
  );
}