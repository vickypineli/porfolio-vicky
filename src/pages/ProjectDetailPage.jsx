// src/pages/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/pages/ProjectDetail.scss";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <h1>Proyecto no encontrado</h1>
        <Link to="/projects">← Volver a proyectos</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <header className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      <div className="project-meta">
        <h3>Tecnologías</h3>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-actions">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver código
          </a>
        )}

        <Link to="/projects" className="btn secondary">
          ← Volver
        </Link>
      </div>
    </section>
  );
}
