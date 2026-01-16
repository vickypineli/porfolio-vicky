// src/pages/AboutPage/AboutPage.jsx
// src/pages/AboutPage/AboutPage.jsx
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./AboutPage.module.scss";
import womanKoder from "./../../../public/assets/images/womanKoder.png";

export default function AboutPage() {
  const { t } = useTranslation("about");
  const hobbies = t("hobbies_list", { returnObjects: true });

  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <Breadcrumbs />

        <div className={styles.layout}>
          {/* TEXTO */}
          <AnimatedGroup className={styles.text}>
            <AnimatedItem as="h1">{t("title")}</AnimatedItem>
            <AnimatedItem>{t("name")}</AnimatedItem>
            <AnimatedItem>{t("evolution")}</AnimatedItem>
            <AnimatedItem>{t("profile")}</AnimatedItem>
            <AnimatedItem>{t("current")}</AnimatedItem>

            <AnimatedItem as="h3">{t("hobbies_title")}</AnimatedItem>
            <AnimatedItem as="ul" className={styles.hobbies}>
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </AnimatedItem>
          </AnimatedGroup>

          {/* IMAGEN */}
          <AnimatedGroup className={styles.image}>
            <AnimatedItem direction="right">
              <img
                src={womanKoder}
                alt={t("image_alt")}
                loading="lazy"
              />
            </AnimatedItem>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
