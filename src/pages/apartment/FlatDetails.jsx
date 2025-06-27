import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSpiner from "../../components/shared/loading/LoadingSpiner";
import { axiosCommon } from "../../hooks/useAxiosCommon";

const FlatDetails = () => {
  const { id } = useParams();

  const { data: flat = {}, isLoading } = useQuery({
    queryKey: ["flat", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/flats-details/${id}`);
      return data;
    },
  });

  const apartment = flat?.apartment;
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="container mt">
      <h2 className="text-3xl font-bold font-poppins">Apartment Information</h2>
      <hr className=" my-6 block w-full text-gray-500" />
      <div className="flex justify-between flex-col md:flex-row gap-8">
        <div className="order-2 md:order-1 w-full md:w-7/12">
          <div className=" ">
            <h2 className="text-xl">
              Apartment Name:{" "}
              <span className="font-bold">{apartment?.name}</span>
            </h2>

            <div className="mt-6">
              <p className="bg-white text-lg font-semibold">Address</p>
              <div className="flex flex-col md:flex-row gap-6">
                <p>
                  Area: <span className="font-semibold">{apartment?.area}</span>
                </p>
                <p>
                  Road: <span className="font-semibold">{apartment?.road}</span>
                </p>
                <p>
                  Apartment No:{"  "}
                  <span className="font-semibold">
                    {apartment?.apartmentNo}
                  </span>
                </p>
              </div>
              <hr className=" my-4 block w-full text-gray-400" />
            </div>
            <div className="mt-6">
              <p className="bg-white text-lg font-semibold">Apartment Status</p>
              <div className="flex flex-col md:flex-row gap-6">
                <p>
                  Gas: <span className="font-semibold">{apartment?.gas}</span>
                </p>
                <p>
                  electricity :{" "}
                  <span className="font-semibold">
                    {apartment?.electricity}
                  </span>
                </p>
                <p>
                  Generator:{"  "}
                  <span className="font-semibold">{apartment?.generator}</span>
                </p>
                <p>
                  Lift:{"  "}
                  <span className="font-semibold">{apartment?.lift}</span>
                </p>
              </div>
              <hr className=" my-4 block w-full text-gray-400" />
            </div>
            <div className="mt-6">
              <p className="bg-white text-lg font-semibold">Flat Status</p>
              <div className="flex flex-col md:flex-row gap-6">
                <p>
                  Bed: <span className="font-semibold">{flat?.bed}</span>
                </p>
                <p>
                  bathroom :{" "}
                  <span className="font-semibold">{flat?.bathroom}</span>
                </p>
                <p>
                  Balcony:{"  "}
                  <span className="font-semibold">{flat?.balcony}</span>
                </p>
                <p>
                  Store:{"  "}
                  <span className="font-semibold">{flat?.store}</span>
                </p>
                <p>
                  Floor:{"  "}
                  <span className="font-semibold">{flat?.floor}</span>
                </p>
                <p>
                  Flat Number:{"  "}
                  <span className="font-semibold">{flat?.flat?.flatNo}</span>
                </p>
              </div>

              <hr className=" my-4 block w-full text-gray-400" />
            </div>
            <div className="mt-6">
              <p className="bg-white text-lg font-semibold">Description</p>
              <div className="flex flex-col md:flex-row gap-6">
                <p>
                  <span className="font-semibold">
                    {apartment?.description}
                  </span>
                </p>{" "}
              </div>
              <hr className=" my-4 block w-full text-gray-400" />
            </div>
            <div className="flex justify-between bg-success/30 p-6">
              <h2 className="text-3xl font-semibold">
                Rent:{" "}
                <span className="font-bold text-primary">{flat?.rent}</span>
              </h2>
              <button className="btn btn-filled">Agreement </button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-5/12">
          <div className="flex flex-col gap-5">
            <div className="w-full ">
              <p className="font-bold text-lg">Apartment Image</p>
              <img className="w-full" src={apartment?.image} alt="" />
            </div>
            <div className="w-full">
              <p className=" font-bold text-lg">Flat Image</p>
              <img className="w-full" src={flat?.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetails;
