import { useLayoutEffect, useState } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

type ThemeType = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem('app-theme') as ThemeType) || defaultTheme,
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
