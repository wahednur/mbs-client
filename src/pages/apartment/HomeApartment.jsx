import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../components/shared/loading/LoadingSpiner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import FlatCard from "./FlatCard";

const HomeApartment = () => {
  const axiosCommon = useAxiosCommon();
  const { data: flats = [], isLoading } = useQuery({
    queryKey: ["flats"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/flats");
      return data;
    },
  });
  console.log(flats);
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary font-poppins">
          Recently Added Flats
        </h2>
        <p className="text-gray-600 mt-2 text-xl font-bold font-poppins">
          Check out the most recent flat listings available for rent in your
          area.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {flats.flats.slice(0, 6).map((flat) => (
          <FlatCard key={flat?._id} flat={flat} />
        ))}
      </div>
    </div>
  );
};

export default HomeApartment;
