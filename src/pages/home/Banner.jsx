import React from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import banner1 from "../../assets/images/homeCarousel/1.jpg"
import banner2 from "../../assets/images/homeCarousel/2.jpg"
import banner3 from "../../assets/images/homeCarousel/3.jpg"
import banner4 from "../../assets/images/homeCarousel/4.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item h-[600px] relative w-full">
        <img src={banner1} className="w-full rounded-xl relative" />
        <div className="text-white absolute w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] h-full top-0 right-0">
          <div className="w-full md:w-3/5 p-10 5 md:p-16 lg:p-24">
            <h1 className="text-5xl md:text-5xl mb-8 font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex mt-8 gap-3">
              <button className="btn capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">Discover More</button>
              <button className="btn border-[#fff] btn-outline capitalize text-[#fff]">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform gap-3 -translate-y-1/2  right-5 bottom-4 ">
          <a href="#slide4" className="btn active:bg-[#FF3811] active:text-white border-none btn-circle">
            <AiOutlineArrowLeft/>
          </a>
          <a href="#slide2" className="btn active:bg-[#FF3811] active:text-white border-none  btn-circle">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item h-[600px] relative w-full">
        <img src={banner2} className="w-full rounded-xl relative" />
        <div className="text-white absolute w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] h-full top-0 right-0">
          <div className="w-full md:w-3/5 p-10 5 md:p-16 lg:p-24">
            <h1 className="text-5xl md:text-5xl mb-8 font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex mt-8 gap-3">
              <button className="btn capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">Discover More</button>
              <button className="btn border-[#fff] btn-outline capitalize text-[#fff]">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform gap-3 -translate-y-1/2  right-5 bottom-4 ">
          <a href="#slide1" className="btn active:bg-[#FF3811] active:text-white border-none btn-circle">
            <AiOutlineArrowLeft/>
          </a>
          <a href="#slide3" className="btn active:bg-[#FF3811] active:text-white border-none  btn-circle">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item h-[600px] relative w-full">
        <img src={banner3} className="w-full rounded-xl relative" />
        <div className="text-white absolute w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] h-full top-0 right-0">
          <div className="w-full md:w-3/5 p-10 5 md:p-16 lg:p-24">
            <h1 className="text-5xl md:text-5xl mb-8 font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex mt-8 gap-3">
              <button className="btn capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">Discover More</button>
              <button className="btn border-[#fff] btn-outline capitalize text-[#fff]">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform gap-3 -translate-y-1/2  right-5 bottom-4 ">
          <a href="#slide2" className="btn active:bg-[#FF3811] active:text-white border-none btn-circle">
            <AiOutlineArrowLeft/>
          </a>
          <a href="#slide4" className="btn active:bg-[#FF3811] active:text-white border-none  btn-circle">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item h-[600px] relative w-full">
        <img src={banner4} className="w-full rounded-xl relative" />
        <div className="text-white absolute w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] h-full top-0 right-0">
          <div className="w-full md:w-3/5 p-10 5 md:p-16 lg:p-24">
            <h1 className="text-5xl md:text-5xl mb-8 font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex mt-8 gap-3">
              <button className="btn capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">Discover More</button>
              <button className="btn border-[#fff] btn-outline capitalize text-[#fff]">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform gap-3 -translate-y-1/2  right-5 bottom-4 ">
          <a href="#slide3" className="btn active:bg-[#FF3811] active:text-white border-none btn-circle">
            <AiOutlineArrowLeft/>
          </a>
          <a href="#slide1" className="btn active:bg-[#FF3811] active:text-white border-none  btn-circle">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
