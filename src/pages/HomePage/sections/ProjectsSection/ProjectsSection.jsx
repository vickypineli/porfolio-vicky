//src/pages/HomePage/sections/ProjectsSection/ProjectsSection.jsx

import styles from "./ProjectsSection.module.scss";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../../../data/projectsData";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { t } = useTranslation("homeProjects");

  // Tomamos solo los primeros 3 proyectos para la vista previa
  const Projects = projectsData.slice(0, 3);

  return (
    <section id="projects" className={styles.Section}>
      <div className={styles.Inner}>
        <h2 className={styles.Title}>{t("title")}</h2>
        <div className={styles.projectsGrid}>
          {Projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <a href="/projects" className={styles.viewAllLink}>            
          {t("viewAll")}
        </a>
      </div>

    </section>
  );
}   