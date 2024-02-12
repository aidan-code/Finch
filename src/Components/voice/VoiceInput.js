import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponseComponent from "./responseComponent";

const voiceflowApiKey = "VF.DM.659966b38e056e0007a70011.1dVnphfYAFKc04Dl"; // Replace with your actual Voiceflow API key
const userID = "user_123";

const VoiceInput = ({ initialPlaceholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  useEffect(() => {
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
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    // After each response, clear the input and set it back to listening
    setInputValue("");
    setPlaceholder(initialPlaceholder);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
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
    recognition.start();
    return () => {
      recognition.stop();
    };
  }, [outputValue, initialPlaceholder]);

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          className="input-field"
          readOnly // Make input field read-only to prevent manual input
        />
      </div>
      <ResponseComponent response={outputValue} />
    </div>
  );
};

export default VoiceInput;
