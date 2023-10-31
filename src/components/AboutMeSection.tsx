import SectionWrapper from "./SectionWrapper";

export default function AboutMeSection() {
  return (
    <SectionWrapper name="AboutMe">
      <SectionWrapper name="name">
        <div className="text-4xl">Rakshit</div>
      </SectionWrapper>
      <SectionWrapper name="Skills">
          <div className="grid grid-cols-4 place-content-baseline">
              <SectionWrapper name="frontEnd">
                <div>hello</div>
              </SectionWrapper>
              <SectionWrapper name="Backend">
                <div>hello</div>
              </SectionWrapper>
          </div>
      </SectionWrapper>
      <SectionWrapper name="Education">
          <div></div>
      </SectionWrapper>
    </SectionWrapper>
  )
}
