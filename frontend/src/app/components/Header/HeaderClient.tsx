"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

export default function HeaderClient() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    // Загружаем сохранённую тему
    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null
        if (saved) {
            setTheme(saved)
            document.documentElement.setAttribute("data-theme", saved)
        }
    }, [])

    // Применяем тему при изменении
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
        // + Tailwind dark-mode класс, если используешь "class" стратегию
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    return (
        <div className='flex justify-end'>
            <div className='max-w-[57px] w-full h-[30px] rounded-[5px]'>
                <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
        </div>
    )
}
