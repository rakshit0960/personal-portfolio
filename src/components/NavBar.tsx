import resume from "../assets/documents/resume.pdf";
import NavLink from "./NavLink";
import DownloadButton from "./DownloadButton";
import ToggleThemeButton from "./ToggleThemeButton";
export default function NavBar() {
  return (
    <nav className="flex mt-4 lg:mt-0">
      <div className="py-2 w-full h-full gap-1 rounded-md grid lg:grid-cols-4 place-content-center place-items-center border-2 dark:border-light-coral border-black lg:h-20 text-2xl select-none">
        <NavLink name="About" href="#aboutSection" />
        <NavLink name="Projects" href="#ProjectsSection" />
        <NavLink name="Contact" href="#ContactSection" />
        <DownloadButton filePath={resume} fileName="RESUME-Rakshit_Mehta-PDF" name="Resume" />
      </div>
      <ToggleThemeButton /> 
    </nav>
  );
}
