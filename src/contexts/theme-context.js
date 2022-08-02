import { createContext, useState } from "react";
import bg from '../assets/bg.png'
import bgDark from '../assets/bg-dark.png'
import pokedexBg from '../assets/pokedexBg.jpg'

export const themes = {
    light: {
        main: {
            background: `url("${bg}") center center no-repeat`
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
        },
        pokeList: {
            background: `url("${pokedexBg}") center center no-repeat;`,
            filter: 'brightness(.8)',
            btn: {
                background: 'linear-gradient(45deg, #0255f7 0%, #00e4d1 100%)'
            }
        },
        pokeCard: {
            background: 'gradient'
        }
    },
    dark: {
        main: {
            background: `url('${bgDark}') center center no-repeat`,
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
        },
        pokeList: {
            background: '#303030',
            filter: 'brightness(1)',
            btn: {
                background: '#303030'
            }
        },
        pokeCard: {
            background: '#303030'
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