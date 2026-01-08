//src/hooks/useBreadcrumbsFromRoute.js

// este hook genera datos basandose en la ruta actual 
// para el componente Breadcrumbs, 
// sirve tanto para rutas estaticas y dinamicas
// src/hooks/useBreadcrumbsFromRoute.js

import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData } from "../data/projectsData";

export function useBreadcrumbsFromRoute() {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const { t } = useTranslation();

  const crumbs = [
    {
      label: t("breadcrumbs.home"),
      to: "/",
    },
  ];

  // === PÁGINAS ESTÁTICAS ===
  const staticRoutes = {
    "/about": { ns: "about", key: "page_title" },
    "/skills": { ns: "skills", key: "page_title" },
    "/contact": { ns: "contact", key: "page_title" },
  };

  if (staticRoutes[pathname]) {
    const { ns, key } = staticRoutes[pathname];
    crumbs.push({
      label: t(key, { ns }),
      current: true,
    });
    return crumbs;
  }

  // === PROJECTS ===
  if (pathname.startsWith("/projects")) {
    crumbs.push({
      label: t("page_title", { ns: "projects" }),
      to: "/projects",
    });

    // === PROJECT DETAIL ===
    if (slug) {
      const project = projectsData.find((p) => p.slug === slug);

      if (project) {
        crumbs.push({
          label: project.title, // aquí NO traducimos: es contenido
          current: true,
        });
      }
    } else {
      crumbs.at(-1).current = true;
    }
  }

  return crumbs;
}
