import HomeSection from "./HomeSection";
import SectionWrapper from "./SectionWrapper";
import SkillsSection from "./SkillsSection";

export default function AboutMeSection() {
  return (
    <div id="aboutSection">
      <SectionWrapper name="About">
          <HomeSection />
          <SkillsSection />
      </SectionWrapper>
    </div>
  );
}
