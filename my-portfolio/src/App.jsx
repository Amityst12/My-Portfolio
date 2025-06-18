import { useState, useEffect } from 'react';
import './App.css'
import { LoadingScreen}  from "./components/LoadingScreen.jsx";
import "./index.css"
import { Navbar } from './components/Navbar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { Home } from './components/sections/Home.jsx';
import { About } from './components/sections/About.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-white text-gray-800 dark:bg-black dark:text-gray-100`}
      >
        <header>
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            theme={theme}
            setTheme={setTheme}
          />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App
