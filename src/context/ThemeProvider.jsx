import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>)

}