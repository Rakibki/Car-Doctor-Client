import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <Link to={`/serviceDetais/${service._id}`}>
            <div>
              <BsArrowRight className="text-xl hover:text-[22px] hover:mr-2 transition-all text-[#FF3811]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
