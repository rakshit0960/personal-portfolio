import { ISkill } from "../utils/interfaces";
import SingleComponentWrapper from "./SingleComponentWrapper";
import { motion } from "framer-motion";

export default function SkillComponent({ skill }: { skill: ISkill }) {
  return (
    <SingleComponentWrapper name={""} className="text-xl">
      <motion.div
        className="group relative flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={skill.imageSrc}
          width={60}
          alt={skill.name}
          className="transition-all duration-300 group-hover:brightness-110"
        />
        <motion.span
          className="absolute -bottom-6 text-xs text-gray-600 dark:text-gray-400
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: -10 }}
          whileHover={{ y: 0 }}
        >
          {skill.name}
        </motion.span>
      </motion.div>
    </SingleComponentWrapper>
  );
}
