import React from "react";
import "../src/Demo.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import Header from "./Header";
import Button from "./Button";
import Greeting from "./Greeting";

const App: React.FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`ext-demo-layout ext-demo-${theme}-theme-background`}>
      <Header />
      <Button />
      <Greeting name="James Bond" />
    </div>
  );
};

export default App;
