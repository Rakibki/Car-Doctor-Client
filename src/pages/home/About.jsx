import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-16 flex-col sm:flex-col-reverse lg:flex-row">
        <div className="lg:w-[50%] relative">
          <img src={img1} className="rounded-lg w-[95%] shadow-2xl" />
          <img
            src={img2}
            className="rounded-lg border-8 border-white z-20 w-[60%] absolute -right-10 -bottom-10 shadow-2xl"
          />
        </div>
        <div className="lg:w-[50%]">
          <span className="text-[#FF3811] text-lg mb-2 font-semibold">
            About Us
          </span>
          <h1 className="text-5xl mt-3 font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-3 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn mt-6 capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">
          Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
