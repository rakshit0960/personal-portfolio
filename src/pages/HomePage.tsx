import { useRef } from "react";
import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";
import ProjectsSection from "../components/ProjectsSection";

export default function HomePage() {
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const ProjectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <PageHeader
        aboutMeSectionRef={aboutMeSectionRef}
        projectsSectionRef={ProjectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <AboutMeSection
        ref={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <ProjectsSection ref={ProjectsSectionRef} />
      <ContactSection ref={contactSectionRef} />
    </>
  );
}
