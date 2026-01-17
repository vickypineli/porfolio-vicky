// src/components/Animation/AnimatedItem.jsx
import styles from "./Animation.module.scss";

/**
 * AnimatedItem: Componente encargado de envolver contenido individual
 * para aplicarle una animación de entrada basada en CSS.
 */
export default function AnimatedItem({
  // 'as' permite el "Polimorfismo": decidir si el componente será un p, h2, div, etc.
  // Se renombra a 'Tag' (con mayúscula) para que React lo reconozca como un componente.
  // eslint-disable-next-line no-unused-vars
  as: Tag = "p", 
  children, // El contenido que irá dentro del elemento
  direction = "up", // Dirección de la animación (definida en las clases de SASS)
  delay = 0, // Tiempo de espera antes de iniciar la animación
  className = "", // Clases adicionales externas para mayor flexibilidad
}) {
  return (
    <Tag
      // Concatenamos las clases del módulo CSS según la dirección elegida
      className={`${styles.item} ${styles[direction]} ${className}`}
      // Pasamos el delay como una 'CSS Variable'. 
      // Esto permite que el archivo .scss lea este valor dinámico.
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </Tag>
  );
}