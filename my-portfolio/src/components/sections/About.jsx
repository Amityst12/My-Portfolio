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
      className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="about-title"
              className="text-4xl md:text-5xl font-extrabold mb-8
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
