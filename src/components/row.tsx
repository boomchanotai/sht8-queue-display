import moment from "moment";
import { useEffect, useState } from "react";

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
  const [isCurrent, setIsCurrent] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = formatTime(start);
      const endTime = formatTime(end);
      const currentTime = moment();

      setIsCurrent(currentTime.isBetween(startTime, endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [end, start]);

  const formatTime = (time: string) => {
    const splitTime = time.split(":");
    return moment()
      .startOf("day")
      .add(splitTime[0], "hours")
      .add(splitTime[1], "minutes");
  };

  return (
    <div
      key={index + name}
      className={`grid grid-cols-12 gap-6 py-1 px-4 ${
        isCurrent ? "bg-green-200" : "even:bg-gray-50"
      }`}
    >
      <div>{index + 1}</div>
      <div>{formatTime(start).format("HH:mm")}</div>
      <div>{formatTime(end).format("HH:mm")}</div>
      <div className="col-span-9">{name}</div>
    </div>
  );
};
