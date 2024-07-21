import { forwardRef } from "react";
import HomeSection from "./HomeSection";
import SectionWrapper from "./SectionWrapper";
import SkillsSection from "./SkillsSection";

const AboutMeSection = forwardRef<HTMLDivElement, unknown>(function (_, ref) {
  return (
    <div ref={ref}>
      <SectionWrapper name="About">
          <HomeSection />
          <SkillsSection />
      </SectionWrapper>
    </div>
  );
});

export default AboutMeSection;