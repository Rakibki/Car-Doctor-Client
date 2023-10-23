import React from "react";
import incon1 from "../../assets/icons/check.svg";
import incon2 from "../../assets/icons/deliveryt.svg";
import incon3 from "../../assets/icons/something.svg";
import incon4 from "../../assets/icons/group.svg";
import incon5 from "../../assets/icons/person.svg";
import incon6 from "../../assets/icons/quote.svg";
import incon7 from "../../assets/icons/Wrench.svg";

const Choose = () => {
  return (
    <div className="mt-16">
      <p className="text-center font-semibold text-[#FF3811]">Core Features</p>
      <h2 className="text-2xl font-semibold mt-3 mb-2 text-center">Why Choose Us</h2>
      <div className="flex justify-center mb-6">
        <p className="text-[#737373] text-center w-[70%]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

        <div className="border-2 p-4 flex rounded-md items-center  gap-3">
          <img src={incon1} alt="" />
          <h2 className="text-xl font-semibold">100% Guranty</h2>
        </div>


        <div className="border-2 p-4 flex rounded-md items-center  gap-3">
          <img src={incon2} alt="" />
          <h2 className="text-xl font-semibold">100% Guranty</h2>
        </div>

        <div className="border-2 p-4 flex rounded-md items-center  gap-3">
          <img src={incon4} alt="" />
          <h2 className="text-xl font-semibold">100% Guranty</h2>
        </div>

        <div className="border-2 p-4 flex rounded-md items-center  gap-3">
          <img src={incon5} alt="" />
          <h2 className="text-xl font-semibold">100% Guranty</h2>
        </div>

        <div className="border-2 p-4 flex rounded-md items-center  gap-3">
          <img src={incon7} alt="" />
          <h2 className="text-xl font-semibold">100% Guranty</h2>
        </div>

      </div>
    </div>
  );
};

export default Choose;
