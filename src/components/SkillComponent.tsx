import { ISkill } from "../utils/interfaces";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={skill.name} fontSize="1.6rem">
      <div className="flex items-center">
        <div className="border-2 h-3 w-full">
          <div
            className="bg-gray-600 h-full"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <div className="ml-2 text-xl">{skill.level}%</div>
      </div>
    </SingleComponentWrapper>
  );
}
