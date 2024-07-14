import moment from "moment";

export const Row = ({
  index,
  start,
  end,
  name,
}: {
  index: number;
  start: string;
  end: string;
  name: string;
}) => {
  const formatTime = (time: string) => {
    const splitTime = time.split(":");
    return moment()
      .startOf("day")
      .add(splitTime[0], "hours")
      .add(splitTime[1], "minutes");
  };

  const isCurrent = (start: string, end: string) => {
    const startTime = formatTime(start);
    const endTime = formatTime(end);
    const currentTime = moment();

    return currentTime.isBetween(startTime, endTime);
  };

  return (
    <div
      key={index + name}
      className={`grid grid-cols-12 gap-6 py-1 px-4 ${
        isCurrent(start, end) ? "bg-green-200" : "even:bg-gray-50"
      }`}
    >
      <div>{index + 1}</div>
      <div>{formatTime(start).format("HH:mm")}</div>
      <div>{formatTime(end).format("HH:mm")}</div>
      <div className="col-span-9">{name}</div>
    </div>
  );
};
