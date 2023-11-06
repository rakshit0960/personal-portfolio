import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/documents/resume.pdf";
export default function NavBar() {
  return (
    <nav>
      <div className="rounded-md grid grid-cols-4 place-content-center place-items-center border-2 border-black h-20 text-2xl select-none">
        <a className="hover:font-semibold" href="#aboutSection">
          About
        </a>
        <a className="hover:font-semibold" href="#ProjectsSection">
          Projects
        </a>
        <a className="hover:font-semibold" href="#ContactSection">
          Contact
        </a>
        <a
          className="border-2 border-gray-400 px-6 py-2 rounded-md hover:border-gray-900 flex items-center"
          href={resume}
          download="RESUME-Rakshit_Mehta-PDF"
          target="_blank"
          rel="noreferrer"
        >
            <div className="pr-4">Resume</div>
            <AiOutlineDownload size='1em'/>
        </a>
      </div>
    </nav>
  );
}
