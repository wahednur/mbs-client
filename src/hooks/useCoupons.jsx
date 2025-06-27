import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useCoupon = (couponCode) => {
  const axiosCommon = useAxiosCommon();

  const {
    data: coupon = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coupon", couponCode],
    enabled: !!couponCode,
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/coupons/${couponCode}`);
      return data;
    },
  });

  return { coupon, isLoading, isError };
};

export default useCoupon;
