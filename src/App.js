import React from "react";
import "./styles/main.scss";

import useWordGame from "./hooks/useWordGame";

export default function App() {
  const {
    startingTime,
    textBoxRef,
    handleTimerChange,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame();

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />

      <h4>
        Set the timer:
        <input
          type="text"
          value={startingTime}
          onChange={handleTimerChange}
          disabled={isTimeRunning}
        />{" "}
        sec(s)
      </h4>

      <h4>Time remaining: {timeRemaining} sec(s)</h4>

      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>

      <h1>Word count: {wordCount}</h1>
    </div>
  );
}
