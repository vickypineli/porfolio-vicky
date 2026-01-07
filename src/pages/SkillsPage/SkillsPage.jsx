// src/pages/SkillsPage/SkillsPage.jsx
import { useTranslation, Trans } from "react-i18next";
import { skillsData } from "../../data/skillsData";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SkillCard from "../../components/SkillCard/SkillCard";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./SkillsPage.module.scss";

export default function SkillsPage() {
  const { t } = useTranslation("skills");

  return (
    <section className={styles.skills}>
      <div className={styles.inner}>
        <Breadcrumbs />

        {skillsData.map((section) => (
          <section key={section.section} className={styles.block}>
            <AnimatedGroup>
              <AnimatedItem as="h2">
                {t(section.titleKey)}
              </AnimatedItem>

              <AnimatedItem as="p">
                <Trans
                  t={t}
                  i18nKey={section.introKey}
                  components={{ strong: <strong /> }}
                />
              </AnimatedItem>
            </AnimatedGroup>

            <AnimatedGroup className={styles.grid}>
              {section.items.map((item) => (
                <AnimatedItem key={item.id}>
                  <SkillCard
                    icon={item.icon}
                    title={item.title}
                    description={t(`${section.section}.${item.id}`)}
                  />
                </AnimatedItem>
              ))}
            </AnimatedGroup>
          </section>
        ))}
      </div>
    </section>
  );
}
