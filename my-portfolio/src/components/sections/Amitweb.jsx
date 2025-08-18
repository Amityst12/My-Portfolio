import { RevealOnScroll } from "../RevealOnScroll";
import { Instagram, Globe } from "lucide-react";

export const Amitweb = () => {
  const base = import.meta.env.BASE_URL || "";

return (
    <section id="amitweb" aria-labelledby="amitweb-title" className="relative min-h-[70vh] py-20 scroll-mt-20">
        {/* Full-bleed background image with gradient overlay (matches other sections) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0" aria-hidden="true">
            <img
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B0D28]/80 via-[#1B0D28]/60 to-[#1B0D28]/80"></div>
        </div>
        {/* Top and bottom fades like other sections */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1B0D28] via-[#1B0D28]/70 to-transparent z-0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#1B0D28]/70 to-[#1B0D28] z-0" aria-hidden="true" />

        <RevealOnScroll>
            <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4">
                {/* Heading with logo */}
                <div className="flex flex-col items-center text-center mb-10">
                    <img
                        src={`${base}/AmitWeb_logo.png`}
                        alt="AmitWeb logo"
                        className="h-46 sm:h-46 md:h-46 w-auto object-contain mb-4"
                        loading="lazy"
                        decoding="async"
                    />
                    <h2 id="amitweb-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        AmitWeb — Fixed, Fair Price
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-200 text-base sm:text-lg">
                        Modern, conversion‑focused design, built‑in SEO, and ongoing support — designed to start generating leads as early as the first week.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Visual */}
                    <div className="order-1 md:order-none">
                        <div className="rounded-xl border border-white/10 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                            <img
                                src={`${base}/AmitWeb.png`}
                                alt="AmitWeb example website preview"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* Copy */}
                    <div>
                        <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4">What you get</h3>
                            <ul className="space-y-2 text-gray-200">
                                <li>• Responsive, accessible (AA) brochure website</li>
                                <li>• Conversion‑oriented, modern design</li>
                                <li>• Built‑in SEO with proper semantics and metadata</li>
                                <li>• Google Analytics (GA4) and schema markup</li>
                                <li>• Ongoing support: monthly backups, security updates, minor content fixes</li>
                            </ul>
                        </div>
                        <div className="rounded-xl p-6 border border-white/10 mt-4 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-4">Fast, transparent process</h3>
                            <ol className="list-decimal ml-5 space-y-2 text-gray-200">
                                <li>
                                    Info & branding (1–2 days)
                                </li>
                                <li>
                                    Design & professional development (2–3 days)
                                </li>
                                <li>
                                    Deploy, domain setup, testing & basic training (a few hours)
                                </li>
                            </ol>
                        </div>

                        {/* Quick highlights */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["48‑hour delivery","Fixed price","Conversion‑focused","SEO‑ready","Monthly maintenance"].map((t) => (
                                <span key={t} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://amitweb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded font-medium text-center transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                aria-label="Visit AmitWeb website"
                            >
                                Visit AmitWeb <Globe size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/amitweb1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium text-center transition hover:-translate-y-0.5 hover:bg-blue-500/10"
                                aria-label="Follow AmitWeb on Instagram"
                            >
                                Instagram <Instagram size={18} />
                            </a>
                            
                            <a
                                href="#contact"
                                className="border border-white/20 text-white py-3 px-6 rounded font-medium text-center transition hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
);
};
