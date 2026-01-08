//src/hooks/useThemeColors.js

import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") || "light";
}

export function useThemeColors() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      const currentTheme =
        root.getAttribute("data-theme") || "light";

      setTheme((prev) =>
        prev !== currentTheme ? currentTheme : prev
      );
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}
