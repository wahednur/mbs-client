import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../../../hooks/useAxiosCommon";
import CouponCard from "./CouponCard";

const CouponDisplay = () => {
  const { data: coupons = [] } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/coupons-pup");
      return data;
    },
  });
  return (
    <div className="bg-gray-100 p-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🎁 Active Coupons & Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.slice(0, 6).map((coupon) => (
            <CouponCard key={coupon?._id} coupon={coupon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponDisplay;
