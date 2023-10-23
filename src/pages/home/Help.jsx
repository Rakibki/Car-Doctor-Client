import React from "react";
import img1 from "../../assets/3.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/1.svg";

const Help = () => {
  return (
    <div className="grid mt-16 p-10 md:p-6 lg:p-14 gap-6 md:gap-2 text-white bg-[#151515] grid-cols-1 md:grid-cols-3">
      <div className="flex items-center gap-3">
        <img src={img1} alt="" />
        <div>
          <p className="text-xs">Need a repair? our address</p>
          <h2 className="lg:text-lg md:text-sm text-lg font-medium ">Liza Street, New York</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img src={img2} alt="" />
        <div>
          <p className="text-xs">Have a question?</p>
          <h2 className="lg:text-lg md:text-sm text-lg font-medium ">+2546 251 2658</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img src={img3} alt="" />
        <div>
          <p className="text-xs">We are open monday-friday</p>
          <h2 className="lg:text-lg md:text-sm text-lg font-medium ">7:00 am - 9:00 pm</h2>
        </div>
      </div>
    </div>
  );
};

export default Help;
