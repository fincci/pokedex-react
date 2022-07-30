import { createContext, useState } from "react";

export const themes = {
    light: {
        main: {
            background: 'url("../../assets/bg.png") center center no-repeat'
        },
        pokedexHud: {
            background: '#ce0627',
            border: {
                background: '#DEDEDE'
            },
            ball: {
                background: '#28AAFE',
                justify: 'flex-start',
                ballShadow: {
                    background: '#1c77b4'
                },
                whiteDot: '#dedede'
            },
            btn: {
                color: '#000',
                background: '#eee'
            },
        }
    },
    dark: {
        main: {
            background: 'url("../../assets/bg-dark.png") center center no-repeat'
        },
        pokedexHud: {
            background: '#680213',
            border: {
                background: '#5a5a5a'
            },
            ball: {
                background: '#135a8a',
                justify: 'flex-end',
                ballShadow: {
                    background: '#0d3652',
                },
                whiteDot: {
                    background: '#cfcfcf'
                }
            },
            btn: {
                color: '#fff',
                background: '#303030'
            },
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