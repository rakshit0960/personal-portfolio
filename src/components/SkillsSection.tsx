import { ISkill } from "../utils/interfaces"; 
import data from '../data/skillsList.json'
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";


const skillsList: ISkill[] = data.skills;

export default function SkillsSection() {
  return (
    <SectionWrapper name='Skills'>
      <div className="grid grid-cols-1 2xl:grid-cols-2 lg:gap-y-12 gap-4 gap-x-7">
        {skillsList.map(skill => <SkillComponent skill={skill} key={skill.id}/>)}
      </div>
    </SectionWrapper>
  )
}
