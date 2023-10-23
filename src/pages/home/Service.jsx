import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-24">
      <div>
        <p className="text-center mb-2 font-semibold text-[#FF3811]">Service</p>
        <h1 className="text-4xl text-[#151515] mb-2 text-center font-semibold ">
          Our Service Area
        </h1>
        <div className="flex justify-center mb-10">
          <p className="text-[#737373] w-[70%] text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div>
        <div className="flex justify-center mt-6">
          <button className="btn btn-outline font-medium text-[#FF3811]">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
