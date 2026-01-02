// src/pages/AboutPage/AboutPage.jsx
import { useTranslation } from "react-i18next";
import styles from "./AboutPage.module.scss";
import womanKoder from "../../assets/images/womanKoder.png";

export default function AboutPage() {
  const { t } = useTranslation("about");

  const hobbies = t("hobbies_list", { returnObjects: true });

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        
        {/* TEXTO */}
        <div className={styles.text}>
          <h1 className={styles.title}>{t("title")}</h1>

          <p>{t("name")}</p>
          <p>{t("evolution")}</p>
          <p>{t("profile")}</p>
          <p>{t("current")}</p>

          <h2 className={styles.subtitle}>{t("hobbies_title")}</h2>

          <ul className={styles.hobbies}>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        {/* FOTO (placeholder) */}
        <div className={styles.photoWrapper}>
        <img
            src={womanKoder}
            alt="woman developer illustration"
            className={styles.photo}
        />
        </div>
      </div>
    </section>
  );
}