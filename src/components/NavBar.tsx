import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import NavIconButton from "./NavIconButton";
import NavLink from "./NavLink";
import ToggleThemeButton from "./ToggleThemeButton";
type Prop = {
  aboutMeSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function NavBar({
  aboutMeSectionRef,
  projectsSectionRef,
  contactSectionRef,
}: Prop) {
  return (
    <motion.nav
      className="flex mt-4 lg:mt-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <div className="py-2 w-full h-full gap-1 rounded-md lg:grid lg:grid-cols-4 place-content-center place-items-center border border-gray-400 dark:border-light-coral  lg:h-20 text-2xl select-none shadow-big-shadow">
        <NavLink
          className="hidden lg:block"
          name="About"
          onClick={() => aboutMeSectionRef.current?.scrollIntoView()}
        />
        <NavLink
          className="hidden lg:block"
          name="Projects"
          onClick={() => projectsSectionRef.current?.scrollIntoView()}
        />
        <NavLink
          className="hidden lg:block"
          name="Contact"
          onClick={() => contactSectionRef.current?.scrollIntoView()}
        />
        <div className="flex gap-3 justify-around">
          <NavIconButton
            src="https://docs.google.com/document/d/1axLDuGj3sel9g2F_spL2sJpp0oCNJGNDNfrqW1KU7h0/edit?usp=sharing"
            Icon={<IoDocumentAttachOutline />}
          />
          <NavIconButton
            src="https://github.com/rakshit0960"
            Icon={<FaGithub />}
          />
          <NavIconButton
            src="https://linkedin.com/in/rakshit0960"
            Icon={<FaLinkedin />}
          />
        </div>
      </div>
      <ToggleThemeButton />
    </motion.nav>
  );
}
