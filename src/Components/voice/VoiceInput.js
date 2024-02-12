import React from "react";
import "./VoiceInput.css"; // Import CSS file for styling
import axios from "axios";
import { useState, useEffect } from "react";
import ResponseComponent from "./responseComponent";

const voiceflowApiKey = "VF.DM.659966b38e056e0007a70011.1dVnphfYAFKc04Dl"; // Replace with your actual Voiceflow API key
const userID = "user_123";

export const VoiceInput = ({ placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);

      const response = await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        {
          action: {
            type: "text",
            payload: transcript,
          },
          config: {
            tts: true,
            stripSSML: true,
            stopAll: true,
            excludeTypes: ["block", "debug", "flow"],
          },
        },
        {
          headers: {
            Authorization: voiceflowApiKey,
          },
        },
      );

      const message =
        response.data[1]?.payload?.message || "No response from Voiceflow";
      setOutputValue(message);

      setTimeout(() => {
        const secondMessage =
          response.data[2]?.payload?.message || "No response from Voiceflow";
        setOutputValue(secondMessage);
      }, 2000);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [userID, voiceflowApiKey]);

  return (
    <div>
      <div className="input-container">
        <input
          type={"text"} // Specify input type (e.g., text, email, password)
          placeholder={"'Exchange rate today'"} // Placeholder text for input field
          value={inputValue} // Value of the input field
          className="input-field" // CSS class for styling the input field
        />
      </div>
      <ResponseComponent response={outputValue} />
    </div>
  );
};

export default VoiceInput;
