import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const AddCoupon = () => {
  const { user } = useAuth();
  const [discountType, setDiscountType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  console.log(discountType, startDate);
  const handleDiscount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon = form.coupon.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const newCoupon = {
      coupon,
      discount,
      discountType,
      expDate: startDate,
      description,
    };
    await axiosSecure.post(`/coupon/${user?.email}`, newCoupon);
    toast.success(`${coupon} Added sucessfully`);
    form.reset();
  };
  return (
    <div className="p-5 bg-white rounded-xl">
      <h2 className="dash-title">Add Coupon</h2>
      <div>
        <form onSubmit={handleDiscount}>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto mt-10">
            <div className="collum">
              <label htmlFor="couponCode">Counpon Code</label>
              <input
                type="text"
                name="coupon"
                placeholder="Enter coupon code"
                className="frm-ctr"
                required
              />
            </div>
            <div className="collum">
              <label htmlFor="discoutType">Discount Type</label>
              <select
                onChange={(e) => setDiscountType(e.target.value)}
                className="frm-ctr"
              >
                <option>Slect discount type</option>
                <option>fixed</option>
                <option>percentage</option>
              </select>
            </div>
            <div className="collum">
              <label htmlFor="discount">Discount Amount</label>
              <input
                type="number"
                name="discount"
                placeholder="Enter discount Amount"
                className="frm-ctr"
                required
              />
            </div>
            <div className="collum">
              <label htmlFor="date">Expaire Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="frm-ctr"
              />
            </div>
            <div className="collum">
              <label htmlFor="discount">Description</label>
              <textarea
                name="description"
                placeholder="Enter discount Amount"
                className="frm-ctr"
                required
                rows={5}
              >
                {" "}
              </textarea>
            </div>
            <button className="btn btn-filled" type="submit">
              Add coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
