import { useQueueData } from "../hook/queries/queueData";
import { Row } from "./row";

export const Queue = () => {
  const queueData = useQueueData();

  if (queueData.isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="font-bold">Overview</h1>
        <div>
          <div className="grid grid-cols-6 gap-6 even:bg-gray-50 py-1 px-4">
            <div>#</div>
            <div>Start</div>
            <div>End</div>
            <div>Team</div>
          </div>
          {queueData.data?.values.slice(2).map((row, index) => (
            <Row index={index} start={row[1]} end={row[2]} name={row[6]} />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="font-bold">Team</h1>
        <div>
          <div className="grid grid-cols-12 gap-6 even:bg-gray-50 py-1 px-4">
            <div>#</div>
            <div>Start</div>
            <div>End</div>
            <div>Team</div>
          </div>
          {queueData.data?.values
            .slice(2)
            .filter((item) => item[5] == "Team")
            .map((row, index) => (
              <Row index={index} start={row[1]} end={row[2]} name={row[6]} />
            ))}
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="font-bold">Sponsor</h1>
        <div>
          <div className="grid grid-cols-6 gap-6 even:bg-gray-50 py-1 px-4">
            <div>#</div>
            <div>Start</div>
            <div>End</div>
            <div>Sponsor</div>
          </div>
          {queueData.data?.values
            .slice(2)
            .filter((item) => item[5] == "Sponsor")
            .map((row, index) => (
              <Row index={index} start={row[1]} end={row[2]} name={row[6]} />
            ))}
        </div>
      </div>
    </div>
  );
};
