import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useGetComputers = () => {
  return useQuery({
    queryKey: ["computers"],
    queryFn: () => {
      return request.get("/computers").then((res) => res.data);
    },
  });
};
