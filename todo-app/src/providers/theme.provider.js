import React, { createContext, useState } from 'react'

const themeContext = createContext();


const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    document.documentElement.setAttribute("data-theme", `${theme}`)

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }


    return (
        <themeContext.Provider value={{ changeTheme, theme }}>
            {props.children}
        </themeContext.Provider>
    )
}
export { themeContext, ThemeProvider };