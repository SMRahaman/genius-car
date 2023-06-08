import React from "react";

const ProductItems = ({ product }) => {
  const { img, name, price } = product;
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
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="flex align-items-center ">
            <p className="text-xl font-bold">Price:${price}</p>
            <button className="text-xl font-bold"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
