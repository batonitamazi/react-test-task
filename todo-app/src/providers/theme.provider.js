import React, { createContext, useState } from 'react'

const themeContext = createContext();


const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    document.documentElement.setAttribute("data-theme", `${theme}`)

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    // const setDark = () => {
    //     // 2
    //     setDarkTheme("dark")

    //     // 3
    //     document.documentElement.setAttribute("data-theme", `${darkTheme}`);
    // };
    // const setLight = () => {
    //     setDarkTheme("light")
    //     document.documentElement.setAttribute("data-theme", `${darkTheme}`);
    // };
    

    return (
        <themeContext.Provider value={{changeTheme, theme}}>
            {props.children}
        </themeContext.Provider>
    )
}
export { themeContext, ThemeProvider };