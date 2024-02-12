import React from "react";
import "./textButton.css";
import MicIcon from "../../Assets/Mic.svg";

export const Keyboard = () => {
  return (
    <div className="mic-frame">
      <div className="mic">
        <img className="microphone-bold" alt="microphone bold" src={MicIcon} />
      </div>
    </div>
  );
};

export default Keyboard;
