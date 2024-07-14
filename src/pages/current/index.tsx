import moment from "moment";
import { useQueueData } from "../../hook/queries/queueData";
import { formatTime } from "../../utils";
import { useEffect, useState } from "react";

const Index = () => {
  const queueData = useQueueData();

  const [currentQueue, setSurrentQueue] = useState<string[] | undefined>(
    undefined
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const current = queueData.data?.values.slice(2).filter((item) => {
        const startTime = formatTime(item[1]);
        const endTime = formatTime(item[2]);
        const currentTime = moment();

        return currentTime.isBetween(startTime, endTime);
      });

      if (!current) return;

      setSurrentQueue(current[0]);
    }, 1000);

    return () => clearInterval(interval);
  }, [queueData.data?.values]);

  if (queueData.isFetching) {
    return <div>Loading...</div>;
  }

  if (!currentQueue) {
    return <div>No current queue</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center border-b border-black">
      {currentQueue && (
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-gray-500 font-bold">Current Team</div>
          <div className="font-bold text-7xl">{currentQueue[0][6]}</div>
          <div className="text-green-700 font-medium">
            {formatTime(currentQueue[0][1]).format("HH:mm")} -{" "}
            {formatTime(currentQueue[0][2]).format("HH:mm")}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
