// src/components/SkillCard/SkillCard.jsx
import { useState } from "react";
import styles from "./SkillCard.module.scss";

// eslint-disable-next-line no-unused-vars
export default function SkillCard({ icon: Icon, title, description }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <button
      className={`${styles.card} ${open ? styles.open : ""}`}
      onClick={toggle}
      aria-expanded={open}
      type="button"
    >
      <div className={styles.icon}>
        <Icon size={55} />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
}

