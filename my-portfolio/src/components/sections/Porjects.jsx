import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return(
    <section id="projects"
             className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
            <h2 
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/*Projects: */ }
                <div class="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">🤖 Self analyzing Discord bot:</h3>
                    <p className="text-gray-400 mb-4">A Discord bot that fetches and analyzes personal TFT match data using Riot’s API.  
                        Built with Python and Requests for API integration, and leverages machine learning logic to detect patterns in player performance.  
                        Includes a user-friendly interface within Discord for real-time feedback, insights, and match history summaries.
                        </p>
                    <div className="flex flex-wrap gap-2 mb-2"> 
                        {["Requests", "API" , "Machine Learning", "UI", "Python",].map((items,key)=>(
                            <span
                            key = {key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {items}
                        </span>
                        ))}
                        <div className="flex justify-between items-center">
                            <a  href="https://www.linkedin.com/feed/update/urn:li:activity:7284766178844008448/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project↩
                            </a>
                        </div>
                    </div>
                </div>


                <div class="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">🎮 2D shooting game:</h3>
                    <p className="text-gray-400 mb-4">A 2D top-down shooter game built with Python and Pygame.  
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
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project↩
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </RevealOnScroll>
    </section>
    );

};