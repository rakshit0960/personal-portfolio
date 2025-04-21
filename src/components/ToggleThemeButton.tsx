import { MouseEventHandler } from "react";
import { IconContext } from "react-icons";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useTheme } from "./contexts/theme-provider";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme: MouseEventHandler = () => {
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <IconContext.Provider
      value={{ color: theme == 'dark' ? "#10b981" : "#f59e0b", size: "1.2em" }}
    >
      <motion.button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-lg
        border border-gray-300 dark:border-gray-700
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
        shadow-sm dark:shadow-md dark:shadow-black/20
        hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/30
        hover:border-gray-400 dark:hover:border-gray-600
        transition-all duration-300"
        whileTap={{ scale: 0.9, rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300 }}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme == 'dark' ? <BsMoon /> : <BsSun />}
      </motion.button>
    </IconContext.Provider>
  );
}
