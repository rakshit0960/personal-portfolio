import { ISkill } from "../data/SkillObjectInterface";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <div>
      {skill.name}, {skill.level}
    </div>
  );
}
