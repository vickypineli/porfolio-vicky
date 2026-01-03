// src/components/Animation/AnimatedGroup.jsx
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./Animation.module.scss";

export default function AnimatedGroup({
  children,
  stagger = 0.12,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`${styles.group} ${isInView ? styles.visible : ""} ${className}`}
      style={{ "--stagger": `${stagger}s` }}
    >
      {children}
    </div>
  );
}
