import ContactComponent from "./ContactComponent";
import { IconContext } from "react-icons";
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaGithub, FaLinkedin} from 'react-icons/fa6'
import { useTheme } from "./contexts/theme-provider";
import { motion } from "framer-motion";

export default function ContactComponentsList() {
  const { theme } = useTheme();

  return (
    <IconContext.Provider value={{color: theme == 'dark' ? 'white' : 'black', size: '1.2em'}}>
      <motion.div
        className="grid lg:gap-12 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        <ContactComponent
          icon={<AiOutlineMail className="hover:text-sage-green transition-colors" />}
          info="rakshit0960@gmail.com"
          link={'mailto:rakshit0960@gmail.com'}
        />
        <ContactComponent
          icon={<BsTelephone className="hover:text-sage-green transition-colors" />}
          info="+919701011814"
          link={'tel:+919701011814'}
        />
        <ContactComponent
          icon={<FaGithub className="hover:text-sage-green transition-colors" />}
          info="github.com/rakshit0960"
          link={'https://github.com/rakshit0960'}
        />
        <ContactComponent
          icon={<FaLinkedin className="hover:text-sage-green transition-colors" />}
          info="linkedIn"
          link={'https://linkedin.com/in/rakshit-mehta0960'}
        />
      </motion.div>
    </IconContext.Provider>
  );
}
