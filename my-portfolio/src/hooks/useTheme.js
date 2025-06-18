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

      meta && meta.setAttribute('content', 'dark light');
      meta && meta.setAttribute('content', 'light dark');
    if (mq.addEventListener) {
      mq.addEventListener('change', handle);
    } else {
      mq.addListener(handle);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handle);
      } else {
        mq.removeListener(handle);
      }
    };
      meta?.setAttribute('content', 'dark light');
    } else {
      classList.remove('dark');
      localStorage.setItem('theme', 'light');
      meta?.setAttribute('content', 'light dark');
    }
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

  return [darkMode, setDarkMode];
};
