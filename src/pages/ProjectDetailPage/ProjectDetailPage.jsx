// src/pages/ProjectDetailPage/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projectsData";
import { useBreadcrumbsFromRoute } from "../../hooks/useBreadcrumbsFromRoute";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";

import styles from "./ProjectDetailPage.module.scss";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation("projects");
  const breadcrumbs = useBreadcrumbsFromRoute();

  const project = projectsData.find((p) => p.slug === slug);
console.log(project.image);
  if (!project) {
    return (
      <section className={styles.page}>
        <h1>{t("not_found.title")}</h1>
        <Link to="/projects" className={styles.back}>
          ← {t("not_found.back")}
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>

        <Breadcrumbs items={breadcrumbs} />

        <AnimatedGroup>
          <AnimatedItem as="h1">{project.title}</AnimatedItem>

          <AnimatedItem as="div" className={styles.description}>
            {t(`projects.${project.id}.description`)}
          </AnimatedItem>
        </AnimatedGroup>

        {/* Imagen */}
        {project.image && (
          <AnimatedItem className={styles.imageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                // Fallback si la imagen falla
                e.target.src = "https://via.placeholder.com/800x450?text=No+Image";
              }}             
            />
          </AnimatedItem>
        )}

        {/* Tecnologías */}
        <AnimatedGroup>
          <AnimatedItem as="h3">{t("technologies")}</AnimatedItem>
          <ul className={styles.techList}>
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </AnimatedGroup>

        {/* Acciones */}
        <AnimatedGroup className={styles.actions}>
          <div className={styles.buttonsWrapper}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                {t("buttons.demo")}
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                {t("buttons.code")}
              </a>
            )}
          </div>
          <div className={styles.backWrapper}>
            <Link to="/projects" className={styles.back}>
              ← {t("buttons.back")}
            </Link> 
          </div>

        </AnimatedGroup>
      </div>
    </section>
  );
}


