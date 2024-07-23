import { ISkill } from "../utils/interfaces";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={skill.name} className="text-xl">
      <img src={skill.imageSrc} width={60}/>
    </SingleComponentWrapper>
  );
}
