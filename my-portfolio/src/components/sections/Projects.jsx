import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return(
    <section id="projects"
             className="relative min-h-screen flex items-center justify-center py-20 scroll-mt-20">
        {/* Full-bleed background image with gradient overlay (matches Home/About) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0" aria-hidden="true">
            <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B0D28]/80 via-[#1B0D28]/60 to-[#1B0D28]/80"></div>
        </div>
    {/* Top fade to blend from previous section */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1B0D28] via-[#1B0D28]/70 to-transparent z-0" aria-hidden="true" />
        {/* Subtle bottom fade to smooth transition into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#1B0D28]/70 to-[#1B0D28] z-0" aria-hidden="true" />
        <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 ">
            <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/*Projects: */ }
                
                <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                <RevealOnScroll>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">🤖 Self analyzing Discord bot:</h3>
                    <p className="text-gray-400 mb-4 break-words">A Discord bot that fetches and analyzes personal TFT match data using Riot’s API.  
                        Built with Python and Requests for API integration, and leverages machine learning logic to detect patterns in player performance.  
                        Includes a user-friendly interface within Discord for real-time feedback, insights, and match history summaries.
                        </p>
                    <div className="flex flex-wrap gap-2 mb-2"> 
                        {["Requests", "API" , "ML", "UI", "Python",].map((items,key)=>(
                            <span
                            key = {key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {items}
                        </span>
                        ))}
                        <div className="flex justify-between items-center">
                            <a  href="https://www.linkedin.com/feed/update/urn:li:activity:7284766178844008448/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project ↗
                            </a>
                        </div>
                    </div>
                    </RevealOnScroll>
                </div>


                <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                <RevealOnScroll>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">🎮 2D shooting game:</h3>
                    <p className="text-gray-400 mb-4 break-words">A 2D top-down shooter game built with Python and Pygame.  
                        Designed using Object-Oriented Programming to manage player movement, enemy logic, bullet physics, and vector-based aiming.  
                        The game features custom UI elements, sprite animations, and responsive controls for a smooth arcade-style experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python","Pygame","OOP","Vectors","Shooter" ].map((items,key)=>(
                            <span
                            key = {key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {items}
                        </span>
                        ))}
                        <div className="flex justify-between items-center">
                            <a  href="https://www.linkedin.com/feed/update/urn:li:activity:7278520780353658881/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project ↗
                            </a>
                        </div>
                    </div>
                    </RevealOnScroll>
                </div>
                    

                <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                <RevealOnScroll>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">🖥 Portfolio website:</h3>
                    <p className="text-gray-400 mb-4 break-words">A modern and responsive portfolio website built to showcase my skills, projects, and experience as a developer. Designed with a focus on clean aesthetics and smooth animations, the site highlights my proficiency in React, TailwindCSS, and integration with services like EmailJS.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "TailwindCSS", "EmailJS", "JS","Vite" ].map((items,key)=>(
                            <span
                            key = {key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {items}
                        </span>
                        ))}
                        <div className="flex justify-between items-center">
                            <a  href="https://www.linkedin.com/feed/update/urn:li:activity:7312831823850475521/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project ↗
                            </a>
                        </div>
                    </div>
                    </RevealOnScroll>
                </div>


                <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                <RevealOnScroll>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    💡 Promptify:
                    </h3>
                    <p className="text-gray-400 mb-4 break-words">
                    A smart prompt enhancer web app that helps users turn simple or vague inputs into clear, structured, and detailed prompts for better AI results. Built with React and OpenAI API, Promptify features live prompt improvements, copy-to-clipboard, prompt history with local storage, and full responsiveness.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "OpenAI", "TailwindCSS", "Vite", "JavaScript"].map((item, key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                        {item}
                        </span>
                    ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7328675601815330819/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                        View Project ↗
                    </a>
                    </div>
                </RevealOnScroll>
                </div>

            </div>
        </div>


    </RevealOnScroll>
    </section>
    );

};