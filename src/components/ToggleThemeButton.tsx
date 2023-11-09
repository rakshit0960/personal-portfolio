import { MouseEventHandler} from "react"
import { IconContext } from "react-icons";
import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeContext } from "./contexts/ThemeContext";

export default function ToggleThemeButton() {
    const {darkTheme, setDarkTheme} = useThemeContext();

    const toggleTheme:MouseEventHandler = () => {
        setDarkTheme(isDark => !isDark);
    }

  return (
    <IconContext.Provider value={{color: darkTheme ? 'white' : 'black', size: '1.6em'}}>
        <div onClick={toggleTheme} className="cursor-pointer border-2 border-gray-400 rounded-lg p-2 hover:border-black dark:hover:white dark:hover:border-white">
            {darkTheme ? <BsMoon /> : <BsSun /> }
        </div>
    </IconContext.Provider>
  )
}
