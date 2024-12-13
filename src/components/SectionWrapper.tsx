import React from "react";
import { motion } from 'framer-motion';

interface Prop {
  children: string | React.JSX.Element | React.JSX.Element[];
  name: string;
}
export default function SectionWrapper({children, name}: Prop) {
  return (
    <motion.section
      className="relative flex flex-col justify-between py-7 pl-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <code className="text-2xl lg:text-3xl dark:text-sage-green">{`<${name}>`}</code>

      <div className="flex jus">
        <div className="ml-3 border-[1px] dark:border-dark-border-green"></div>
        <div className="ml-10 lg:ml-20 mr-6 my-9 w-full">{children}</div>
      </div>

      <code className="text-2xl lg:text-3xl dark:text-sage-green">{`</${name}>`}</code>
    </motion.section>
  );
}
