import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServiceItems = ({ services }) => {
  const { img, title, price, _id } = services;
  console.log(services);
  return (
    <div>
      <div className="card w-96 border mb-5">
        <figure className="px-5 pt-5 pb-0 ">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[210px] w-[450px] m-auto object-cover"
          />
        </figure>
        <div className="card-body py-5 px-5 ">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex align-items-center ">
            <p className="text-xl font-bold">Price:${price}</p>
            <Link to={`/checkout/${_id}`} className="text-xl font-bold">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
