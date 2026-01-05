import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  slug,
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className={styles.card}
      aria-label={`Ver detalles del proyecto ${title}`}
    >
      <img src={image} alt={title} loading="lazy" />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* CTA */}
        <span className={styles.cta}>→ Ver proyecto </span>
      </div>
    </Link>
  );
}


