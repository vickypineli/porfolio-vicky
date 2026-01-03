// src/hooks/useInView.js
import { useEffect, useState } from "react";

export function useInView(ref, { once = true, margin = "0px" } = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, margin]);

  return isInView;
}
