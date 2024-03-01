// import React from "react";
// import "./finchCommand.css";
// import menuIcon from "../../Assets/menus.svg";
// import MicIcon from "../../Assets/Mic.svg";
// import VoiceCommand from "./commands/voiceCommand";

// export const FinchCommand = () => {
//   return (
//     <div className="Quick">
//       <div>
//         <VoiceCommand />
//       </div>
//       <div className="mic">
//         <img className="mic-icon" alt="Microphone" src={MicIcon} />
//       </div>

//       <div className="hding">
//         <p>Quick actions</p>
//         <img src={menuIcon} alt="menu" />
//       </div>
//       <div className="btn-ss">
//         <button>Transfer</button>
//         <button>Pay a bill</button>
//         <button>Security Center</button>
//       </div>
//     </div>
//   );
// };
// export default FinchCommand;

import React, { useState } from "react";
import "./finchCommand.css";
import menuIcon from "../../Assets/menus.svg";
import MicIcon from "../../Assets/Mic.svg";
import VoiceCommand from "./commands/voiceCommand";

export const FinchCommand = () => {
  const [isVoiceInputActive, setIsVoiceInputActive] = useState(false);

  const handleMicClick = () => {
    setIsVoiceInputActive(!isVoiceInputActive);
  };

  return (
    <div className="Quick">
      <div>
        {isVoiceInputActive && <VoiceCommand />}{" "}
        {/* Show VoiceCommand component only when isVoiceInputActive is true */}
      </div>
      <div className="mic" onClick={handleMicClick}>
        {" "}
        {/* Call handleMicClick when mic icon is clicked */}
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
