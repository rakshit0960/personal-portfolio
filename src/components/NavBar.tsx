import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import NavIconButton from "./NavIconButton";
import NavLink from "./NavLink";
import ToggleThemeButton from "./ToggleThemeButton";
import { RefObject } from "react";

type Prop = {
  aboutMeSectionRef: RefObject<HTMLDivElement>;
  projectsSectionRef: RefObject<HTMLDivElement>;
  contactSectionRef: RefObject<HTMLDivElement>;
};

export default function NavBar({
  aboutMeSectionRef,
  projectsSectionRef,
  contactSectionRef,
}: Prop) {
  return (
    <motion.nav
      className="flex items-center gap-4 mt-6 lg:mt-0 px-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <div className="flex-1 py-4 rounded-lg border border-gray-300 dark:border-gray-700
        shadow-sm dark:shadow-md dark:shadow-black/20 bg-white/80 dark:bg-gray-900/80
        backdrop-blur-sm">
        <div className="grid lg:grid-cols-[1fr,auto] gap-4">
          <div className="hidden lg:flex items-center justify-center">
            <NavLink
              name="About"
              onClick={() => aboutMeSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            <NavLink
              name="Projects"
              onClick={() => projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            <NavLink
              name="Contact"
              onClick={() => contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>

          <div className="flex justify-center lg:justify-end items-center gap-3 px-4">
            <NavIconButton
              src="https://docs.google.com/document/d/1axLDuGj3sel9g2F_spL2sJpp0oCNJGNDNfrqW1KU7h0/edit?usp=sharing"
              Icon={<IoDocumentAttachOutline />}
              label="Resume"
            />
            <NavIconButton
              src="https://github.com/rakshit0960"
              Icon={<FaGithub />}
              label="GitHub"
            />
            <NavIconButton
              src="https://linkedin.com/in/rakshit0960"
              Icon={<FaLinkedin />}
              label="LinkedIn"
            />
          </div>
        </div>
      </div>

      <ToggleThemeButton />
    </motion.nav>
  );
}
