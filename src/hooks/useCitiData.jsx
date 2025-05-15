import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useCitiData = () => {
  const axiosCommon = useAxiosCommon();
  const { data: cities = [], isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/cities");
      return data;
    },
  });
  return [cities, isLoading];
};

export default useCitiData;
