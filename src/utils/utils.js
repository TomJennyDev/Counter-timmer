const padNumber = (number, targetLength) => {
  return number.toString().padStart(targetLength, 0);
};

export const formatTime = (time) => {
  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time % 3600) / 60);
  const getSeconds = Math.floor((time % 3600) % 60);

  return `${padNumber(getHours,2)} : ${padNumber(getMinutes,2)} : ${padNumber(getSeconds,2)}`;
};
