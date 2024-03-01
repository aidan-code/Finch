import React from "react";
import "./finchCommand.css";
import menuIcon from "../../Assets/menus.svg";
import MicIcon from "../../Assets/Mic.svg";
import VoiceCommand from "./commands/voiceCommand";
import SiriWaves from "./commands/siriWaves";

export const FinchCommand = () => {
  return (
    <div className="Quick">
      <div>
        <VoiceCommand />
        <SiriWaves />
      </div>
      <div className="mic">
        <img className="mic-icon" alt="Microphone" src={MicIcon} />
      </div>

      <div className="hding">
        <p>Quick actions</p>
        <img src={menuIcon} alt="menu" />
      </div>
      <div className="btn-ss">
        <button>Transfer</button>
        <button>Pay a bill</button>
        <button>Security Center</button>
      </div>
    </div>
  );
};
export default FinchCommand;
