// import React from "react";
// import "./finchCommand.css";
// import menuIcon from "../../Assets/menus.svg";
// import MicIcon from "../../Assets/Mic.svg";
// import VoiceCommand from "./commands/voiceCommand";
// import SiriWave from "siriwave";

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

// import React, { useState, useEffect } from "react";
// import SiriWave from "siriwave";
// import VoiceCommand from "./commands/voiceCommand";
// import MicIcon from "../../Assets/Mic.svg";

// const FinchCommand = () => {
//   const [isMicClicked, setIsMicClicked] = useState(false);
//   const [siriWave, setSiriWave] = useState(null);

//   useEffect(() => {
//     if (isMicClicked) {
//       const wave = new SiriWave({
//         container: document.getElementById("siri-container"),
//         style: "ios9", // Set style to iOS 9
//         color: "#15,82,169", // Set color to blue (example)
//         width: 640,
//         height: 200,
//       });
//       wave.start();
//       setSiriWave(wave);
//     } else {
//       // Dispose the SiriWave instance when mic is not clicked
//       siriWave?.dispose();
//       setSiriWave(null);
//     }
//   }, [isMicClicked]);

//   const handleMicClick = () => {
//     setIsMicClicked(!isMicClicked);
//   };

//   return (
//     <div className="Quick">
//       <div>
//         {isMicClicked && (
//           <div id="siri-container" style={{ width: "50px", height: "50px" }} />
//         )}
//         {isMicClicked && <VoiceCommand />}
//       </div>
//       <div className="mic" onClick={handleMicClick}>
//         <img className="mic-icon" alt="Microphone" src={MicIcon} />
//       </div>

//       <div className="hding">
//         <p>Quick actions</p>
//         {/* Add menu icon */}
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
