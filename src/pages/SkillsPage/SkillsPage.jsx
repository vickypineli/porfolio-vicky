// src/pages/SkillsPage/SkillsPage.jsx
import { useTranslation, Trans } from "react-i18next";
import { skills } from "../../data/skills";
import { tools } from "../../data/tools";

import SkillCard from "../../components/SkillCard/SkillCard";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./SkillsPage.module.scss";

export default function SkillsPage() {
    const { t } = useTranslation("skills"); 
  return (
    <>
        <section className={styles.skills}>
            <div className={styles.inner}>
                <AnimatedGroup>
                    <AnimatedItem as="h2">{t("page_title")}</AnimatedItem>
                    <AnimatedItem className={styles.subtitle} as="p" >
                      <Trans
                            t={t}
                            i18nKey="skillset_intro"
                            components={{ strong: <strong /> }}
                        />
                    </AnimatedItem>
                </AnimatedGroup>
                
                <AnimatedGroup className={styles.grid}>
                    {skills.map((skill) => (
                        <AnimatedItem key={skill.id}>
                            <SkillCard 
                                icon={skill.icon} 
                                title={skill.title} 
                                description={t(`skills.${skill.id}`)} 
                            />
                        </AnimatedItem>
                    ))}
                </AnimatedGroup>
            </div>     
        </section>

        <section className={styles.tools}>
            <div className={styles.inner}>
                <AnimatedGroup>
                    <AnimatedItem as="h2">{t("subtitle")}</AnimatedItem>
                    <AnimatedItem className={styles.subtitle} as="p">
                    <Trans
                        t={t}
                        i18nKey="toolset_intro"
                        components={{ strong: <strong /> }}
                    />
                </AnimatedItem>  
                </AnimatedGroup>
                    
                <AnimatedGroup className={styles.grid}>
                    {tools.map((tool) => (
                        <AnimatedItem key={tool.id}>
                            <SkillCard 
                                icon={tool.icon} 
                                title={tool.title} 
                                description={t(`tools.${tool.id}`)} 
                            />
                        </AnimatedItem>
                    ))}
                </AnimatedGroup>
            </div> 
        </section>
    </>
  );
}
