import React from "react";
import "./App.css";
import SplitTime from "./components/SplitTime";
import useTimer from "./hook/useTimer";
import { formatTime } from "./utils/utils";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitTimeList,
    active,
    activeSplit,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            <i className="fa-solid fa-stop"></i>
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            <i className="fa-solid fa-play"></i>
          </button>
          <button className="button" onClick={resetTimer}>
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
          <button className="button" ref={activeSplit} onClick={splitTimer}>
            <i className="fa-solid fa-flag"></i>
          </button>
        </div>
      </div>
      <div className="split__wrapper timer__wrapper ">
        <SplitTime splitTimeList={splitTimeList.current} />
      </div>
    </div>
  );
}

export default App;
