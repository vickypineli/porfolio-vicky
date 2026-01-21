//src/pages/HomePage/sections/ProjectsSection/ProjectsSection.jsx

import { useState } from "react";
import styles from "./ProjectsSection.module.scss";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../../../data/projectsData";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { t } = useTranslation("homeProjects");
  
  // Iniciamos el array con el último elemento al principio para tener margen
  const [items, setItems] = useState(() => {
    const last = projectsData[projectsData.length - 1];
    const rest = projectsData.slice(0, -1);
    return [last, ...rest];
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);

  const move = (dir) => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);
  };

  const onTransitionEnd = () => {
    setIsTransitioning(false);
    
    if (direction === "next") {
      // El que estaba segundo pasa a ser el primero (el "escondido")
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    } else if (direction === "prev") {
      // El último pasa a ser el primero
      setItems((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, -1);
        return [last, ...rest];
      });
    }
    
    setDirection(null);
  };

  return (
    <section id="projects" className={styles.section}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={() => move("prev")}>‹</button>

      <div className={styles.inner}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.carouselContainer}>
          <div 
            className={`
              ${styles.carousel} 
              ${isTransitioning ? styles[direction] : ""}
            `}
            onTransitionEnd={onTransitionEnd}
          >
            {items.map((project) => (
              <div key={project.id} className={styles.slide}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
         <a href="/projects" className={styles.viewAllLink}>{t("viewAll")}</a>
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={() => move("next")}>›</button>
    </section>
  );
}