import { useState, lazy, Suspense } from 'react';
import './App.css';
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import "./index.css";
import { Navbar } from './components/Navbar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';

const Home = lazy(() => import('./components/sections/Home.jsx'));
const About = lazy(() => import('./components/sections/About.jsx'));
const Projects = lazy(() => import('./components/sections/Projects.jsx'));
const Contact = lazy(() => import('./components/sections/Contact.jsx'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 
  return( 
  <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
      <div 
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0" } bg-black text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Suspense fallback={null}>
            <Home />
          </Suspense>
          <Suspense fallback={null}>
            <About />
          </Suspense>
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
      </div>
  </>
  );
}

export default App
