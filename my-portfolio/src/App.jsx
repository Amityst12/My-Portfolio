import { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { Home } from "./components/sections/Home.jsx";

// Lazy-load sections with named exports
const About = lazy(() =>
  import("./components/sections/About.jsx").then((m) => ({ default: m.About }))
);
const Projects = lazy(() =>
  import("./components/sections/Projects.jsx").then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import("./components/sections/Contact.jsx").then((m) => ({ default: m.Contact }))
);

// Minimal skeleton for lazy sections
const SectionSkeleton = () => (
  <section className="min-h-[60vh] animate-pulse bg-white/[0.02] rounded-2xl mx-4 my-8" />
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu with Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Skip link for accessibility */}
      <a
        href="#home"
        className="fixed left-3 top-3 -translate-y-20 focus:translate-y-0 transition-transform
                   bg-blue-600 text-white px-3 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div
        className={`
          min-h-screen bg-black text-gray-100
          transition-opacity duration-700 motion-reduce:transition-none
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <Home />
          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
