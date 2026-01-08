// src/components/Breadcrumbs/Breadcrumbs.jsx

import { Link } from "react-router-dom";
import { useBreadcrumbsFromRoute } from "../../hooks/useBreadcrumbsFromRoute";
import { HiHome } from "react-icons/hi";
import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const crumbs = useBreadcrumbsFromRoute();

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {crumbs.map((crumb, index) => {
          const isLast = crumb.current;

          return (
            <li key={index} className={styles.item}>
              {crumb.to && !isLast ? (
                <Link
                  to={crumb.to}
                  className={styles.link}
                >
                  {index === 0 ? <HiHome aria-hidden /> : crumb.label}
                </Link>
              ) : (
                <span
                  className={styles.current}
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              )}

              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
