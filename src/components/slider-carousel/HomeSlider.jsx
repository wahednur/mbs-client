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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="w-full aspect-[1520/500] bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  WS Building Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  A world class bulding management software
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="w-full aspect-[1520/500] bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  WS Building Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  A world class bulding management software
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img3})` }}
          className="w-full aspect-[1520/500] bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  WS Building Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  A world class bulding management software
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img4})` }}
          className="w-full aspect-[1520/500] bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  WS Building Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  A world class bulding management software
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${img5})` }}
          className="w-full aspect-[1520/500] bg-cover bg-center"
        >
          <div className="container h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-center space-y-5 bg-black/30 p-10 rounded-2xl">
                {" "}
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                  WS Building Management System
                </h1>
                <h2 className="text-2xl text-white font-bold">
                  A world class bulding management software
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
