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
        <button onClick={toggleTheme} className="w-20 ml-2 aspect-square border-black grid place-content-center border-2 rounded-lg dark:hover:white dark:border-[#D3D3D3] dark:hover:border-white">
            {darkTheme ? <BsMoon /> : <BsSun /> }
        </button>
    </IconContext.Provider>
  )
}
