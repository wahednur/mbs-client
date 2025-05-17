import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpiner from "./../../components/shared/loading/LoadingSpiner";
import FlatCard from "./FlatCard";
const Apartment = () => {
  const axiosCommon = useAxiosCommon();
  const [searchFlat, setSearchFlat] = useState();
  const { data: flats = [], isLoading } = useQuery({
    queryKey: ["flats"],
    queryFn: async () => {
      const { data } = await axiosCommon("/flats");
      return data;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const min = form.min.value;
    const max = form.max.value;

    const { data } = await axiosCommon.get("/searching", {
      params: { min, max },
    });

    setSearchFlat(data);
  };

  const flatMap = searchFlat ?? flats;
  // console.log(searchFlat.length);
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="container">
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSearch}>
          <div className="flex justify-between items-center gap-6">
            <input
              type="number"
              className="frm-ctr"
              placeholder="Minimum price"
              name="min"
            />
            <input
              type="number"
              className="frm-ctr"
              placeholder="Maximum price"
              name="max"
            />
            <button type="submit" className="btn btn-filled h-10">
              <FiSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {flatMap.map((flat) => (
          <FlatCard key={flat?._id} flat={flat} />
        ))}
      </div>
    </div>
  );
};

export default Apartment;
