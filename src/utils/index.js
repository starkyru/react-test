const formatSecondsToHHMMSS = (timeInSeconds: number): string => {
  if (!timeInSeconds) return '00:00:00';
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const formatSecondsToMMSS = (timeInSeconds: number): string => {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = Math.floor(timeInSeconds - minutes * 60);

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${minutes}:${seconds}`;
};

export { formatSecondsToHHMMSS, formatSecondsToMMSS };
