import { createContext, useContext } from "react";

interface Theme {
    darkTheme: boolean | undefined
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>> | undefined
}

export const ThemeContext = createContext<Theme>({ darkTheme: undefined, setDarkTheme: undefined });

export function useThemeContext() {
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)
    
    if (darkTheme === undefined || setDarkTheme === undefined) 
        throw new Error('Theme Cannot contain undefined field')

    return {darkTheme, setDarkTheme};
}
