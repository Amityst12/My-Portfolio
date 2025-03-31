import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (
        <section 
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                {/*Main */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 
                    bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
                    leading-tight break-words text-center w-full px-2">
                    Hi, I'm Amit Yehoshaphat
                </h1>

                <p className="text-gray-100 text-lg max-w-2xl mx-auto text-center mb-8">
                    I'm a passionate software developer and computer science student with a deep love for building things that make an impact - whether it's full-stack applications, solving complex problems, or crafting beautiful front-end experiences — I’m always learning and improving. <br /><br />
                    Outside of tech, you'll probably find me at the gym, training hard and pushing my limits. I'm also a huge fan of gaming, anime, and constantly exploring new ideas in design and tech.
                </p>

                {/*Picture*/}
                <img
                src= "./My-Portfolio/mepic.png"
                alt="Profile Photo"
                className="w-82 h-82 rounded-full mx-auto mb-8 shadow-lg border border-white/24 hover:scale-101 transition-transform duration-300"
                />


                {/*Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a  href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        View Projects
                    </a>

                    <a  href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact me!
                    </a>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
};