import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import LoadingSpiner from "../../../../components/shared/loading/LoadingSpiner";
import DashSiteTitle from "../../../../components/shared/site-title/DashSiteTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ApartmentList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/apartments/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="w-full bg-white p-5 overflow-auto">
      <DashSiteTitle title={`Apartment List`} />
      <table className="overflow-x-auto w-full">
        <thead className=" bg-primary text-white">
          <tr className="flex  w-full text-left gap-2 p-2 items-center">
            <th className="w-12">SN</th>
            <th className="flex-1">Name</th>
            <th className="sm-w">City Corporation</th>
            <th className="sm-w">Area</th>
            <th className="sm-w">Road</th>
            <th className="sm-w">Total Flat</th>
            <th className="sm-w">Availabe Flat</th>
            <th className="sm-w">Garage No</th>
            <th className="sm-w">Availabe Garage</th>
            <th className="sm-w">Action</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {apartments.length > 0 ? (
            <>
              {apartments.map((app, idx) => (
                <tr
                  className="flex w-full text-left gap-2 even:bg-gray-100 justify-center items-center p-2"
                  key={app._id}
                >
                  <td className="w-12">{idx + 1}</td>
                  <td className="flex-1">{app.name}</td>
                  <td className="sm-w">{app?.cityCorp}</td>
                  <td className="sm-w">{app?.area}</td>
                  <td className="sm-w">{app?.road}</td>
                  <td className="sm-w">{app?.totalFlats}</td>
                  <td className="sm-w">
                    {app?.availableFlat ? app?.availableFlat : app?.totalFlats}
                  </td>
                  <td className="sm-w">{app?.garage}</td>
                  <td className="sm-w">{app?.garage}</td>
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
            </>
          ) : (
            <tr>
              <td className="col-span-7 w-full d-vh flex justify-center items-center">
                No Apartment Added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentList;
