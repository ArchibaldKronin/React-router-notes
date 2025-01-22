import { createContext, useState } from "react";

export const THEME = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME.light);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === THEME.light ? THEME.dark : THEME.light
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
