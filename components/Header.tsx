import React from "react";
import "../src/Demo.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Header: React.FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`ext-demo-${theme}-theme ext-demo-header`}>
      <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
    </header>
  );
};

export default Header;
