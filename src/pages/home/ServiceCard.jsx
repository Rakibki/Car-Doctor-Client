import React from "react";
import {BsArrowRight} from "react-icons/bs"

const ServiceCard = ({ service }) => {
  return (
    <div className=" border-2 hover:shadow-2xl rounded-lg card-compact">
      <figure>
        <img className="rounded-t-lg" src={service.img} />
      </figure>
      <div className="card-body">
        <h2 className=" text-[#444] card-title">{service.title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold text-[#FF3811]">
            Price: ${service.price}
          </h3>
          <div><BsArrowRight className="text-xl text-[#FF3811]" /></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
