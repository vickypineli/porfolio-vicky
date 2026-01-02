import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.techList}>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link
        to={`/projects/${project.slug}`}
        className={styles.link}
      >
        Ver proyecto →
      </Link>
    </article>
  );
}
