// src/pages/AboutPage/AboutPage.jsx

import { useTranslation } from "react-i18next";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./AboutPage.module.scss";
import womanKoder from "../../assets/images/womanKoder.png";

export default function AboutPage() {
  const { t } = useTranslation("about");
  const hobbies = t("hobbies_list", { returnObjects: true });

  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        
        {/* TEXTO */}
        <AnimatedGroup className={styles.content}>
          {[
            <AnimatedItem as="h1">{t("title")}</AnimatedItem>,
            <AnimatedItem>{t("name")}</AnimatedItem>,
            <AnimatedItem>{t("evolution")}</AnimatedItem>,
            <AnimatedItem>{t("profile")}</AnimatedItem>,
            <AnimatedItem>{t("current")}</AnimatedItem>,
            <AnimatedItem as="h3">{t("hobbies_title")}</AnimatedItem>,
            <AnimatedItem as="ul">
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </AnimatedItem>,
          ].map((item, i) => (
            <div key={i} style={{ "--i": i }}>
              {item}
            </div>
          ))}
        </AnimatedGroup>

        {/* IMAGEN */}
        <AnimatedGroup className={styles.imageWrapper}>
          <div style={{ "--i": 0 }}>
            <AnimatedItem direction="right">
              <img
                src={womanKoder}
                alt="Ilustración programadora"
                loading="lazy"
              />
            </AnimatedItem>
          </div>
        </AnimatedGroup>

      </div>
    </section>
  );
}
