import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link to={`/projects/${project.slug}`} className="project-link">
        Ver proyecto →
      </Link>
    </article>
  );
}
