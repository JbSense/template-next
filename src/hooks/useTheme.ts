'use client';

export const useTheme = () => {
  const theme = localStorage.getItem('theme');

  const setTheme = (newTheme: 'light' | 'dark') => {
    localStorage.setItem('theme', `theme-${newTheme}`);
  };

  return {
    theme,
    setTheme
  };
};
