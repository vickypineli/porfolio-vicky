// src/components/Animation/AnimatedItem.jsx
import styles from "./Animation.module.scss";

export default function AnimatedItem({
  // eslint-disable-next-line no-unused-vars
  as: Tag = "p",
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  return (
    <Tag
      className={`${styles.item} ${styles[direction]} ${className}`}
      style={{ "--delay": `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
