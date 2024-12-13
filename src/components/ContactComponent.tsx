import { motion } from "framer-motion";

interface Prop {
  icon: JSX.Element | string;
  info: string;
  link: string;
}

export default function ContactComponent({ icon, info, link }: Prop) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 lg:px-6 lg:py-4 border shadow-big-shadow rounded-2xl
        cursor-pointer hover:border-gray-600 dark:border-gray-400
        dark:hover:border-white dark:text-white hover:scale-105 transition-all
        hover:bg-gray-50/50 dark:hover:bg-white/5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <code className="flex items-center lg:text-2xl text-lg font-fira">
        <span className="text-sage-green font-fira-mono">{`<`}</span>
        <motion.div
          className="lg:pl-3 pl-2"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
        <div className="lg:mx-6 my-0 mx-2 lg:text-xl text-sm font-source-code">
          {info}
        </div>
        <span className="text-sage-green font-fira-mono">{`/>`}</span>
      </code>
    </motion.a>
  );
}
