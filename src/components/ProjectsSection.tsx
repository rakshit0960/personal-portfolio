import ProjectsList from "./ProjectsList";
import SectionWrapper from "./SectionWrapper";

export default function ProjectsSection() {
  return (
    <div id="ProjectsSection">
      <SectionWrapper name="Projects">
        <ProjectsList />
      </SectionWrapper>
    </div>
  );
}
