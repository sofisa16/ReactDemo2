import React from "react";
import { useState } from "react";

const ThemeContext = React.createContext(undefined);

const ThemeContextProvider: React.FunctionComponent = (props: any) => {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(prevTheme => {
      return prevTheme === "light" ? "dark" : "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
