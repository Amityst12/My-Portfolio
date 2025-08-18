import { useEffect, useState, useRef, Suspense, lazy } from "react";
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
const Amitweb = lazy(() =>
  import("./components/sections/Amitweb.jsx").then((m) => ({ default: m.Amitweb }))
);

// Minimal skeleton for lazy sections
const SectionSkeleton = () => (
  <section className="min-h-[60vh] animate-pulse bg-white/[0.02] rounded-2xl mx-4 my-8" />
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const loadStartRef = useRef(0);

  // Close mobile menu with Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Reduce LCP: skip loading screen for reduced motion, or hide on hero image first paint
  useEffect(() => {
    // prefers-reduced-motion: disable loading overlay entirely
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setIsLoaded(true);
      return;
    }

    // If already loaded, no-op
    if (isLoaded) return;

    // Mark loader start time to enforce minimum display duration
    if (!loadStartRef.current) loadStartRef.current = performance.now();

    let done = false;
    const finish = () => {
      if (done) return; done = true;
      const elapsed = performance.now() - loadStartRef.current;
      const minMs = 2000; // enforce 1s minimum display time
      const wait = Math.max(minMs - elapsed, 0);
      setTimeout(() => setIsLoaded(true), wait);
    };

    // Try to hide when hero avatar finishes loading
    const img = document.getElementById('hero-avatar');
    if (img) {
      if (img.complete) {
        // Let the browser paint once before removing overlay
        requestAnimationFrame(finish);
      } else {
        img.addEventListener('load', () => requestAnimationFrame(finish), { once: true });
        img.addEventListener('error', () => setTimeout(finish, 800), { once: true });
      }
    }

    // Fallback cap so we never block longer than 1500ms
  const t = setTimeout(finish, 1500);
    return () => clearTimeout(t);
  }, [isLoaded]);

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
            <Amitweb />
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
