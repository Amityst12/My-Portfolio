import { useEffect } from "react"
import { Instagram, Globe, Linkedin, MessageCircle } from "lucide-react";

export const MobileMenu= ({menuOpen, setMenuOpen}) =>{

    return (
        //This is the "Burger" menu tab:
        
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center pt-safe px-safe pb-safe
                        transition-all duration-300 ease-in-out

                        ${
                            menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                            }
                        `}>
                
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer w-10 h-10 flex items-center justify-center"
                aria-label ="Close Menu"
                >
                &times;
            </button>
                <a href="#home"
                onClick={() => setMenuOpen(false)}
                 className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-100
                            ${menuOpen 
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5" 
                            }
                        `}>
                      Home
                </a>

                <a href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-100
                    ${menuOpen 
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5" 
                    }
                `}>
                       About
                </a>

                <a href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-100
                    ${menuOpen 
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5" 
                    }
                `}>
                    Projects
                </a>

                <a href="#amitweb"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-100
                    ${menuOpen 
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5" 
                    }
                `}>
                    AmitWeb
                </a>

                <a href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-100
                    ${menuOpen 
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5" 
                    }
                `}>
                    Contact
                </a>

                {/* External icons row */}
                <div className={`mt-6 flex items-center gap-5 ${menuOpen ? "opacity-100" : "opacity-0"}`}>
                    <a href="https://www.instagram.com/amitweb1/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1" aria-label="Instagram"><Instagram /></a>
                    <a href="https://amitweb.com/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1" aria-label="AmitWeb"><Globe /></a>
                    <a href="https://api.whatsapp.com/send/?phone=972502227134" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1" aria-label="WhatsApp"><MessageCircle /></a>
                    <a href="https://www.linkedin.com/in/amityehoshaphat/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1" aria-label="LinkedIn"><Linkedin /></a>
                </div>
            
        </div>
    );
};