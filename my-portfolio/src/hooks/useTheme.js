import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(stored ? stored === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');
    root.classList.toggle('dark', darkMode);
    meta?.setAttribute('content', darkMode ? 'dark light' : 'light dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handle = (e) => {
      if (localStorage.getItem('theme')) return; // Respect user's explicit choice
      setDarkMode(e.matches);
    };
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  return [darkMode, toggleTheme];
};
