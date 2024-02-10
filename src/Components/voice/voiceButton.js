import React from "react";
import "./voiceButton.css";
import MicIcon from "../../Assets/Mic.svg";

export const Mic = () => {
  return (
    <div className="mic-frame">
      <div className="mic">
        <img className="mic-icon" alt="Solar keyboard bold" src={MicIcon} />
      </div>
    </div>
  );
};

export default Mic;
