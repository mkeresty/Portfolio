"use client"

import React from 'react'
import { useTheme } from "next-themes";
import { resumeIcon, mailIcon, lightIcon, darkIcon } from "./icons";


const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (

    <div onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} className="w-[1.68rem] fill-[#808080] stroke-[#808080] hover:scale-110 hover:fill-[#F7AB0A]/70 hover:stroke-[#F7AB0A]/70 transition ease-in-out duration-200">
        {currentTheme === "dark" ? lightIcon : darkIcon}
    </div>
    )
}

export default Button