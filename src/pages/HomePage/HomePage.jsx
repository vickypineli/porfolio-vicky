//src/pages/HomePage/HomePage.jsx
import HeroSection from "../HomePage/sections/HeroSection/HeroSection";
import AboutPreviewSection from "../HomePage/sections/AboutPreviewSection/AboutPreviewSection";
import ProjectsPreviewSection from "../HomePage/sections/ProjectsPreviewSection/ProjectsPreviewSection";
import ContactPreviewSection from "../HomePage/sections/ContactPreviewSection/ContactPreviewSection";
import ParallaxSection from "../../components/Parallax/ParallaxSection";

//import styles from "./HomePage.module.scss";





export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <ParallaxSection speed={0.45}>
        <AboutPreviewSection />
      </ParallaxSection>

      {/* <ParallaxSection speed={0.6}>
        <ProjectsPreviewSection />
      </ParallaxSection> */}

      <ParallaxSection speed={0.25}>
        <ContactPreviewSection />
      </ParallaxSection>
    </main>
  );
}