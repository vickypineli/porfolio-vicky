//src/hooks/useBreadcrumbsFromRoute.js

// este hook genera datos basandose en la ruta actual 
// para el componente Breadcrumbs, 
// sirve tanto para rutas estaticas y dinamicas


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

  // RUTAS ESTÁTICAS
  const staticRoutes = [
    {
      match: "/about",
      label: t("page_title", { ns: "about" }),
    },
    {
      match: "/skills",
      label: t("page_title", { ns: "skills" }),
    },
    {
      match: "/contact",
      label: t("page_title", { ns: "contact" }),
    },
  ];

  const staticRoute = staticRoutes.find(
    (route) => pathname === route.match
  );

  if (staticRoute) {
    crumbs.push({
      label: staticRoute.label,
      current: true,
    });
  }

  // PROJECTS (LIST + DETAIL)
  if (pathname.startsWith("/projects")) {
    crumbs.push({
      label: t("page_title", { ns: "projects" }),
      to: "/projects",
    });

    if (slug) {
      const project = projectsData.find((p) => p.slug === slug);

      if (project) {
        crumbs.push({
          label: project.title,
          current: true,
        });
      }
    }
  }

  return crumbs;
}
