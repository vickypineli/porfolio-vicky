//src/pages/HomePage/sections/ContactPreviewSection/ContactPreviewSection.jsx

import { useTranslation } from "react-i18next"; 
import styles from "./ContactPreviewSection.module.scss";       
export default function ContactPreviewSection() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.contactPreviewSection}>
      <h2 className={styles.contactTitle}>{t("contactTitle")}</h2>
      <p className={styles.contactSubtitle}>{t("contactSubtitle")}</p>
      <a href="mailto:          " className={styles.contactButton}>           
        {t("contactButton")}
      </a>        
    </section>
  );
}   