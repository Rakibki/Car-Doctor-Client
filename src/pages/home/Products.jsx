import React from "react";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";

import { AiTwotoneStar } from "react-icons/ai";

const Products = () => {
  return (
    <div className="mt-16">
      <p className="text-center font-medium text-[#FF3811]">Popular Products</p>
      <h1 className="text-2xl font-semibold text-center mb-2 mt-3">
        Browse Our Products
      </h1>
      <div className="flex justify-center">
        <p className="w-[70%] text-center text-[#737373] mb-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img1} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>

        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img2} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>

        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img3} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>

        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img4} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>

        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img5} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>

        <div className=" p-3 card-compact bg-base-100 shadow-xl">
          <div className="w-full overflow-hidden flex justify-center items-center h-[200px] bg-[#F3F3F3]">
            <img className="w-[90%] lg:w-[60%]" src={img6} alt="Shoes" />
          </div>
          <div className="card-body">
            <div>
              <div className="flex justify-center mb-2">
                <div className="text-lg text-[#FF912C] flex gap-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
              </div>
              <h2 className="text-[#444] mb-1 text-center text-lg font-semibold">
                Cools Led Light
              </h2>

              <p className="text-center text-[#FF3811] font-semibold">$20.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <button className="btn btn-outline font-medium text-[#FF3811]">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
