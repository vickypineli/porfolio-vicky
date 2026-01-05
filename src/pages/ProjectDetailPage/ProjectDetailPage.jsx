// src/pages/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { useTranslation } from "react-i18next";

import styles from "./ProjectDetailPage.module.scss";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation("projects");

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className={styles.projectDetail}>
        <h1>Proyecto no encontrado</h1>
        <Link to="/projects">← Volver a proyectos</Link>
      </section>
    );
  }

  return (
    <section className={styles.projectDetail}>
      <h1>{project.title}</h1>
      <p>{t(`projects.${project.id}.description`)}</p>

      <h3>Tecnologías</h3>
      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link to="/projects">← Volver</Link>
    </section>
  );
}

