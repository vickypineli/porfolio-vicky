// src/data/tools.js
import { DiScrum, DiGit } from "react-icons/di";
import { SiLinux, SiBitbucket, SiJira, SiRaspberrypi, SiCanva, SiFigma } from "react-icons/si";
import { CgTrello } from "react-icons/cg";
import { VscVscodeInsiders } from "react-icons/vsc";

export const tools = [
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
];