import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import LoadingSpiner from "../../../../components/shared/loading/LoadingSpiner";
import DashSiteTitle from "../../../../components/shared/site-title/DashSiteTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const FlatList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: flats = [], isLoading } = useQuery({
    queryKey: ["flats", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/flats/${user?.email}`);
      return data;
    },
    // enabled: user?.email,
  });
  console.log(flats);
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="w-full bg-white p-5 overflow-auto">
      <DashSiteTitle title={`Apartment List`} />
      <table className="overflow-x-auto w-full">
        <thead className=" bg-primary text-white">
          <tr className="flex  w-full text-left gap-2 p-2 items-center">
            <th className="w-12">SN</th>
            <th className="flex-1">Apartment Name</th>
            <th className="sm-w">City Corporation</th>
            <th className="sm-w">Area</th>
            <th className="sm-w">Road</th>
            <th className="sm-w">Flat No</th>
            <th className="sm-w">Availabe Flat</th>
            <th className="sm-w">Garage No</th>
            <th className="sm-w">Availabe Garage</th>
            <th className="sm-w">Action</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {flats.map((flat, idx) => (
            <tr
              className="flex w-full text-left gap-2 even:bg-gray-100 justify-center items-center p-2"
              key={flat._id}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="flex-1">{flat?.apartment.name}</td>
              <td className="sm-w">{flat?.apartment?.cityCorp}</td>
              <td className="sm-w">{flat?.apartment?.area}</td>
              <td className="sm-w">{flat?.apartment?.road}</td>
              <td className="sm-w">{flat?.apartment?.flatQty}</td>
              <td className="sm-w">{flat?.apartment?.flatQty}</td>
              <td className="sm-w">{flat?.apartment?.garage}</td>
              <td className="sm-w">{flat?.apartment?.garage}</td>
              <td className="sm-w">
                <div className="flex text-white">
                  <button className="flex justify-center items-center px-4 py-2 bg-primary hover:bg-secondary duration-300 cursor-pointer">
                    <FaEdit />
                  </button>
                  <button className="flex justify-center items-center px-4 py-2 bg-red-500 hover:bg-secondary duration-300 cursor-pointer">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlatList;
