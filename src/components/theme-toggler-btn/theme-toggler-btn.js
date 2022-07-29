import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import './theme-toggler-btn.css'

export const ThemeTogglerBtn = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    console.log(theme);

    return (
        <div className="theme-toggler">
            <button className="theme-btn" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} style={{ backgroundColor: theme.background }} />
            <p className="theme-name" style={{ color: theme.color, backgroundColor: theme.background }}>{theme === themes.light ? 'Dark theme' : 'Light theme'}</p>
        </div>
    )
}