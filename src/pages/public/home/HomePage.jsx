import GoogleMap from "../../../components/google-map/GoogleMap";
import Button from "../../../components/shared/buttons/Button";
import HomeSlider from "../../../components/slider-carousel/HomeSlider";

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <div className="container mt">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img
              className="aspect-[500/600] w-full object-cover object-top"
              src="/img/home/about.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-3 justify-center items-center">
            <h1 className="hero-title">
              Smarter Rental Management, Simplified.
            </h1>
            <h4 className="hero-sub-title ">
              Manage all your buildings, flats, tenants, and payments from one
              powerful dashboard — anytime, anywhere.
            </h4>
            <div className="w-full mt-6">
              <Button
                title={`Get Started for Free`}
                btnType={"btn-filled"}
                className={`bt`}
              />
              <Button
                title={`Request a Demo`}
                btnType={"btn-outlined mt-6"}
                className={`bt`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Coupon section start  */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🎁 Active Coupons & Offers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                🏷️ NEWTENANT25
              </h3>
              <p className="text-lg mt-2 font-medium text-gray-700">
                25% off on first month rent!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                📍 All Dhaka Buildings
              </p>
              <p className="text-sm text-gray-600 mb-3">
                📅 Valid Until: 30 June 2025
              </p>
              <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon section end  */}
      {/* Google map start  */}
      <div>
        <GoogleMap />
      </div>
      {/* Google map end  */}
    </div>
  );
};

export default HomePage;
