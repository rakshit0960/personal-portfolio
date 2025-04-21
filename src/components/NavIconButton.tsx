import { motion } from "framer-motion";

interface Props {
  src: string;
  Icon: React.ReactNode;
  label?: string;
}

export default function NavIconButton({ src, Icon, label }: Props) {
  return (
    <motion.a
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md
      border border-gray-300 dark:border-gray-700
      bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm
      text-gray-700 dark:text-gray-200
      hover:bg-gray-50 dark:hover:bg-gray-700/80
      hover:border-gray-400 dark:hover:border-gray-600
      transition-all duration-200"
      href={src}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="text-xl">{Icon}</div>
      {label && (
        <span className="text-sm font-medium hidden md:inline-block">
          {label}
        </span>
      )}
    </motion.a>
  );
}
