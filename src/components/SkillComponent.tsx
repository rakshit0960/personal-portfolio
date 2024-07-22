import { ISkill } from "../utils/interfaces";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={skill.name}>
      <div className="flex items-center">
        <div className="border-2 h-3 w-full dark:border-dark-border-blue hidden sm:block">
          <div
            className="bg-gray-600 dark:bg-dark-border-teal h-full "
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <div className="ml-2 text-xl">{skill.level}%</div>
      </div>
    </SingleComponentWrapper>
  );
}
