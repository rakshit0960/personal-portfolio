import { MouseEventHandler } from "react";
import { IconContext } from "react-icons";
import { BsMoon, BsSun } from "react-icons/bs";
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
      <button
        onClick={toggleTheme}
        className="w-20 ml-2 aspect-square border-black grid place-content-center border-2 rounded-lg dark:hover:white dark:border-[#D3D3D3] dark:hover:border-white"
      >
        {theme == 'dark' ? <BsMoon /> : <BsSun />}
      </button>
    </IconContext.Provider>
  );
}
