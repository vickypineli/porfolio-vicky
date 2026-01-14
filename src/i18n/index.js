import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar módulos por idioma y página
import esHome from "./es/home.json";
import esHomeAbout from "./es/homeAbout.json";
import esHomeContact from "./es/homeContact.json";
import esHomeSkills from "./es/homeSkills.json";
import esHomeProjects from "./es/homeProjects.json";
import esAbout from "./es/about.json";
import esProjects from "./es/projects.json";
import esSkills from "./es/skills.json";
import esContact from "./es/contact.json";
import esHeader from "./es/header.json";

import enHome from "./en/home.json";
import enHomeAbout from "./en/homeAbout.json";
import enHomeContact from "./en/homeContact.json";
import enHomeSkills from "./en/homeSkills.json";
import enHomeProjects from "./en/homeProjects.json";
import enAbout from "./en/about.json";
import enProjects from "./en/projects.json";
import enSkills from "./en/skills.json";
import enContact from "./en/contact.json";
import enHeader from "./en/header.json";


import euHome from "./eu/home.json";
import euHomeAbout from "./eu/homeAbout.json";
import euHomeContact from "./eu/homeContact.json";
import euHomeSkills from "./eu/homeSkills.json";
import euHomeProjects from "./eu/homeProjects.json";
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
        homeContact: esHomeContact,
        homeSkills: esHomeSkills,
        homeProjects: esHomeProjects,
        about: esAbout,
        projects: esProjects,
        skills: esSkills,
        contact: esContact,
        header: esHeader
      },
      eu: {
        home: euHome,
        homeAbout: euHomeAbout,
        homeContact: euHomeContact,
        homeSkills: euHomeSkills,
        homeProjects: euHomeProjects,
        about: euAbout,
        projects: euProjects,
        skills: euSkills,
        contact: euContact,
        header: euHeader
      },
      en: {
        home: enHome,
        homeAbout: enHomeAbout,
        homeContact: enHomeContact,
        homeSkills: enHomeSkills,
        homeProjects: enHomeProjects,
        about: enAbout,
        projects: enProjects,
        skills: enSkills,
        contact: enContact,
        header: enHeader
      }
    }
  });

export default i18n;
