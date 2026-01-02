import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className={styles.themeToggle}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}