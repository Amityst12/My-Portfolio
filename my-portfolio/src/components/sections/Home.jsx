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
                    I'm a <span className="text-blue-400 font-semibold"> full-stack developer</span> and 
                    <span className="text-blue-400 font-semibold"> computer science student</span> who loves building 
                    <span className="text-blue-400 font-semibold"> impactful software</span>.
                    Whether it's crafting elegant UIs, solving deep technical challenges, or learning something new — 
                    I'm always improving.
                    <br /><br />
                    Outside of tech, you'll find me 
                    <span className="text-blue-400 font-semibold"> pushing limits at the gym</span>, diving into 
                    <span className="text-blue-400 font-semibold"> gaming & anime</span>, exploring 
                    <span className="text-blue-400 font-semibold"> creative ideas</span> in design and tech.
                </p>
                <RevealOnScroll>
                {/*Picture*/}
                <picture>
                    <source srcSet={`${import.meta.env.BASE_URL}/mepic_retina_2048.webp`} type="image/webp" />
                    <source srcSet={`${import.meta.env.BASE_URL}/mepic_retina_2048.png`} type="image/png" />
                    <img
                        src={`${import.meta.env.BASE_URL}/mepic_retina_2048.webp`}
                        alt="Amit Yehoshaphat – Profile"
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full mx-auto mb-8 shadow-lg border border-white/24"
                        width="256"
                        height="256"
                    />
                </picture>
                </RevealOnScroll>


                {/*Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a  href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        View Projects
                    </a>

                    <a  href= {`${import.meta.env.BASE_URL}/Resume.pdf`}
                        download
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        ↓ My resume
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