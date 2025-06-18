import { useEffect } from "react";
import { useTheme } from '../hooks/useTheme.js';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [darkMode, toggleTheme] = useTheme();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-black dark:text-white hover:scale-105 transition-transform duration-300">
                        {"<"}Amit<span className="text-blue-500">.Yehoshaphat{">"}</span> 
                    </a>

                    <button
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-black dark:text-white text-2xl"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </button>

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`ml-4 w-12 h-6 flex items-center rounded-full p-1 transition-colors ${darkMode ? 'bg-yellow-400' : 'bg-gray-300'}`}
                    >
                        <span
                            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform flex items-center justify-center text-[10px] ${darkMode ? 'translate-x-6' : ''}`}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </span>
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transition-transform duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transition-transform duration-300">
                            About
                        </a>
                        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transition-transform duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transition-transform duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
