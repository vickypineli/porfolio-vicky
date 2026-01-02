// src/pages/ProjectsPage/ProjectsPage.jsx
import { projects } from '../../data/projects';
import { useTranslation } from "react-i18next";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.scss';

export default function ProjectsPage() {
  const { t } = useTranslation("projects");
  return (
    <section className={styles.page}>
      <h2 className={styles.title}>
        {t("title")}
        </h2>
        <p>{t("description")}
          <br />
        </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

