import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar módulos por idioma y página
import esHome from "./es/home.json";
import esHomeAbout from "./es/homeAbout.json";
import esAbout from "./es/about.json";
import esProjects from "./es/projects.json";
import esSkills from "./es/skills.json";
import esContact from "./es/contact.json";
import esHeader from "./es/header.json";

import enHome from "./en/home.json";
import enHomeAbout from "./en/homeAbout.json";
import enAbout from "./en/about.json";
import enProjects from "./en/projects.json";
import enSkills from "./en/skills.json";
import enContact from "./en/contact.json";
import enHeader from "./en/header.json";


import euHome from "./eu/home.json";
import euHomeAbout from "./eu/homeAbout.json";
import euAbout from "./eu/about.json";
import euProjects from "./eu/projects.json";
import euSkills from "./eu/skills.json";
import euContact from "./eu/contact.json";
import euHeader from "./eu/header.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        home: esHome,
        homeAbout: esHomeAbout,
        about: esAbout,
        projects: esProjects,
        skills: esSkills,
        contact: esContact,
        header: esHeader
      },
      eu: {
        home: euHome,
        homeAbout: euHomeAbout,
        about: euAbout,
        projects: euProjects,
        skills: euSkills,
        contact: euContact,
        header: euHeader
      },
      en: {
        home: enHome,
        homeAbout: enHomeAbout,
        about: enAbout,
        projects: enProjects,
        skills: enSkills,
        contact: enContact,
        header: enHeader
      }
    }
  });

export default i18n;
