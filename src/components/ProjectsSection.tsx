import { forwardRef } from "react";
import ProjectsList from "./ProjectsList";
import SectionWrapper from "./SectionWrapper";


const ProjectsSection = forwardRef<HTMLDivElement, unknown>(function (_, ref) {
  return (
    <div ref={ref}> 
      <SectionWrapper name="Projects">
        <ProjectsList />
      </SectionWrapper>
    </div>
  );
})

export default ProjectsSection;