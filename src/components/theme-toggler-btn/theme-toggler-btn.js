import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import styled, { css } from "styled-components"
import './theme-toggler-btn.css'

export const ThemeTogglerBtn = () => {

    const { theme, setTheme } = useContext(ThemeContext)


    return (
        <ThemeToggler>
            <button className="theme-btn" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} style={{ backgroundColor: theme.pokedexHud.btn.background }} />
            <P theme={theme}>
                {theme === themes.light ? 'Dark mode' : 'Light mode'}
            </P>
        </ThemeToggler>
    )
}
const P = styled.p`
    & {
        position: relative;
        font-size: 15px;
        display: block;
        ${props => props.theme && css`
            background-color: ${props.theme.pokedexHud.btn.background};
            color: ${props.theme.pokedexHud.btn.color};
        `}
        padding: 5px;
        opacity: .3;
        animation: wiggle .5s infinite alternate;
        transition: .3s;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        ${props => props.theme && css`
            background-color: ${props.theme.pokedexHud.btn.background};
        `}
        transition: .3s;
    }`

const ThemeToggler = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        height: fit-content;
    }
    
    &:hover ${P} {
        opacity: 1;
    }`




