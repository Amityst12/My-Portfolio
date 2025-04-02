import { RevealOnScroll } from "../RevealOnScroll";

export const About = () =>{

    const frontendSkills = ["React", "JavaScript", "TailwindCSS","HTML"];
    const backendSkills = ["JSON","SQL","Basic Node.js","Python","Rest APIs","Emailjs"];
    const otherSkills = ["GitHub","VS code","Deubgging","Problem Solving","Object-Oriented Programming"];
    const Hobbies = ["Working out", "Reading","Gaming","Building","Overcoming challenges","Collecting"];
    const Courses = ["OOP", "Data Structures", "Data Systems","Data Science","C","OS","ML", "Computer Networking","Software Engineering"];
    
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-15">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Just a bit more:
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-200 mb-5 text-3xl text-center font-bold">
                        Less noise, more purpose — that's my motto.
                    </p>

                    {/* Arrays grid here*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend:
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((items,key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
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
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>
                        {/*
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Other skills:
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((items, key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>
                            */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Completed Courses:
                                <div className="flex flex-wrap gap-2">
                                    {Courses.map((items, key)=>(
                                        <span
                                            key = {key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
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
                                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                                    {items}
                                        </span>
                                    ))}
                                </div>
                            </h3>
                        </div>
                </div>


                {/*Next grid here*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-4">🎓Education:</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>Working towards B.Sc in Computer Science</strong> - Holon Institute of Technology (2023 - 2026)
                                        </li>
                                        <li>
                                            <strong>High school diploma</strong> - 10 units of Computer Science and Software Engineering (2017 - 2020)
                                        </li>
                                        <li>
                                            <strong>Operational Digital Communications Course</strong> - Trained in tactical communication systems and field operations (2021)
                                        </li>
                                    </ul>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-4">📂Experience:</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4 className="font-bold"> Operational Digital Communication Specialist(2020 - Reserves)</h4>
                                            <p>
                                            Responsible for tactical radio systems, field communication, and real-time support for operational units.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold"> Event Manager - Celia(2022- 2024)</h4>
                                            <p>
                                            Responsible for planning and running events, managing staff, and ensuring client satisfaction throughout.
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
                

            </div>
            </RevealOnScroll>
        </section>
    );
};