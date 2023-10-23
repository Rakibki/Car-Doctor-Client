import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../assets/images/team/1.jpg";
import img3 from "../../assets/images/team/2.jpg";
import img2 from "../../assets/images/team/3.jpg";

import icon1 from "../../assets/icons/c-icon/Group 4889.svg";
import icon2 from "../../assets/icons/c-icon/Group 4891.svg";
import icon3 from "../../assets/icons/c-icon/Group 4892.svg";

const OurTeam = () => {
  const [size, setSize] = useState(1)
  return (
    <div className="mt-16">
      <div>
        <p className="text-[#FF3811] text-center font-medium">Team</p>
        <h2 className="text-2xl font-semibold mt-3 mb-2 text-center ">
          Meet Our Team
        </h2>
        <div className="flex justify-center mb-6 text-[#737373]">
          <p className="w-[70%] text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={size}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`border-2 rounded-lg p-4`}>
            <img className="rounded-lg" src={img1} alt="" />
            <h1 className="text-xl mt-2 text-[#444] text-center font-medium">
              Car Engine Plug
            </h1>
            <p className="text-center text-sm mt-2 mb-3">Engine Expert</p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 rounded-lg p-4">
            <img className="rounded-lg" src={img2} alt="" />
            <h1 className="text-xl mt-2 text-[#444] text-center font-medium">
              Car Engine Plug
            </h1>
            <p className="text-center text-sm mt-2 mb-3">Engine Expert</p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 rounded-lg p-4">
            <img className="rounded-lg" src={img3} alt="" />
            <h1 className="text-xl mt-2 text-[#444] text-center font-medium">
              Car Engine Plug
            </h1>
            <p className="text-center text-sm mt-2 mb-3">Engine Expert</p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 rounded-lg p-4">
            <img className="rounded-lg" src={img1} alt="" />
            <h1 className="text-xl mt-2 text-[#444] text-center font-medium">
              Car Engine Plug
            </h1>
            <p className="text-center text-sm mt-2 mb-3">Engine Expert</p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border-2 rounded-lg p-4">
            <img className="rounded-lg" src={img2} alt="" />
            <h1 className="text-xl mt-2 text-[#444] text-center font-medium">
              Car Engine Plug
            </h1>
            <p className="text-center text-sm mt-2 mb-3">Engine Expert</p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default OurTeam;
