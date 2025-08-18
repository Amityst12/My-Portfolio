import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const base = import.meta.env.BASE_URL || "";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="pt-20 min-h-screen flex items-center justify-center relative scroll-mt-20"
    >
      {/* Full-bleed background image with gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0" aria-hidden="true">
        <img 
          src="https://images.unsplash.com/photo-1722811087953-b745cf16a0c1?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B0D28]/80 via-[#1B0D28]/60 to-[#1B0D28]/80"></div>
      </div>
      {/* Top fade to blend from previous section */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1B0D28] via-[#1B0D28]/70 to-transparent z-0"
        aria-hidden="true"
      />
      {/* Subtle bottom fade to smooth transition into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#1B0D28]/70 to-[#1B0D28] z-0"
        aria-hidden="true"
      />
      <RevealOnScroll>
  <div className="text-center z-10 px-3 sm:px-4 max-w-3xl mx-auto">
          {/* Title */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 
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
            I also run <span className="text-blue-400 font-semibold">AmitWeb</span> — as a freelancer, I build fast, SEO-ready websites using <span className="font-semibold text-blue-300">React</span> and <span className="font-semibold text-blue-300">AI</span>.
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
                id="hero-avatar"
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
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 px-1">
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
