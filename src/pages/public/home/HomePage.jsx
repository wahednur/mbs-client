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
    </div>
  );
};

export default HomePage;
