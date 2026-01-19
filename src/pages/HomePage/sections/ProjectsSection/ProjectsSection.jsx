//src/pages/HomePage/sections/ProjectsSection/ProjectsSection.jsx

import { useRef } from "react";
import styles from "./ProjectsSection.module.scss";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../../../data/projectsData";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { t } = useTranslation("homeProjects");
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector(`.${styles.slide}`);
    if (!card) return;

    const gap = parseFloat(getComputedStyle(slider).gap) || 0;
    const distance = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className={styles.section}>
      {/* FLECHA IZQUIERDA – fuera del inner */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        aria-label="Previous projects"
        onClick={() => scroll("left")}
      >
        ‹
      </button>

      <div className={styles.inner}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        <div ref={sliderRef} className={styles.carousel}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.slide}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <a href="/projects" className={styles.viewAllLink}>
          {t("viewAll")}
        </a>
      </div>

      {/* FLECHA DERECHA – fuera del inner */}
      <button
        className={`${styles.arrow} ${styles.right}`}
        aria-label="Next projects"
        onClick={() => scroll("right")}
      >
        ›
      </button>
    </section>
  );
}
