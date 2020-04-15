import React from "react";
import "./Demo.css";
import { ThemeContextProvider } from "../contexts/themeContext";
import Example from "../components/Example";

const Demo: React.FunctionComponent = () => {
  return (
    <div className="ext-demo-font">
      <ThemeContextProvider>
        <Example />
      </ThemeContextProvider>
    </div>
  );
};

export default Demo;
