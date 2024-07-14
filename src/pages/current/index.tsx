import moment from "moment";
import { useQueueData } from "../../hook/queries/queueData";
import { formatTime } from "../../utils";

const Index = () => {
  const queueData = useQueueData();

  if (queueData.isFetching) {
    return <div>Loading...</div>;
  }

  const currentQueue = queueData.data?.values.slice(2).filter((item) => {
    const startTime = formatTime(item[1]);
    const endTime = formatTime(item[2]);
    const currentTime = moment();

    return currentTime.isBetween(startTime, endTime);
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center border-b border-black">
      {currentQueue && currentQueue?.length > 0 && (
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
