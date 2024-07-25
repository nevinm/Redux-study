// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <h3>Switch them to {theme === 'light' ? 'dark' : 'light'} Theme:</h3>
            <button onClick={toggleTheme}>Switch theme</button>
        </>
    )
}