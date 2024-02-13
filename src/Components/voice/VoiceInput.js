import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponseComponent from "./responseComponent";
import keyboardIcon from "../../Assets/keyboard.svg";
import MicIcon from "../../Assets/Mic.svg";
import "./voiceButton.css"; // Import CSS file if necessary

const voiceflowApiKey = "VF.DM.659966b38e056e0007a70011.1dVnphfYAFKc04Dl"; // Replace with your actual Voiceflow API key
const userID = "user_123";

const VoiceInput = ({ initialPlaceholder }) => {
  const [inputMode, setInputMode] = useState("text"); // State to track input mode (text or voice)
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  useEffect(() => {
    if (inputMode === "voice") {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = true; // Set interimResults to true to get interim results
      recognition.maxAlternatives = 1;

      recognition.onresult = async (event) => {
        const interimTranscript = event.results[0][0].transcript;
        setInputValue(interimTranscript);
        setPlaceholder(""); // Clear placeholder when listening

        const response = await axios.post(
          `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
          {
            action: {
              type: "text",
              payload: interimTranscript, // Use interim transcript for interaction
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
      };

      recognition.start(); // Start listening when component mounts

      return () => {
        recognition.stop();
      };
    }
  }, [inputMode]); // Run effect when input mode changes

  const handleMicClick = () => {
    // Handle click event for MicIcon
    // Toggle between text input and voice input mode
    setInputMode(inputMode === "text" ? "voice" : "text");
    setInputValue("");
    setOutputValue("");
    setPlaceholder(initialPlaceholder);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      // Check if Enter key is pressed
      handleSendClick();
    }
  };

  const handleSendClick = async () => {
    try {
      // Send a launch request to start the conversation
      await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        {
          launch: true,
        },
        {
          headers: {
            Authorization: voiceflowApiKey,
          },
        },
      );

      // Send a text request with the user's input
      const response = await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        {
          action: {
            type: "text",
            payload: inputValue,
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

      // Update the output with Voiceflow's response
      setOutputValue(
        response.data[1]?.payload?.message || "No response from Voiceflow",
      );

      // Use a timeout to speak out the second response, if available
      setTimeout(() => {
        setOutputValue(
          response.data[2]?.payload?.message || "No response from Voiceflow",
        );
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        {inputMode === "text" ? (
          <div>
            <div className="input-container">
              <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                className="input-field"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <ResponseComponent response={outputValue} />
          </div>
        ) : (
          <ResponseComponent response={outputValue} />
        )}
      </div>

      <div className="keyboard-frame">
        <div className="keyboard">
          {inputMode === "text" ? (
            <img
              className="mic-icon"
              alt="Solar keyboard bold"
              src={keyboardIcon}
              onClick={handleMicClick}
            />
          ) : (
            <img
              className="mic-icon"
              alt="Solar keyboard bold"
              src={MicIcon}
              onClick={handleMicClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;
