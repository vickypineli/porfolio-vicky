// src/pages/ProjectsPage/ProjectsPage.jsx
import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projectsData";

import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  const { t } = useTranslation("projects");

return (
    <section className={styles.projects}>
      <div className={styles.inner}>
        <AnimatedItem as="h2">{t("page_title")}</AnimatedItem>

        <AnimatedGroup className={styles.grid}>
          {projectsData.map((project) => (
            <AnimatedItem key={project.id}>
              <ProjectCard
                title={project.title}
                description={t(`projects.${project.id}.description`)}
                image={project.image}
                tech={project.tech}
                slug={project.slug}
              />
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

