import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import LoadingSpiner from "../../../../components/shared/loading/LoadingSpiner";
import DashSiteTitle from "../../../../components/shared/site-title/DashSiteTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Coupons = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/coupons");
      return data;
    },
  });

  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="w-full bg-white p-5 overflow-auto">
      <DashSiteTitle title={`Coupon List`} />
      <table className="overflow-x-auto w-full">
        <thead className=" bg-primary text-white">
          <tr className="flex  w-full text-left gap-2 p-2 items-center">
            <th className="w-12">SN</th>
            <th className="w-c">Coupon</th>
            <th className="flex-1">Description</th>
            <th className="w-c">Discount Type</th>
            <th className="w-c">Amount</th>
            <th className="w-c">Total Use</th>
            <th className="w-c">Expiry Date</th>

            <th className="w-c">Action</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {coupons.map((coupon, idx) => (
            <tr
              className="flex w-full text-left gap-2 even:bg-gray-100 justify-center items-center p-2"
              key={coupon._id}
            >
              <td className="w-12">{idx + 1}</td>
              <td className="w-c">{coupon?.coupon}</td>
              <td className="flex-1">
                {" "}
                {coupon?.description ? coupon.description.slice(0, 50) : "N/A"}
              </td>
              <td className="w-c">{coupon?.discountType} </td>
              <td className="w-c">
                {coupon?.discount}{" "}
                {coupon?.discountType === "percentage" && "%"}
                {coupon?.discountType === "fixed" && "fixed"}
              </td>
              <td className="w-c">{}</td>
              <td className="w-c">
                {new Date(coupon?.expDate).toLocaleDateString("en-BD")}
              </td>

              <td className="w-c">
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

export default Coupons;
