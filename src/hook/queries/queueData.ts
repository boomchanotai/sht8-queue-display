import { useQuery } from "@tanstack/react-query";
import { getQueueData } from "../../api/getData";

interface sheetResponse {
  majorDimension: string;
  range: string;
  values: string[][];
}

export const useQueueData = () => {
  return useQuery<sheetResponse>({
    queryKey: ["queueData"],
    queryFn: () =>
      getQueueData("17gVF1Ocy833_kLk3lSCJ0kWYW56LgLyXHOLMm2owZhg", "queue"),
  });
};
