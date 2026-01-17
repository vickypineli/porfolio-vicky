// src/hooks/useInView.js
import { useEffect, useState } from "react";

/**
 * useInView: Hook personalizado para detectar si un elemento está visible en pantalla.
 * @param {React.RefObject} ref - Referencia del elemento del DOM que queremos observar.
 * @param {Object} options - Configuración: 'once' para disparar una sola vez, 'margin' para el umbral.
 */
export function useInView(ref, { once = true, margin = "0px" } = {}) {
  // Estado que indica si el elemento ha entrado en el viewport
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Si la referencia no está asignada a ningún elemento, salimos de la función
    if (!ref.current) return;

    // Instanciamos el IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 'isIntersecting' es verdadero cuando el elemento entra en el campo de visión
        console.log(`[Observer] Elemento: ${ref.current.tagName} | Visible: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // Si el usuario solo quiere la animación una vez (once), 
          // dejamos de observar para ahorrar recursos de memoria.
          if (once) {
        console.log("%c[Observer] Desconectado: Animación lista", "color: #ff00c8; font-weight: bold;");
        observer.disconnect();
      }
        }
      },
      { 
        // rootMargin actúa como un "margen virtual". 
        // Ejemplo: "-80px" hace que el trigger ocurra 80px antes de que el elemento aparezca.
        rootMargin: margin 
      }
    );

    // Comenzamos la observación del elemento referenciado
    observer.observe(ref.current);

    // "Cleanup function": Se ejecuta cuando el componente se desmonta.
    return () => observer.disconnect();

    // Las dependencias aseguran que si las opciones cambian, el observador se reinicie.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, margin]);

  // Retornamos solo el booleano para que el componente React sepa cuándo actuar.
  return isInView;
}