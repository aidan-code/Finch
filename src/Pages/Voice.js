import AssistantLogo from "../Components/voice/assistantLogo";
import Input from "../Components/voice/input";
import ResponseComponent from "../Components/voice/responseComponent";
import Keyboard from "../Components/voice/textButton";

import "./Voice.css";

const Voice = () => {
  return (
    <div className="Voice">
      <Input />
      <AssistantLogo />
      <Keyboard />
      <ResponseComponent />
    </div>
  );
};

export default Voice;
