export const About = () =>{

    const frontendSkills = ["React", "JavaScript", "TailwindCSS","HTML"];
    const backendSkills = ["JSON","SQL","Basic Node.js","Python","Rest APIs"];
    const otherSkills = ["GitHub","VS code","Deubgging","Problem Solving","Object-Oriented Programming"];
    const Hobbies = ["Working out", "Reading","Gaming","Building","Overcoming challenges"];
    
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Just a bit more:
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-200 mb-5 text-3xl text-center font-bold">
                        Less noise, more purpose — that's the motto.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend:
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((items,key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend:
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((items, key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Other skills:
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((items, key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Hobbies:
                                <div className="flex flex-wrap gap-2">
                                    {Hobbies.map((items, key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};