import React from "react";
import "./textButton.css";
import keyboardIcon from "../../Assets/keyboard.svg";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Keyboard = () => {
  return (
    <div className="keyboard-frame">
      <div className="keyboard">
        <img
          className="solar-keyboard-bold"
          alt="Solar keyboard bold"
          src={keyboardIcon}
        />
      </div>
    </div>
  );
};

export default Keyboard;
