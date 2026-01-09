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
    ],
  },
  {
    section: "tools",
    titleKey: "tools.section_title",
    introKey: "tools.toolset_intro",
    items: [
      { id: "linux", icon: SiLinux, title: "Linux" },
      { id: "vscode", icon: VscVscodeInsiders, title: "VS Code" },
      { id: "git", icon: DiGit, title: "Git" },
      { id: "bitbucket", icon: SiBitbucket, title: "Bitbucket" },
      { id: "trello", icon: CgTrello, title: "Trello" },
      { id: "jira", icon: SiJira, title: "Jira" },
      { id: "scrum", icon: DiScrum, title: "Scrum" },
      { id: "canva", icon: SiCanva, title: "Canva" },
      { id: "raspberrypi", icon: SiRaspberrypi, title: "Raspberry Pi" },
      { id: "figma", icon: SiFigma, title: "Figma" },
      { id: "codepen", icon: FaCodepen, title: "Codepen" },
    ],
  },
];
