import PageHeader from "../components/PageHeader";
import PageMain from "../components/PageMain";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <PageHeader
        aboutMeSectionRef={aboutMeSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <PageMain>
        <AboutMeSection
          ref={aboutMeSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <ProjectsSection ref={projectsSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </PageMain>
    </motion.div>
  );
}
