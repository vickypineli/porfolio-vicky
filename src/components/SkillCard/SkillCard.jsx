// src/components/SkillCard/SkillCard.jsx
import { useEffect, useState } from "react";
import styles from "./SkillCard.module.scss";

function getLevelLabel(level) {
  if (level < 40) return "Básico";
  if (level < 60) return "Intermedio";
  if (level < 80) return "Avanzado";
  return "Experto";
}

// eslint-disable-next-line no-unused-vars
export default function SkillCard({ icon: Icon, title, description, level }) {
  const [open, setOpen] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(0);

  // Al cerrar la carta, reseteamos el número directamente aquí
  const toggle = () => {
    setOpen((prev) => {
      const newState = !prev;
      if (!newState) setDisplayLevel(0);
      return newState;
    });
  };

  const levelLabel = getLevelLabel(level);

  useEffect(() => {
    if (!open) return;

    let start = null;
    const duration = 700;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.round(progress * level);

      setDisplayLevel(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    // Limpieza al desmontar o cerrar
    return () => cancelAnimationFrame(animationFrame);
  }, [open, level]);

  // El texto aparece solo cuando la animación llega al final
  const showLevel = open && displayLevel === level;

  return (
    <button
      type="button"
      className={`${styles.card} ${open ? styles.open : ""}`}
      onClick={toggle}
      aria-expanded={open}
    >
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>

      <span className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.progressBar}>
          <span
            className={styles.progressFill}
            style={{ width: open ? `${level}%` : "0%" }}
          >
            <span className={styles.progressPercent}>
              {/* Si está cerrado forzamos 0, si no, mostramos el progreso */}
              {open ? displayLevel : 0}%
            </span>
          </span>
        </div>
          
        <div className={styles.levelBox}>
         {showLevel && (
          <span className={styles.levelText}>
            <strong>{levelLabel}</strong>
          </span>
        )}
        </div>
      </span>
    </button>
  );
}