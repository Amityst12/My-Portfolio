import { RevealOnScroll } from "../RevealOnScroll"
export const Contact =() =>{

    return(
         <section 
            id="contact"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center" >Get in touch</h2>
                    <form className="space-y-6">
                        <div className="relative">
                            <input type="text" id="name" required 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                            
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
         </section>
)}