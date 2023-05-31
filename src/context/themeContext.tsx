'use client';

import React, { createContext, useState } from 'react';

type ThemeContextProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeStorage = localStorage.getItem('theme');

  const [theme, setThemeState] = useState(
    themeStorage !== null ? themeStorage : 'theme-dark'
  );

  const setTheme = (newTheme: string) => {
    localStorage.setItem('theme', `theme-${newTheme}`);
    setThemeState(`theme-${newTheme}`);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
