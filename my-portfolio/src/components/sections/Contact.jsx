import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact =() =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSending(true);

        const emailjs = (await import('emailjs-com')).default;

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY,
            )
            .then(() => {
                alert('Message Sent!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => alert('Something went wrong, Please try again.'))
            .finally(() => setSending(false));
    };

    return(
         <section 
            id="contact"
            className="min-h-screen flex items-center justify-center -mt-20 py-15">
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center" >
                        Get in touch</h2>
                    {/*Form: */}

                    <form className="space-y-6"
                            onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                            type="text" name="name"
                            id="name" required 
                            autoComplete="name"
                            aria-label="Your Name"
                            value ={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your name"
                            onChange ={(e) => setFormData({ ...formData, name: e.target.value})}/>
                        </div>

                        <div className="relative">
                            <input 
                            type="email" name="email"
                            id="email" required
                            autoComplete="email"
                            aria-label="Your Email"
                            value ={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com"
                            onChange ={(e) => setFormData({ ...formData, email: e.target.value})}/>
                        </div>

                        <div className="relative">
                            <textarea
                            id="message" 
                            name="message"
                            required
                            autoComplete="off"
                            aria-label="Your Message"
                            value ={formData.message}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Message here"
                            onChange ={(e) => setFormData({ ...formData, message: e.target.value})}/>
                        </div>

                        <button type="submit" 
                                disabled={sending}
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50">
                            {sending ? "Sending..." : "Submit Message"}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
         </section>
)}