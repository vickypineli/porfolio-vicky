// src/pages/ProjectsPage/ProjectsPage.jsx
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.scss';

export default function ProjectsPage() {
  return (
    <section className={styles.page}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

