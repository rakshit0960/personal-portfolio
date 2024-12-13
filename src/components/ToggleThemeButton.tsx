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
      value={{ color: theme == 'dark' ? "white" : "black", size: "1.6em" }}
    >
      <motion.button
        onClick={toggleTheme}
        className="bg-white dark:bg-black w-20 ml-2 aspect-square grid place-content-center border shadow-big-shadow rounded-lg dark:hover:white dark:border-[#D3D3D3] dark:hover:border-white border-gray-400"
        whileTap={{ scale: 0.9, rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {theme == 'dark' ? <BsMoon /> : <BsSun />}
      </motion.button>
    </IconContext.Provider>
  );
}
