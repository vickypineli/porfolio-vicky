// src/pages/HomePage/sections/AboutSection/AboutSection.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DownloadCv from "../../../../components/DownloadCv/DownloadCv";
import AnimatedGroup from "../../../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../../../components/Animation/AnimatedItem";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const { t } = useTranslation("homeAbout");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimatedGroup className={styles.text} stagger={0.85}>
          <div className={styles.titleContainer}>
            <span className={styles.label}>About Me</span>
              <AnimatedItem as="h2">
                {t("title")}
              </AnimatedItem>
          </div>
          <div className={styles.text}>
              <AnimatedItem as="p">
                {t("p1")}
              </AnimatedItem>

              <AnimatedItem as="p">
                {t("p2")}
              </AnimatedItem>
          </div>
          <div className={styles.textActions}>
            <AnimatedItem as="p">
              {t("p3")}
            </AnimatedItem>

            {/* 2. Corrección de Semántica: Un div para los botones está bien, 
              pero asegúrate de que el 'cta' herede los estilos correctamente.
            */}
            <AnimatedItem as="div" className={styles.actions}>
              <div className={styles.ctasContainer}>
                <Link to="/about" className={styles.cta}>
                  {t("cta")}
                </Link>
                <DownloadCv label={t("cv")} />
              </div>
            </AnimatedItem>
          </div>


        </AnimatedGroup>
{/* 
        <div className={styles.visual}>
          <div className={styles.visualInner}></div>
        </div> */}
      </div>
    </section>
  );
}