// src/components/Animation/AnimatedGroup.jsx
import { useRef } from "react";
import { useInView } from "../../hooks/useInView"; // Hook personalizado para detectar visibilidad
import styles from "./Animation.module.scss";

/**
 * AnimatedGroup: Actúa como un contenedor inteligente que activa las 
 * animaciones de sus hijos (AnimatedItems) cuando entra en el viewport.
 */
export default function AnimatedGroup({
  children,
  stagger = 0.12, // 'Stagger' es el retraso incremental entre cada hijo
  className = "",
}) {
  // Referencia al nodo del DOM que queremos observar
  const ref = useRef(null);
  
  // Detectamos si el grupo está visible. 
  // 'once: true' asegura que la animación solo ocurra la primera vez.
  // 'margin: -80px' evita que se dispare justo en el borde, mejorando la experiencia visual.
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      // Si el componente está en el viewport (isInView), añadimos la clase 'visible'
      className={`${styles.group} ${isInView ? styles.visible : ""} ${className}`}
      // Variable CSS para controlar el escalonado (stagger) de los hijos mediante CSS
      style={{ "--stagger": `${stagger}s` }}
    >
      {children}
    </div>
  );
}