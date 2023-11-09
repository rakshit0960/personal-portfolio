import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";
import ProjectsSection from "../components/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <PageHeader />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
