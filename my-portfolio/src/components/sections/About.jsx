import { RevealOnScroll } from "../RevealOnScroll";

/* ---------- Chips helper ---------- */
const Tag = ({ children }) => (
  <span
    className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm
               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
               border border-white/10 transition"
  >
    {children}
  </span>
);

/* ---------- Data (outside component = less re-renders) ---------- */
const frontendSkills = ["React", "JavaScript", "TailwindCSS", "HTML", "Accessibility", "RTL"];
const backendSkills  = ["Node.js", "Python", "REST APIs", "SQL", "JSON", "EmailJS"];
const otherSkills    = ["Git/GitHub", "VS Code", "Debugging", "Problem Solving", "Object-Oriented Programming"];
const hobbies        = ["Working out", "Reading", "Gaming", "Building", "Overcoming challenges", "Collecting"];
const courses        = [
  "OOP",
  "Data Structures",
  "Database Systems",
  "Operating Systems",
  "Computer Networking",
  "Software Engineering",
  "C Programming",
  "Data Science",
  "ML"
];

export const About = () => {
  return (
    <section id="about" aria-labelledby="about-title"
      className="relative min-h-screen flex items-center justify-center py-20 scroll-mt-20">
      {/* Full-bleed background image with gradient overlay (matches Home) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1755095901325-637deba5b2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B0D28]/80 via-[#1B0D28]/60 to-[#1B0D28]/80"></div>
      </div>
  {/* Top fade to blend from previous section */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1B0D28] via-[#1B0D28]/70 to-transparent z-0" aria-hidden="true" />
      {/* Decorative accent circle (requested) */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#2FE6DE] to-[#59E3FF] rounded-full opacity-80 z-0" aria-hidden="true"></div>
      {/* Subtle bottom fade to smooth transition into next section (matches Home) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#1B0D28]/70 to-[#1B0D28] z-0" aria-hidden="true" />
      <RevealOnScroll>
  <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4">
      <h2 id="about-title"
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8
                         bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent
                         text-center">
            Just a bit more
          </h2>

          {/* Intro / personality */}
          <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-200 text-3xl text-center font-semibold mb-1">
              Less noise, more purpose — that’s my motto.
            </p>
          </div>

          {/* Skills & Courses & Hobbies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 sm:mt-8">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Completed Courses</h3>
              <div className="flex flex-wrap gap-2">
                {courses.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>

            {/* Optional: Other skills (kept concise) */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Sc. in Computer Science (in progress)</strong> — Holon Institute of Technology (2023–2026)
                </li>
                <li>
                  <strong>High school diploma</strong> — 10 units in Computer Science & Software Engineering (2017–2020)
                </li>
                <li>
                  <strong>Operational Digital Communications Course</strong> — tactical communication systems & field operations (2021)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">📂 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">Operational Digital Communications Specialist (2020 – Reserves)</h4>
                  <p>Responsible for tactical radio systems, real-time field communications, monitoring, and incident response.</p>
                </div>
                <div>
                  <h4 className="font-bold">Event Manager — Celia (2022 – 2024)</h4>
                  <p>Planned and ran events, managed staff & vendors, ensured on-time delivery and client satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
