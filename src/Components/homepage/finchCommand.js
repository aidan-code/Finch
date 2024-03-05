// import React, { useState } from "react";
// import "./finchCommand.css";
// import menuIcon from "../../Assets/menus.svg";
// import MicIcon from "../../Assets/Mic.svg";
// import VoiceCommand from "./commands/voiceCommand";
// import SpeechWave from "./commands/siriWaves";

// export const FinchCommand = () => {
//   const [isMicClicked, setIsMicClicked] = useState(false);

//   const toggleMic = () => {
//     setIsMicClicked(!isMicClicked);
//   };

//   return (
//     <div className="Quick">
//       <div>
//         {isMicClicked && <VoiceCommand />}
//         {isMicClicked && <SpeechWave />}
//       </div>
//       <div className="mic" onClick={toggleMic}>
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
import SpeechWave from "./commands/siriWaves";

export const FinchCommand = () => {
  const [isMicClicked, setIsMicClicked] = useState(false);

  const toggleMicClick = () => {
    setIsMicClicked(!isMicClicked);
  };

  return (
    <div className="Quick">
      <div>{isMicClicked && <VoiceCommand />}</div>
      <div className="mic">
        <img
          className="mic-icon"
          alt="Microphone"
          src={MicIcon}
          onClick={toggleMicClick}
        />
      </div>
      <div>{isMicClicked && <SpeechWave />}</div>

      {!isMicClicked && (
        <div className="hding">
          <p>Quick actions</p>
          <img src={menuIcon} alt="menu" />
        </div>
      )}

      <div className="btn-ss">
        {!isMicClicked && (
          <>
            <button>Transfer</button>
            <button>Pay a bill</button>
            <button>Security Center</button>
          </>
        )}
      </div>
    </div>
  );
};

export default FinchCommand;
