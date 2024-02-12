import React from "react";
import "./voiceButton.css";
import keyboardIcon from "../../Assets/keyboard.svg";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Mic = () => {
  return (
    <div className="keyboard-frame">
      <div className="keyboard">
        <img
          className="mic-icon"
          alt="Solar keyboard bold"
          src={keyboardIcon}
        />
      </div>
    </div>
  );
};

export default Mic;
