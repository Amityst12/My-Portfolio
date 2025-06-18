import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const classList = document.documentElement.classList;
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (darkMode) {
      classList.add('dark');
      meta?.setAttribute('content', 'dark light');
      localStorage.setItem('theme', 'dark');
    } else {
      classList.remove('dark');
      meta?.setAttribute('content', 'light dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handle = (e) => {
      if (localStorage.getItem('theme')) return;
      setDarkMode(e.matches);
    };
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  return [darkMode, setDarkMode];
};
