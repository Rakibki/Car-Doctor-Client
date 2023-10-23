import C1 from "../../assets/client/1.svg";
import C2 from "../../assets/client/2.svg";

import quote from "../../assets/icons/quote.svg";
import { AiFillStar } from "react-icons/ai";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Customer = () => {
  return (
    <div className="mt-16">
      <p className="text-center font-semibold text-[#FF3811]">Testimonial</p>
      <h2 className="text-center text-2xl font-semibold mt-3 mb-2">
        What Customer Says
      </h2>
      <div className="flex justify-center">
        <p className="w-[70%] text-center mb-6 text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div>
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border-2 p-6">
                <div className="flex gap-4 items-center">
                  <img src={C2} alt="" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#444]">
                      Awlad Hossain
                    </h2>
                    <p className="text-[#737373]">Businessman</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[#737373] text-sm">
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex gap-1 mt-2 text-[#FF912C] text-xl">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
              ;
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 p-6">
                <div className="flex gap-4 items-center">
                  <img src={C1} alt="" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#444]">
                      Awlad Hossain
                    </h2>
                    <p className="text-[#737373]">Businessman</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[#737373] text-sm">
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex gap-1 mt-2 text-[#FF912C] text-xl">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 p-6">
                <div className="flex gap-4 items-center">
                  <img src={C2} alt="" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#444]">
                      Awlad Hossain
                    </h2>
                    <p className="text-[#737373]">Businessman</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[#737373] text-sm">
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex gap-1 mt-2 text-[#FF912C] text-xl">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="border-2 p-6">
                <div className="flex gap-4 items-center">
                  <img src={C1} alt="" />
                  <div>
                    <h2 className="text-xl font-semibold text-[#444]">
                      Awlad Hossain
                    </h2>
                    <p className="text-[#737373]">Businessman</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[#737373] text-sm">
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <div className="flex gap-1 mt-2 text-[#FF912C] text-xl">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Customer;
