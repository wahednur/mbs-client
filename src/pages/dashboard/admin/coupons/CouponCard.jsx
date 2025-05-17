import PropTypes from "prop-types";

const CouponCard = ({ coupon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-indigo-600">
        🏷️ {coupon.coupon}
      </h3>
      <p className="text-lg mt-2 font-medium text-gray-700">
        {coupon.discount} {coupon.description}
      </p>
      <p className="text-sm text-gray-600 mt-1">📍 All Dhaka Buildings</p>
      <p className="text-sm text-gray-600 mb-3">
        📅 Valid Until:{" "}
        {coupon?.expDate &&
          new Date(coupon.expDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
      </p>
      <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
        Apply Now
      </button>
    </div>
  );
};

CouponCard.propTypes = {
  coupon: PropTypes.object,
};

export default CouponCard;
