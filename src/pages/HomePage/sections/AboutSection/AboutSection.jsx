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
        {/* Cascada REAL: todos hermanos directos */}
        <AnimatedGroup stagger={0.3} className={styles.text}>
          <AnimatedItem as="h2" className={styles.title}>
            About Me
          </AnimatedItem>

          <AnimatedItem as="p" className={styles.subtitle}>
            {t("title")}
          </AnimatedItem>

          <AnimatedItem as="p">
            {t("p1")}
          </AnimatedItem>

          <AnimatedItem as="p">
            {t("p2")}
          </AnimatedItem>

          <AnimatedItem as="p">
            {t("p3")}
          </AnimatedItem>

          <AnimatedItem as="div" className={styles.actions}>
            <div className={styles.ctasContainer}>
              <Link to="/skills" className={styles.ctaBtn}>
                {t("cta")}
              </Link>
              <DownloadCv label={t("cv")} /> 
            </div>
          </AnimatedItem>
        </AnimatedGroup>
      </div>
      <AnimatedGroup stagger={1.9}>
        <AnimatedItem as="div" >
          <hr className={styles.lineSeparator}/>
        </AnimatedItem>
      </AnimatedGroup>
    </section>
    
  );
}
