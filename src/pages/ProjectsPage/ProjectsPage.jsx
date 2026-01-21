// src/pages/ProjectsPage/ProjectsPage.jsx
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useBreadcrumbsFromRoute } from "../../hooks/useBreadcrumbsFromRoute";

import { projectsData } from "../../data/projectsData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AnimatedGroup from "../../components/Animation/AnimatedGroup";
import AnimatedItem from "../../components/Animation/AnimatedItem";
import Breadcrumbs   from "../../components/Breadcrumbs/Breadcrumbs";

import styles from "./ProjectsPage.module.scss";

export default function ProjectsPage() {
  const { t } = useTranslation("projects");
  const breadcrumbs = useBreadcrumbsFromRoute();
  const [searchParams, setSearchParams] = useSearchParams();


  // leer filtros desde URL
  const techParam = searchParams.get("tech");
  const activeTechs = techParam ? techParam.split(",") : [];

  // Clave de animacion para reiniciar al cambiar filtros
  const animationKey = activeTechs.join("-") || "all";

  // toggle múltiple
  const toggleTech = (tech) => {
    const next = activeTechs.includes(tech)
      ? activeTechs.filter((t) => t !== tech)
      : [...activeTechs, tech];

    setSearchParams(
      next.length ? { tech: next.join(",") } : {}
    );
  };

  // filtrar proyectos
  const filteredProjects =
    activeTechs.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          activeTechs.every((t) => project.tech.includes(t))
        );

  // techs únicas
  const allTechs = [
    ...new Set(projectsData.flatMap((p) => p.tech)),
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.inner}>
        <Breadcrumbs items={breadcrumbs} />
        <AnimatedGroup className={styles.title}>
        <AnimatedItem as="h2">{t("page_title")}</AnimatedItem>
        </AnimatedGroup>
        {/* FILTRO */}
        <AnimatedGroup className={styles.filters}>
          <button
            onClick={() => setSearchParams({})}
            className={`${styles.filterBtn} ${
              activeTechs.length === 0 ? styles.active : ""
            }`}
          >
            Ver todos
          </button>

          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`${styles.filterBtn} ${
                activeTechs.includes(tech) ? styles.active : ""
              }`}
            >
              {tech}
            </button>
          ))}
        </AnimatedGroup>


        {/* GRID */}
        <AnimatedGroup key={animationKey} className={styles.grid} >
          {filteredProjects.map((project) => (
            <AnimatedItem as="div" key={project.id}>
              <ProjectCard {...project} />
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

