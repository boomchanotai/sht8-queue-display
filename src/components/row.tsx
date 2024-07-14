import moment from "moment";
import { useEffect, useState } from "react";
import { formatTime } from "../utils";

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

  return (
    <div
      key={index + name}
      className={`grid grid-cols-6 gap-6 py-1 px-4 ${
        isCurrent ? "bg-green-200" : "even:bg-gray-50"
      }`}
    >
      <div>{index + 1}</div>
      <div>{formatTime(start).format("HH:mm")}</div>
      <div>{formatTime(end).format("HH:mm")}</div>
      <div className="col-span-3">{name}</div>
    </div>
  );
};
