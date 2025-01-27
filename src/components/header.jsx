import { useContext, useEffect } from "react";
import { THEME, ThemeContext } from "../context/theme-context";

export default function Header({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  useEffect(() => {
    if (theme === THEME.dark) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [theme]);

  return (
    <>
      <div className={"header"}>
        <h1>{children}</h1>
        <div>
          <button onClick={() => toggleTheme()}>
            {theme === THEME.light ? "Make dark" : "Make light"}
          </button>
        </div>
      </div>
    </>
  );
}
