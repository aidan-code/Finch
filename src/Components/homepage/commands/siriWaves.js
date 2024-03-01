import React, { useEffect } from "react";
import SiriWave from "siriwave";

const SiriWaves = () => {
  useEffect(() => {
    let source = undefined;
    let taskHandle = 0;
    let spectrum, dBASpectrum;
    let siriWave; // Declare siriWave here

    const energyElement = document.querySelector("#energy");
    const frequencyElement = document.querySelector("#frequency");
    const meanFrequencyElement = document.querySelector("#meanFrequency");
    const maxPowerElement = document.querySelector("#maxPowerFrequency");

    const RA = (f) =>
      (12194 ** 2 * f ** 4) /
      ((f ** 2 + 20.6 ** 2) *
        Math.sqrt((f ** 2 + 107.7 ** 2) * (f ** 2 + 737.9 ** 2)) *
        (f ** 2 + 12194 ** 2));
    const A = (f) => 20 * Math.log10(RA(f)) + 2.0;

    function run() {
      const audioStream = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      const approxVisualisationUpdateFrequency = 5;
      const sampleRate = 48000; // Assuming a default sample rate of 48000 Hz
      const totalNumberOfSamples =
        sampleRate / approxVisualisationUpdateFrequency;

      audioStream.then((stream) => {
        source = new (window.AudioContext ||
          window.webkitAudioContext)().createMediaStreamSource(stream);
        let analyser = new (window.AudioContext ||
          window.webkitAudioContext)().createAnalyser();
        analyser.fftSize = 2 ** Math.floor(Math.log2(totalNumberOfSamples));

        const uint8TodB = (byteLevel) =>
          (byteLevel / 255) * (analyser.maxDecibels - analyser.minDecibels) +
          analyser.minDecibels;

        const weightings = [-100];
        for (let i = 1; i < analyser.frequencyBinCount; i++) {
          weightings[i] = A((i * sampleRate) / 2 / analyser.frequencyBinCount);
        }

        spectrum = new Uint8Array(analyser.frequencyBinCount);
        dBASpectrum = new Float32Array(analyser.frequencyBinCount);

        source.connect(analyser);

        // Create an instance of SiriWave
        siriWave = new SiriWave({
          container: document.querySelector("#visualiser"),
          cover: true,
          height: 400,
          style: "ios9",
        });

        const updateAnimation = function (idleDeadline) {
          taskHandle = requestIdleCallback(updateAnimation, {
            timeout: 1000 / approxVisualisationUpdateFrequency,
          });

          analyser.getByteFrequencyData(spectrum);

          spectrum.forEach((byteLevel, idx) => {
            dBASpectrum[idx] = uint8TodB(byteLevel) + weightings[idx];
          });

          const highestPerceptibleFrequencyBin = dBASpectrum.reduce(
            (acc, y, idx) => (y > -90 ? idx : acc),
            0,
          );
          const totaldBAPower = dBASpectrum.reduce((acc, y) => acc + y);
          const meanFrequencyBin =
            dBASpectrum.reduce((acc, y, idx) => acc + y * idx) / totaldBAPower;
          const highestPowerBin = dBASpectrum.reduce(
            ([maxPower, iMax], y, idx) =>
              y > maxPower ? [y, idx] : [maxPower, iMax],
            [-120, 0],
          )[1];
          const highestDetectedFrequency =
            highestPerceptibleFrequencyBin *
            (sampleRate / 2 / analyser.frequencyBinCount);
          const meanFrequency =
            meanFrequencyBin * (sampleRate / 2 / analyser.frequencyBinCount);
          const maxPowerFrequency =
            highestPowerBin * (sampleRate / 2 / analyser.frequencyBinCount);

          requestAnimationFrame(() => {
            energyElement.textContent = (
              totaldBAPower / analyser.frequencyBinCount
            ).toFixed(2);
            frequencyElement.textContent = highestDetectedFrequency.toFixed(0);
            meanFrequencyElement.textContent = meanFrequency.toFixed(0);
            maxPowerElement.textContent = maxPowerFrequency.toFixed(0);
          });

          let waveForm = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteTimeDomainData(waveForm);
          const amplitude =
            waveForm.reduce((acc, y) => Math.max(acc, y), 128) - 128;
          siriWave.setAmplitude((amplitude / 128) * 10);
        };

        taskHandle = requestIdleCallback(updateAnimation, {
          timeout: 1000 / approxVisualisationUpdateFrequency,
        });
      });
    }

    function stop() {
      cancelIdleCallback(taskHandle);
      source.disconnect();
    }

    run();

    return () => stop();
  }, []);

  return (
    <div>
      <div id="visualiser" />
      <div>
        <p>
          Energy: <span id="energy">0</span>
        </p>
        <p>
          Frequency: <span id="frequency">0</span> Hz
        </p>
        <p>
          Mean Frequency: <span id="meanFrequency">0</span> Hz
        </p>
        <p>
          Max Power Frequency: <span id="maxPowerFrequency">0</span> Hz
        </p>
      </div>
      <button id="stop-button">Stop</button>
    </div>
  );
};

export default SiriWaves;
