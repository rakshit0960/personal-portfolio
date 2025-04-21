import { RefObject } from "react";
import NavBar from "./NavBar";
import { motion } from 'framer-motion';

type Prop = {
  aboutMeSectionRef: RefObject<HTMLDivElement>;
  projectsSectionRef: RefObject<HTMLDivElement>;
  contactSectionRef: RefObject<HTMLDivElement>;
};

export default function PageHeader({
  aboutMeSectionRef,
  projectsSectionRef,
  contactSectionRef,
}: Prop) {
  return (
    <motion.header
      className="px-5 container mx-auto max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar
        aboutMeSectionRef={aboutMeSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
    </motion.header>
  );
}
