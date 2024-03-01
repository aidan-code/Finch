import React, { useState } from "react";
import SiriWave from "siriwave";

const SiriWaves = () => {
  const [isListening, setIsListening] = useState(false);
  const [siriWave, setSiriWave] = useState(null);

  const startListening = () => {
    setIsListening(true);

    // Initialize speech recognition
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = () => {
      console.log("Speech recognition started");
      setSiriWave(
        new SiriWave({
          container: document.getElementById("wave-container"),
          cover: true,
          height: 100,
          style: "ios9",
        }),
      );
      siriWave.start();
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Transcript:", transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      stopListening();
    };
    recognition.onend = () => {
      console.log("Speech recognition ended");
      stopListening();
    };
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    if (siriWave) {
      siriWave.stop();
    }
  };

  return (
    <div className="speech-container">
      <div
        id="wave-container"
        className={`siri-wave ${isListening ? "active" : ""}`}
      />
      <button className="speech-button" onClick={startListening}>
        {isListening ? "Listening..." : "Start Listening"}
      </button>
    </div>
  );
};
export default SiriWaves;
