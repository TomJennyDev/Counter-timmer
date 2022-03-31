import { useRef, useState } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const splitTimeList = useRef([]);

  const refInterval = useRef(0);
  const active = useRef();
  const activeSplit = useRef();

  const startTimer = () => {
    if (!refInterval.current) {
      refInterval.current = setInterval(
        () => setTime((time) => time + 1),
        1000
      );
    }
    active.current.disabled = true;
    activeSplit.current.disabled = false;
  };

  const stopTimer = () => {
    clearInterval(refInterval.current);
    refInterval.current = null;

    active.current.disabled = false;
    activeSplit.current.disabled = true;
  };

  const resetTimer = () => {
    setTime(0);
    splitTimeList.current = [];

    clearInterval(refInterval.current);
    refInterval.current = null;

    activeSplit.current.disabled = true;
    active.current.disabled = false;
  };

  const splitTimer = () => {
    if (time >= 1 && refInterval.current) {
      splitTimeList.current = [...splitTimeList.current, time];
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitTimeList,
    active,
    activeSplit,
  };
};
export default useTimer;
