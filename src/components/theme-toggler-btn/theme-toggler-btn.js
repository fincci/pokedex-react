import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import './theme-toggler-btn.css'

export const ThemeTogglerBtn = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className="theme-toggler">
            <button className="theme-btn" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} style={{ backgroundColor: theme.pokedexHud.btn.background }} />
            <p className="theme-name" style={{
                color: theme.pokedexHud.btn.color,
                backgroundColor: theme.pokedexHud.btn.background
            }}>
                {theme === themes.light ? 'Dark mode' : 'Light mode'}
            </p>
        </div>
    )
}