import { useEffect } from "react"

export const Navbar= ({menuOpen, setMenuOpen}) =>{

    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]); //If state of menu changes

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)]
    backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white hover:scale-105 transition-transform duration-300">
                    {" "}
                    {"<"}Amit<span className="text-blue-500">.Yehoshaphat{">"}</span> 
                    </a>

                    <button
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        >
                         &#9776;
                    </button>

                    
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home"
                         className="text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 ">
                            Home
                        </a>

                        <a href="#about"
                         className="text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 ">
                            About
                        </a>

                        <a href="#projects"
                         className="text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 ">
                            Projects
                        </a>

                        <a href="#contact"
                         className="text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 ">
                            Contact
                        </a>
                    </div>
            </div>
        </div>
    </nav>
}