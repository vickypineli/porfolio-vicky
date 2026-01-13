//src/pages/HomePage/sections/ProjectsPreviewSection/ProjectsPreviewSection.jsx

import styles from "./ProjectsPreviewSection.module.scss";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../../../data/projectsData";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

export default function ProjectsPreviewSection() {
  const { t } = useTranslation("home");

  // Tomamos solo los primeros 3 proyectos para la vista previa
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>{t("projectsSection.title")}</h2>
      <div className={styles.projectsGrid}>
        {previewProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a href="/projects" className={styles.viewAllLink}>            
        {t("projectsSection.viewAll")}
      </a>
    </section>
  );
}   