'use client';
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        // Check if there's a theme in localStorage
        const savedTheme = window.localStorage.getItem("theme");
        
        if (savedTheme) {
            // If there's a saved preference, use it
            setDarkMode(savedTheme === "dark");
        } else {
            // Otherwise, use system preference
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(systemPrefersDark);
        }
        setMounted(true);

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, mounted]);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900  scale-150">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative w-24 h-11 bg-gray-300 dark:bg-neutral-700 rounded-full flex items-center p-1 transition-all cursor-none"
            >
                <motion.div
                    className="w-9 h-9 bg-white dark:bg-black rounded-full flex items-center justify-center "
                    initial={{ x: darkMode ? 50 : 0, rotate: darkMode ? 0 : 90 }}
                    animate={{ x: darkMode ? 50 : 0, rotate: darkMode ? 0 : 90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
                >
                    {darkMode ? <Moon size={22} className="text-yellow-400" /> : <Sun size={22} className="text-yellow-500" />}
                </motion.div>
            </button>
        </div>
    );
}