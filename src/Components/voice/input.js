import React from "react";
import "./input.css"; // Import CSS file for styling
import axios from "axios";
import { useState } from "react";
import ResponseComponent from "./responseComponent";

const voiceflowApiKey = "VF.DM.659966b38e056e0007a70011.1dVnphfYAFKc04Dl"; // Replace with your actual Voiceflow API key
const userID = "user_123";

export const Input = ({ placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

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

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      console.log("Enter key pressed");
      // Check if Enter key is pressed
      handleSendClick();
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type={"text"} // Specify input type (e.g., text, email, password)
          placeholder={"'Exchange rate today'"} // Placeholder text for input field
          value={inputValue} // Value of the input field
          onChange={(e) => setInputValue(e.target.value)} // onChange event handler
          onKeyDown={handleKeyDown} // onKeyDown event handler
          className="input-field" // CSS class for styling the input field
        />
      </div>
      <ResponseComponent response={outputValue} />
    </div>
  );
};

export default Input;
