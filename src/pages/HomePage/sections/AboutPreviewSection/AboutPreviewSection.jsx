//src/pages/HomePage/sections/ProjectsPreviewSection/ProjectsPreviewSection.jsx

import { useTranslation } from "react-i18next";
import styles from "./AboutPreviewSection.module.scss";

export default function AboutPreviewSection() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.aboutPreviewSection} id="about">
      <div className={styles.content}>
        <h2 className={styles.title}>{t("aboutTitle")}</h2>
        <p className={styles.description}>{t("aboutDescription")}</p>
      </div>
    </section>
  );
}