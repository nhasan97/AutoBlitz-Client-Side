const useCurrentTime = () => {
  const date = new Date();
  let hour = date.getHours();
  const amPm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  const minutes = date.getMinutes();

  const time = hour + ":" + minutes + amPm;
  return time;
};

export default useCurrentTime;
