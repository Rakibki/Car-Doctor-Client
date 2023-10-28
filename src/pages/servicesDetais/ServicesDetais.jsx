import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const ServicesDetais = () => {
  const loddedService = useLoaderData();

  return (
    <div>
      <PageTitle text={"Service Details"} />
      <div className="grid mt-16 grid-cols-4">
        <div className="col-span-3">
          <div>
            <img className="w-full" src={loddedService.img} alt="" />
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-semibold my-8">
                {loddedService.title}
              </h1>
            </div>
            <p>{loddedService.description}</p>
          </div>

          <div className="grid mt-16 gap-3 grid-cols-2">
            {loddedService?.facility?.map((item) => {
              return (
                <div className="p-8 border-t-4 bg-[#F3F3F3] rounded-2xl border-[#FF3811]">
                  <h3 className="text-xl mb-4 font-semibold">{item.name}</h3>
                  <p className="text-[#737373]">{item.details}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#F3F3F3] h-[450px] p-10">
          <h2 className="text-2xl mb-10 font-semibold">Services</h2>
          <div className="text-2xl font-medium flex flex-col gap-3">
            <h2>Full Car Repair</h2>
            <h2>Full Car Repair</h2>
            <h2>Full Car Repair</h2>
            <h2>Full Car Repair</h2>
            <h2>Full Car Repair</h2>
            <h2>Full Car Repair</h2>
          </div>
          <div>
            <h2 className="text-2xl my-6 font-semibold">Price: ${loddedService.price}</h2>
            <Link to={`/serviceBooking/${loddedService._id}`}>
              <button className="btn w-full capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetais;
