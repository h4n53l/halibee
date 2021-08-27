import {createContext} from "react";

export const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('current-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  };
  
  export const ThemeContext  = createContext<string | null>(null);