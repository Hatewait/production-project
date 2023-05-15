import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext} from 'react';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {

  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME;
    setTheme(currentTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  }

  return {theme, toggleTheme}
}