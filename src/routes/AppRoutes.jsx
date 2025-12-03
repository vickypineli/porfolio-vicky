import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
