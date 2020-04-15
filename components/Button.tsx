import React from "react";
import "../src/Demo.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Button: React.FunctionComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`ext-demo-${theme}-theme ext-demo-theme-btn`}
    >
      Toggle Theme
    </button>
  );
};

export default Button;
