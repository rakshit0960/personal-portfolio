import { forwardRef } from "react";
import ProjectsList from "./ProjectsList";
import SectionWrapper from "./SectionWrapper";

const ProjectsSection = forwardRef<HTMLDivElement, unknown>(function (_, ref) {
  return (
    <div ref={ref}>
      <SectionWrapper name="Projects">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-fira-mono text-green-700 dark:text-sage-green mb-4 font-semibold">Featured Projects</h2>
            <p className="text-gray-900 dark:text-gray-300 mb-4 font-medium">
              My projects showcase expertise in developing <span className="text-green-700 dark:text-sage-green">real-time communication platforms</span>, <span className="text-green-700 dark:text-sage-green">code compilers</span>, <span className="text-green-700 dark:text-sage-green">interactive UIs</span>, and <span className="text-green-700 dark:text-sage-green">blockchain applications</span>.
            </p>
            <p className="text-gray-800 dark:text-gray-400 text-sm border-l-4 border-green-700 dark:border-sage-green pl-4 py-2 bg-green-50 dark:bg-transparent dark:border-opacity-30 rounded">
              Each project demonstrates my full-stack capabilities with technologies including React, Next.js, Node.js, WebRTC, Docker, and AWS. These applications feature secure authentication, real-time functionality, and optimized performance.
            </p>
          </div>
          <ProjectsList />
        </div>
      </SectionWrapper>
    </div>
  );
});

export default ProjectsSection;