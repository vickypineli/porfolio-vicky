// src/components/Breadcrumbs/Breadcrumbs.jsx

import { Link } from "react-router-dom";
//import AnimatedItem from "../Animation/AnimatedItem";
import styles from "./Breadcrumbs.module.scss";
import { useBreadcrumbsFromRoute } from "../../hooks/useBreadcrumbsFromRoute";

export default function Breadcrumbs() {
  const crumbs = useBreadcrumbsFromRoute();

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol>
        {crumbs.map((crumb, index) => {
          const isLast = crumb.current || index === crumbs.length - 1;

          return (
            <li key={index}>
              {isLast ? (
                <span aria-current="page" className={styles.current}>
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.to}>{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

