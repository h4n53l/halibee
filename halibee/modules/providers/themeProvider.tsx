import { useEffect, useState } from "react";
import { getInitialTheme, ThemeContext } from "../contexts/themeContext";

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
  
    const checkTheme = (existing) => {
      const root = window.document.documentElement;
      const isDark = existing === 'dark';
  
      root.classList.remove(isDark ? 'light' : 'dark');
      root.classList.add(existing);
  
      localStorage.setItem('current-theme', existing);
    };
  
    if (initialTheme) {
      checkTheme(initialTheme);
    }
  
    useEffect(() => {
      checkTheme(theme);
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };