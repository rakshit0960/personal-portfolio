import { ISkill } from "../data/SkillObjectInterface";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={skill.name}>
      <div className="border-2 h-4">
        <div className="bg-black h-full" style={{width: `${skill.level}%`}}></div>
      </div>
    </SingleComponentWrapper>
  );
}
