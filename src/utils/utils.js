const padNumber = (number, targetLength) => {
  return number.toString().padStart(targetLength, 0);
};

export const formatTime = (time) => {
  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time % 3600) / 60);
  const getSeconds = Math.floor((time % 3600) % 60);

  return `${padNumber(getHours, 2)} : ${padNumber(getMinutes, 2)} : ${padNumber(
    getSeconds,
    2
  )}`;
};

export const calculateLapTime = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) return;
  const arrLapTime = [...arr].reduce((acc, curr, index, arr) => {
    if (arr.length === 1 || index === 0) {
      acc[index] = { lapTime: curr, totalTime: curr };
    } else if (index > 0) {
      acc[index] = { lapTime: curr - arr[index - 1], totalTime: curr };
    }
    return acc;
  }, []);
  return arrLapTime;
};
