import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/img/home/1.jpg";
import img2 from "/img/home/2.jpg";
import img3 from "/img/home/3.jpg";
import img4 from "/img/home/4.jpg";
import img5 from "/img/home/5.jpg";

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="w-full aspect-slider bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  Multi-Building Management
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  Track all your buildings and their flats, occupancy status,
                  and rent collection — all in one place.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="w-full aspect-slider bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  Real-Time Rent Dashboard
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  Know which flats are vacant, rented, or overdue — with
                  real-time rent collection summary.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img3})` }}
          className="w-full aspect-slider bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  Tenant Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  Store tenant information, rent history, and communication
                  records securely.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img4})` }}
          className="w-full aspect-slider bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  Automated Billing & Reminders
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  Send monthly rent bills and reminders automatically to tenants
                  via email or SMS.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img5})` }}
          className="w-full aspect-slider bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  Location-Based Insights
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  See which area is performing well, with rent price
                  distribution and occupancy trends.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
