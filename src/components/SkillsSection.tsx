import { ISkill } from "../utils/interfaces";
import data from '../data/skillsList.json'
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";
import { motion } from 'framer-motion';

const skillsList: ISkill[] = data.skills;

export default function SkillsSection() {
  return (
    <>
    <SectionWrapper name='Technologies'>
      <motion.div
        className="flex flex-wrap gap-4 gap-x-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skillsList.map(skill => (
          <motion.div
            key={skill.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <SkillComponent skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
    </>
  )
}
