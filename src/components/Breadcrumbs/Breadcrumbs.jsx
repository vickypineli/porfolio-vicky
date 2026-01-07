// src/components/Breadcrumbs/Breadcrumbs.jsx

import { Link } from "react-router-dom";
//import AnimatedItem from "../Animation/AnimatedItem";
import { useBreadcrumbsFromRoute } from "../../hooks/useBreadcrumbsFromRoute";
import { FiHome } from "react-icons/fi";

import styles from "./Breadcrumbs.module.scss";


export default function Breadcrumbs() {
  const crumbs = useBreadcrumbsFromRoute();

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
<ol>
        {crumbs.map((crumb, index) => {
          const isCurrent = crumb.current;
          const isHome = index === 0;

          return (
            <li
              key={index}
              className={styles.item}
              style={{ "--i": index }}
            >
              {isCurrent ? (
                <span
                  aria-current="page"
                  className={styles.current}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.to}
                  aria-label={isHome ? "Inicio" : undefined}
                  className={styles.link}
                >
                  {isHome ? <FiHome size={16} /> : crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

