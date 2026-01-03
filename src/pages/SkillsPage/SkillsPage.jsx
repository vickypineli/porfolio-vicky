// src/pages/SkillsPage/SkillsPage.jsx
import { useTranslation } from "react-i18next";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./SkillsPage.module.scss";

export default function SkillsPage() {
  const { t } = useTranslation("skills");

  const skills = t("list", { returnObjects: true });

  return (
    <section className={styles.skills}>
      <div className={styles.inner}>
        <AnimatedGroup>
          <AnimatedItem as="h1">{t("title")}</AnimatedItem>
          <AnimatedItem as="p">{t("intro")}</AnimatedItem>
        </AnimatedGroup>

        <AnimatedGroup className={styles.grid}>
          {skills.map((skill) => (
            <AnimatedItem
              key={skill.name}
              className={styles.card}
              direction="left"
            >
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
 