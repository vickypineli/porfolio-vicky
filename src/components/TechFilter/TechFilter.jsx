//src/components/TechFilter/TechFilter.jsx

import styles from "./TechFilter.module.scss";

export default function TechFilter({ techs, activeTechs, onToggle }) {
  return (
    <div className={styles.filter}>
      {techs.map((tech) => (
        <button
          key={tech}
          type="button"
          onClick={() => onToggle(tech)}
          className={activeTechs.includes(tech) ? styles.active : ""}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

