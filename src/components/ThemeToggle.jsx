import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
