// src/pages/ProjectsPage.jsx
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/Projects.scss";

export default function ProjectsPage() {
  return (
    <section className="projects-page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}


