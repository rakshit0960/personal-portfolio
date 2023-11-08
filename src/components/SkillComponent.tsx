import { ISkill } from "../data/SkillObjectInterface";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={skill.name} fontSize="1.6rem">
      <div className="border-2 h-3">
        <div className="bg-gray-600 h-full" style={{width: `${skill.level}%`}}></div>
      </div>
    </SingleComponentWrapper>
  );
}
