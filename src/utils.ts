import moment from "moment";

export const formatTime = (time: string) => {
  if (!time) return moment();
  const splitTime = time.split(":");
  return moment()
    .startOf("day")
    .add(splitTime[0], "hours")
    .add(splitTime[1], "minutes");
};
