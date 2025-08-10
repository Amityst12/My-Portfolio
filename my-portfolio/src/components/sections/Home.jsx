import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const base = import.meta.env.BASE_URL || "";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="pt-20 min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          {/* Title */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 
                       bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
                       leading-tight break-words text-center w-full px-2"
          >
            Hi, I'm <span className="text-white drop-shadow-sm">Amit Yehoshaphat</span>
          </h1>

          {/* One-liner */}
          <p className="text-gray-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-center mb-4">
            <span className="font-semibold text-blue-300">Frontend-first</span> full-stack developer. I craft clean <span className="font-semibold text-blue-300">React</span> UIs (RTL & accessibility), wire up <span className="font-semibold text-blue-300">REST</span> with Node/Python, and use <span className="font-semibold text-blue-300">AI</span> to plan, scaffold, and ship faster.
          </p>

          {/* Personality */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto text-center mb-6">
            I love <span className="font-semibold text-blue-400">gaming</span>, exploring new <span className="font-semibold text-blue-400">technologies</span>, and I’m <span className="font-semibold text-blue-400">always improving</span>.
          </p>

          {/* AmitWeb (side business) */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto text-center mb-8">
            I also run <span className="text-blue-400 font-semibold">AmitWeb</span> — a side business where I build fast, SEO-ready websites using <span className="font-semibold text-blue-300">React</span> and <span className="font-semibold text-blue-300">AI</span>.
          </p>

          {/* Quick badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90">
              Open to <b>Frontend</b> roles
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90">
              React · Vite · Tailwind
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90">
              Node · Python · REST
            </span>
          </div>

          {/* Picture */}
          <RevealOnScroll>
            <picture>
              <source
                srcSet={`${base}/mepic_retina_2048.webp`}
                type="image/webp"
              />
              <source
                srcSet={`${base}/mepic_retina_2048.png`}
                type="image/png"
              />
              <img
                src={`${base}/mepic_retina_2048.png`}
                alt="Amit Yehoshaphat – Profile"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full mx-auto mb-8 shadow-lg border border-white/24"
                width="256"
                height="256"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </RevealOnScroll>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              aria-label="View my projects"
            >
              View Projects
            </a>

            {/* kept EXACTLY as requested */}
            <a  href= {`${import.meta.env.BASE_URL}/Resume.pdf`}
                download
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                ↓ My resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              aria-label="Contact me"
            >
              Contact me!
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
