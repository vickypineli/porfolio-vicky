// src/components/ProjectCard/ProjectCard.jsx

import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  title,
  category,
  description,
  image,
  tech,
  slug,
}) {

  const defaultImage = "/assets/images/nophoto.png";
  const imageToShow = image ? image : defaultImage;
  return (
    <Link
      to={`/projects/${slug}`}
      className={styles.card}
      aria-label={`Ver detalles del proyecto ${title}`}
    >
      <div className={styles.media}>
        <img src={imageToShow} className={styles.image} alt={title ? title : "Sin título"} loading="lazy" />

        <span className={styles.category}>{category}</span>

        <div className={styles.overlay}>
          <h3 className={styles.title}>{title}</h3>

          <p className={styles.description}>{description}</p>

          <ul className={styles.techList}>
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
            <div className={styles.ctaContainer}>
              <span className={styles.cta}>← Ver proyecto</span>
            </div>

        </div>
      </div>
    </Link>
  );
}



