import { useEffect, useState } from "react"
import { Instagram, Globe, Linkedin, MessageCircle } from "lucide-react";

export const Navbar= ({menuOpen, setMenuOpen}) =>{
    const [active, setActive] = useState('home');

    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]); //If state of menu changes

    // Scroll spy
    useEffect(() => {
    const ids = ['home','about','amitweb','projects','contact'];
        const sections = ids
            .map(id => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length) return;
        let ticking = false;
        const onScroll = () => {
            if (ticking) return; ticking = true;
            requestAnimationFrame(() => {
                let current = 'home';
                for (const s of sections) {
                    const rect = s.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 200) { current = s.id; break; }
                }
                setActive(current);
                ticking = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <nav role="navigation" aria-label="Primary"
    className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)]
    backdrop-blur-lg border-b border-white/10 shadow-lg pt-safe px-safe">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-16 gap-3">
                <a href="#home" className="flex-1 min-w-0 truncate whitespace-nowrap font-mono text-lg sm:text-xl font-bold text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded">
                    {" "}
                    {"<"}Amit<span className="text-blue-500">.Yehoshaphat{">"}</span> 
                    </a>

                    <button
                        className="w-10 h-10 relative cursor-pointer z-40 md:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded flex items-center justify-center"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        >
                         &#9776;
                    </button>

                    
                <div className="hidden md:flex items-center space-x-8">
                        <a href="#home"
                    aria-current={active==='home' ? 'page' : undefined}
                    className={`text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded ${active==='home' ? 'text-white' : ''}`}>
                            Home
                        </a>

                        <a href="#about"
                    aria-current={active==='about' ? 'page' : undefined}
                    className={`text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded ${active==='about' ? 'text-white' : ''}`}>
                            About
                        </a>

                        <a href="#amitweb"
                    aria-current={active==='amitweb' ? 'page' : undefined}
                    className={`text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded ${active==='amitweb' ? 'text-white' : ''}`}>
                            AmitWeb
                        </a>

                        <a href="#projects"
                    aria-current={active==='projects' ? 'page' : undefined}
                    className={`text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded ${active==='projects' ? 'text-white' : ''}`}>
                            Projects
                        </a>

                        <a href="#contact"
                    aria-current={active==='contact' ? 'page' : undefined}
                    className={`text-gray-300 hover:text-white transition-colors hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded ${active==='contact' ? 'text-white' : ''}`}>
                            Contact
                        </a>
                    </div>

                    {/* External links with icons (desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://www.instagram.com/amitweb1/" target="_blank" rel="noopener noreferrer" className="text-gray-300 ml-25 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                        <a href="https://amitweb.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1" aria-label="AmitWeb site">
                            <Globe size={18} />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=972502227134" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1" aria-label="WhatsApp">
                            <MessageCircle size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/amityehoshaphat/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                    </div>
            </div>
        </div>
    </nav>
}