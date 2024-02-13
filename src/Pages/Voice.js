import AssistantLogo from "../Components/voice/assistantLogo";
import VoiceInput from "../Components/voice/VoiceInput";
import ResponseComponent from "../Components/voice/responseComponent";
// import Mic from "../Components/voice/voiceButton";

import "./Voice.css";

const Voice = () => {
  return (
    <div className="Voice">
      <VoiceInput />
      <AssistantLogo />
      {/* <Mic /> */}
      <ResponseComponent />
    </div>
  );
};

export default Voice;
