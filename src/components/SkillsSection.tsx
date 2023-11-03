import { ISkill } from "../data/SkillObjectInterface"; 
import data from '../data/skillsList.json'
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";


const skillsList: ISkill[] = data.skills;

export default function SkillsSection() {
  return (
    <SectionWrapper name='Tech Stack'>
        {skillsList.map(skill => <SkillComponent skill={skill} />)}
    </SectionWrapper>
  )
}
