import GoogleMap from "../../../components/google-map/GoogleMap";
import CallToAction from "../../../components/home-feature/CallToAction";
import DashboardPreview from "../../../components/home-feature/DashboardPreview";
import FAQSection from "../../../components/home-feature/FAQSection";
import SecuritySupportSection from "../../../components/home-feature/SecuritySupportSection";
import Button from "../../../components/shared/buttons/Button";
import HomeSlider from "../../../components/slider-carousel/HomeSlider";
import HomeApartment from "../../apartment/HomeApartment";
import CouponDisplay from "../../dashboard/admin/coupons/CouponDisplay";
import Testimonials from "../../dashboard/admin/testimonials/Testimonials";

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
      {/* Flat section start  */}
      <div className="bg-primary/20 py-20 mt">
        <HomeApartment />
      </div>
      {/* Flat section end  */}
      {/* Price section start  */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Scalable pricing for real estate companies of all sizes.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-gray-600 mb-6">
                Best for individual landlords or small companies
              </p>
              <div className="text-4xl font-bold mb-4">
                $19
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>✅ Manage up to 3 apartments</li>
                <li>✅ Basic tenant tracking</li>
                <li>✅ Rent reminders</li>
                <li>❌ No staff management</li>
                <li>❌ No analytics</li>
              </ul>
              <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-primary rounded-2xl p-8 shadow-xl bg-white scale-105">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Professional
              </h3>
              <p className="text-gray-600 mb-6">
                For growing companies with multiple apartments
              </p>
              <div className="text-4xl font-bold mb-4">
                $49
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>✅ Manage up to 50 apartments</li>
                <li>✅ Tenant & rent history tracking</li>
                <li>✅ Staff role management</li>
                <li>✅ Monthly analytics</li>
                <li>❌ API Access</li>
              </ul>
              <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90">
                Choose Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Best for large real estate agencies
              </p>
              <div className="text-4xl font-bold mb-4">
                $99
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>✅ Unlimited apartments</li>
                <li>✅ Full analytics & reports</li>
                <li>✅ Unlimited staff accounts</li>
                <li>✅ API & third-party integration</li>
                <li>✅ Dedicated support</li>
              </ul>
              <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Price section end  */}

      {/* Coupon section start  */}
      <div className="container mt">
        <CouponDisplay />
      </div>

      {/* Coupon section end  */}
      {/* Testimonials section start  */}
      <div className="bg-blue-200">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      {/* Testimonials section end  */}
      <div className="container mt">
        <SecuritySupportSection />
      </div>
      <div className="bg-purple-400 mt">
        <div className="container">
          <DashboardPreview />
        </div>
      </div>
      <div className="container mt">
        <FAQSection />
      </div>
      <div className="container mt">
        <CallToAction />
      </div>

      {/* Google map start  */}
      <div className="mt">
        <GoogleMap />
      </div>
      {/* Google map end  */}
    </div>
  );
};

export default HomePage;
