import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAreaSearch = ({ area }) => {
  const axiosCommon = useAxiosCommon();
  const { data: areas = [] } = useQuery({
    queryKey: ["areas", area],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/area/${area}`);
      return data;
    },
  });

  return [areas];
};

export default useAreaSearch;
