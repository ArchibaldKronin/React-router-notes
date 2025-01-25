import { useContext } from "react";
import { THEME, ThemeContext } from "../context/theme-context";

export default function Header({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={"header"}>
        <h1>{children}</h1>
        <div>
          <i>{`Here's ${theme} now`}</i>
          <button onClick={() => toggleTheme()}>
            {theme === THEME.light ? "Make dark" : "Make light"}
          </button>
        </div>
      </div>
    </>
  );
}
