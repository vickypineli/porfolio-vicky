// src/data/skills.js
import { DiHtml5, DiJavascript1, DiReact, DiPython, DiCss3, DiBootstrap, DiSass } from "react-icons/di";
import { SiSqlite, SiNextdotjs, SiFlask, SiVuedotjs, SiPhp, SiMariadb } from "react-icons/si";

export const skills = [
    { id: "html5", icon: DiHtml5, title: "HTML5" },
    { id: "css3", icon: DiCss3, title: "CSS3" },
    { id: "javascript", icon: DiJavascript1, title: "JavaScript" },
    { id: "react", icon: DiReact, title: "React" },
    { id: "nextjs", icon: SiNextdotjs, title: "Next.js" },
    { id: "vue", icon: SiVuedotjs, title: "Vue" },
    { id: "sass", icon: DiSass, title: "Sass" },
    { id: "bootstrap", icon: DiBootstrap, title: "Bootstrap" },
    { id: "python", icon: DiPython, title: "Python" },
    { id: "sqlite", icon: SiSqlite, title: "SQLite" },
    { id: "flask", icon: SiFlask, title: "Flask" },
    { id: "php", icon: SiPhp, title: "PHP" },
    { id: "mariadb", icon: SiMariadb, title: "MariaDB" },
];

