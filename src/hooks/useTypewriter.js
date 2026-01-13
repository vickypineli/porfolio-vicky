// src/hooks/useTypewriter.js
import { useEffect, useState, useRef } from "react";

export function useTypewriter(text, speed = 50, startDelay = 0) {
  const [output, setOutput] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    // Si no hay texto, reseteamos estados de forma segura
    // if (!text) {
    //   //setOutput("");
    //   //setIsDone(false);
    //   indexRef.current = 0;
    //   return;
    // }

    // Variable de control para evitar actualizaciones en componentes desmontados
    let isMounted = true;

    const timeoutId = setTimeout(() => {
      // Reseteamos antes de empezar la animación
      indexRef.current = 0;
      if (isMounted) {
        setOutput("");
        setIsDone(false);
      }

      const intervalId = setInterval(() => {
        if (indexRef.current < text.length) {
          const char = text.charAt(indexRef.current);
          if (isMounted) {
            setOutput((prev) => prev + char);
            indexRef.current++;
          }
        } else {
          clearInterval(intervalId);
          if (isMounted) setIsDone(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);
  return { output, isDone };
}
