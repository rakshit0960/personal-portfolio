import ContactComponent from "./ContactComponent";
import { IconContext } from "react-icons";
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaGithub, FaLinkedin} from 'react-icons/fa6'

export default function ContactComponentsList() {
  return (
    <IconContext.Provider value={{color: 'black', size: '1.2em'}}>
        <div className="grid gap-16">
            <ContactComponent icon={<AiOutlineMail />} info="rakshit0960@gmail.com" />
            <ContactComponent icon={<BsTelephone />} info="+919701011814" />
            <ContactComponent icon={<FaGithub />} info="github.com/rakshit0960" />
            <ContactComponent icon={<FaLinkedin />} info="linkedIn" />
        </div>
    </IconContext.Provider>
  );
}
