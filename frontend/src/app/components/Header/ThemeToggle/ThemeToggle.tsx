"use client"

import Image from "next/image"

interface ThemeToggleProps {
    theme: "light" | "dark"
    setTheme: (theme: "light" | "dark") => void
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    const isDark = theme === "dark"

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className='flex w-[57px] h-[30px] items-center rounded-[5px] border border-maingray bg-transparent relative cursor-pointer'
        >
            {/* Иконки статично */}
            <div className='flex w-full justify-between pl-2 pr-[7px] z-0'>
                <Image
                    src='/icons/theme/sun.svg'
                    width={14}
                    height={14}
                    alt='sun'
                />
                <Image
                    src='/icons/theme/moon.svg'
                    width={14}
                    height={14}
                    alt='moon'
                />
            </div>

            <div
                className={`absolute -z-10 w-[28px] h-[28px] rounded-[4px] transition-all duration-300
          ${
              isDark
                  ? "translate-x-[26px] bg-purple-500 w-[29px]"
                  : "translate-x-0 bg-purple-500"
          }`}
            />
        </button>
    )
}
