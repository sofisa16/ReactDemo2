import React from "react";
import "../src/Demo.css";
import { useState } from "react";
import ProfilePic from "./ProfilePic";
import { ClassProfilePic } from "./ClassProfilePic";
import useCounter from "../hooks/useCounter";

interface GreetingProps {
  name: string;
}

const Greeting: React.FunctionComponent<GreetingProps> = (
  props: GreetingProps
) => {
  const [name, setName] = useState(props.name);
  const [countNamesChanges, toCount] = useCounter({ b: 0 });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;

    if (key === "Enter") {
      toCount();
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { type } = event;

    if (type === "blur") {
      toCount();
    }
  }

  return (
    <div className="ext-demo-container">
      <div className="ext-demo-item">
        <ProfilePic changeImage={countNamesChanges} name={name} />
        <ClassProfilePic changeImage={countNamesChanges} />
      </div>
      <div className="ext-demo-item ext-demo-profile">
        <div className="ext-demo-font">
          <span>Hi</span>
          <span className="ext-demo-bold">{` ${name}`}</span>
          <span>!</span>
        </div>
        <input
          autoComplete="off"
          placeholder="New name"
          name="name"
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          onChange={handleChange}
          className="ext-demo-row-gap ext-demo-font"
        />
        <div className="ext-demo-row-gap">
          <span className="ext-demo-bold">{`${countNamesChanges}`}</span>
          <span>{` times has the name been changed.`}</span>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
