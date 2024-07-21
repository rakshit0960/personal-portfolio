import ContactComponent from "./ContactComponent";
import { IconContext } from "react-icons";
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaGithub, FaLinkedin} from 'react-icons/fa6'
import { useTheme } from "./contexts/theme-provider";

export default function ContactComponentsList() {
  const { theme: theme } = useTheme()
  return (
    <IconContext.Provider value={{color: theme == 'dark' ? 'white' : 'black', size: '1.2em'}}>
        <div className="grid lg:gap-12 gap-4">
            <ContactComponent icon={<AiOutlineMail />} info="rakshit0960@gmail.com" link={'mailto:rakshit0960@gmail.com'} />
            <ContactComponent icon={<BsTelephone />} info="+919701011814" link={'tel:+919701011814'} />
            <ContactComponent icon={<FaGithub />} info="github.com/rakshit0960" link={'https://github.com/rakshit0960'} />
            <ContactComponent icon={<FaLinkedin />} info="linkedIn" link={'https://linkedin.com/in/rakshit-mehta0960'} />
        </div>
    </IconContext.Provider>
  );
}
