import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000',
        background: '#eee'
    },
    dark: {
        color: '#fff',
        background: '#303030'
    },
    pokedex: {
        light: {
            background: '#ce0627'
        },
        dark: {
            background: '#680213'
        }
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}