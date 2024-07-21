import { forwardRef } from "react";
import IntroductionSection from "./IntroductionSection";
import SectionWrapper from "./SectionWrapper";
import SkillsSection from "./SkillsSection";

type Prop = {
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>;
};

const AboutMeSection = forwardRef<HTMLDivElement, Prop>(function (
  { contactSectionRef },
  ref
) {
  return (
    <div ref={ref}>
      <SectionWrapper name="About">
        <IntroductionSection contactSectionRef={contactSectionRef} />
        <SkillsSection />
      </SectionWrapper>
    </div>
  );
});

export default AboutMeSection;
