import AssistantLogo from "../Components/text/assistantLogo";
import Input from "../Components/text/input";
import ResponseComponent from "../Components/voice/responseComponent";
import Keyboard from "../Components/text/textButton";
import "./Text.css";

const Text = () => {
  return (
    <div className="Text">
      <Input />
      <AssistantLogo />
      <Keyboard />
      <ResponseComponent />
    </div>
  );
};

export default Text;
