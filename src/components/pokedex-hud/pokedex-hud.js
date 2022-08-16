import { ThemeTogglerBtn } from '../theme-toggler-btn/theme-toggler-btn'
import { ThemeContext } from "../../contexts/theme-context"
import React, { useContext } from 'react'
import './pokedex-hud.css'

export const PokedexHud = ({ children }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <main className='main'
            style={{ background: theme.main.background }}
        >
            <div className='pokedex' style={{ backgroundColor: theme.pokedexHud.background }}>
                <div className='top-style'>
                    <div className='left-details'>
                        <div className='ball-border' style={{ backgroundColor: theme.pokedexHud.border.background }}>
                            <div className='ball-dot' style={{ backgroundColor: theme.pokedexHud.ball.background }}>
                                <div className='ball-shadow' style={{ backgroundColor: theme.pokedexHud.ball.ballShadow.background, justifyContent: theme.pokedexHud.ball.justify }}>
                                    <div className='ball-inside' style={{ backgroundColor: theme.pokedexHud.ball.background, justifyContent: theme.pokedexHud.ball.justify }}>
                                        <div className='ball-white-dot' style={{ backgroundColor: theme.pokedexHud.ball.whiteDot.background }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-dots'>
                            <div className='top-dot dot1'></div>
                            <div className='top-dot dot2'></div>
                            <div className='top-dot dot3'></div>
                        </div>
                    </div>
                    <ThemeTogglerBtn />
                </div>
                <div className='border' style={{ backgroundColor: theme.pokedexHud.border.background }}>
                    <div className='border-top'>
                        <div className='dots'>
                            <div className='dot'></div>
                            <div className='dot'></div>
                        </div>
                    </div>
                    <div className='children'>{children}</div>
                    <div className='border-bottom'>
                        <div className='bigger-dot'></div>
                        <div className='hamburger-container'>
                            <div className='hamburger1'></div>
                            <div className='hamburger2'></div>
                            <div className='hamburger3'></div>
                            <div className='hamburger4'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}