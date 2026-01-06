// src/pages/ProjectDetailPage/ProjectDetailPage.jsx

import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projectsData";

import AnimatedItem from "../../components/Animation/AnimatedItem";
import styles from "./ProjectDetailPage.module.scss";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation("projects");

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className={styles.page}>
        <h1>Proyecto no encontrado</h1>
        <Link to="/projects">← Volver a proyectos</Link>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <AnimatedItem as="header" className={styles.header}>
        <h1>{project.title}</h1>
        <p>{t(`projects.${project.id}.description`)}</p>

        <div className={styles.actions}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Ver demo
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              GitHub
            </a>
          )}

          <Link to="/projects" className={styles.back}>
            ← Volver
          </Link>
        </div>
      </AnimatedItem>

      <AnimatedItem>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
      </AnimatedItem>

      <AnimatedItem>
        <h3>Tecnologías</h3>
        <ul className={styles.techList}>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </AnimatedItem>
    </section>
  );
}

