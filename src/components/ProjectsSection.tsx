import { forwardRef } from "react";
import ProjectsList from "./ProjectsList";
import SectionWrapper from "./SectionWrapper";

const ProjectsSection = forwardRef<HTMLDivElement, unknown>(function (_, ref) {
  return (
    <div ref={ref}>
      <SectionWrapper name="Projects">
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-mono dark:text-sage-green mb-3">My Recent Work</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Here are some of the projects I've worked on. Each project represents different
              challenges and learning experiences in my journey as a developer.
            </p>
          </div>
          <ProjectsList />
        </div>
      </SectionWrapper>
    </div>
  );
});

export default ProjectsSection;