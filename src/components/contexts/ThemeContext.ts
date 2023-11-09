import { createContext, useContext } from "react";

interface Theme {
    darkTheme: boolean | undefined
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>> | undefined
}

export const ThemeContext = createContext<Theme>({ darkTheme: undefined, setDarkTheme: undefined });

export function useThemeContext() {
    const {darkTheme: theme, setDarkTheme: setTheme} = useContext(ThemeContext)
    
    if (theme === undefined || setTheme === undefined) 
        throw new Error('Theme Cannot contain undefined field')

    return {theme, setTheme};
}
