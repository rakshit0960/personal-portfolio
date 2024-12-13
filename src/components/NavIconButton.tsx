import { motion } from "framer-motion";

interface Props {
  src: string;
  Icon: React.ReactNode;
}

export default function NavIconButton({ src, Icon }: Props) {
  return (
    <motion.a
      className="lg:border-2 border-gray-400 px-6 lg:px-2 2xl:px-6 py-4 lg:py-2
        rounded-md hover:border-gray-900 flex items-center justify-center
        dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white
        transition-colors duration-300 group"
      href={src}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
        whileHover={{ rotate: 5 }}
      >
        {Icon}
      </motion.div>
    </motion.a>
  );
}
