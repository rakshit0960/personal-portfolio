import { ISkill } from "../data/SkillObjectInterface"; 
import data from '../data/skillsList.json'
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";


const skillsList: ISkill[] = data.skills;

export default function SkillsSection() {
  return (
    <SectionWrapper name='Tech Stack'>
      <div className="grid grid-cols-2 gap-y-12 gap-x-8">
        {skillsList.map(skill => <SkillComponent skill={skill} key={skill.id}/>)}
      </div>
    </SectionWrapper>
  )
}
