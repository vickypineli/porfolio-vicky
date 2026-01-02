//src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage/ProjectDetailPage";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MainLayout from "../layout/MainLayout/MainLayout";    

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
