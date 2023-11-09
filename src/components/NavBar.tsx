import resume from "../assets/documents/resume.pdf";
import NavLink from "./NavLink";
import DownloadButton from "./DownloadButton";
export default function NavBar() {
  return (
    <nav>
      <div className="rounded-md grid grid-cols-4 place-content-center place-items-center border-2 dark:border-sage-green border-black h-20 text-2xl select-none">
        <NavLink name="About" href="#aboutSection" />
        <NavLink name="Projects" href="#ProjectsSection" />
        <NavLink name="Contact" href="#ContactSection" />
        <DownloadButton filePath={resume} fileName="RESUME-Rakshit_Mehta-PDF" name="Resume" />
      </div>
    </nav>
  );
}
