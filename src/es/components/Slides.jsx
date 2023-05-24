import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../assets/slides";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/element/css/navigation";

//import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Slides() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[/*Pagination,*/ Navigation, Autoplay]}
        className="container pb-12 px-10 md:px-14"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-72">
            <a href="#">
              <div className="flex flex-column flex-justify-center items-center h-full rounded-xl overflow-hidden relative slideCard">
                <img
                  className="absolute md:scale-110 hover:scale-125 transition-all duration-200 ease-in-out"
                  src={`/img/${slide.url}`}
                  alt=""
                ></img>
                <div className=" bg-black/60 w-full bottom-0 p-3 text-white absolute">
                  <h3 className="text-lg">{slide.encabezado}</h3>
                  <p className="text-xs">{slide.parrafo}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
