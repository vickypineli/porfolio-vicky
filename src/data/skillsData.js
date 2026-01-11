import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
  DiBootstrap,
  DiSass,
  DiGit,
  DiScrum,
} from "react-icons/di";

import {
  SiNextdotjs,
  SiVuedotjs,
  SiSqlite,
  SiFlask,
  SiPhp,
  SiMariadb,
  SiLinux,
  SiBitbucket,
  SiJira,
  SiCanva,
  SiRaspberrypi,
  SiFigma,
} from "react-icons/si";

import { CgTrello } from "react-icons/cg";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa";


export const skillsData = [
  {
    section: "skills",
    titleKey: "skills.section_title",
    introKey: "skills.skillset_intro",
    items: [
      { id: "html5", icon: DiHtml5, title: "HTML5", level: 70 },
      { id: "css3", icon: DiCss3, title: "CSS3", level: 80 },
      { id: "javascript", icon: DiJavascript1, title: "JavaScript", level: 70 },
      { id: "react", icon: DiReact, title: "React", level: 75 },
      { id: "nextjs", icon: SiNextdotjs, title: "Next.js",  level: 70 },
      { id: "vue", icon: SiVuedotjs, title: "Vue", level: 50 },
      { id: "sass", icon: DiSass, title: "Sass",  level: 70 },
      { id: "bootstrap", icon: DiBootstrap, title: "Bootstrap", level: 50 },
      { id: "python", icon: DiPython, title: "Python", level: 40 },
      { id: "sqlite", icon: SiSqlite, title: "SQLite",  level: 50 },
      { id: "flask", icon: SiFlask, title: "Flask",  level: 40 },
      { id: "php", icon: SiPhp, title: "PHP", level: 50 },
      { id: "mariadb", icon: SiMariadb, title: "MariaDB", level: 40 },
    ],
  },
  {
    section: "tools",
    titleKey: "tools.section_title",
    introKey: "tools.toolset_intro",
    items: [
      { id: "linux", icon: SiLinux, title: "Linux", level: 60 },
      { id: "vscode", icon: VscVscodeInsiders, title: "VS Code", level: 80 },
      { id: "git", icon: DiGit, title: "Git", level: 70 },
      { id: "bitbucket", icon: SiBitbucket, title: "Bitbucket", level: 50 },
      { id: "trello", icon: CgTrello, title: "Trello", level: 100 },
      { id: "jira", icon: SiJira, title: "Jira",  level: 60 },
      { id: "scrum", icon: DiScrum, title: "Scrum", level: 70 },
      { id: "canva", icon: SiCanva, title: "Canva",   level: 80 },
      { id: "raspberrypi", icon: SiRaspberrypi, title: "Raspberry Pi", level: 30 },
      { id: "figma", icon: SiFigma, title: "Figma", level: 55 },
      { id: "codepen", icon: FaCodepen, title: "Codepen", level: 45 },
    ],
  },
];
