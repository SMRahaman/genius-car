import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItems";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div className="mb-[100px]">
        <div>
          <h3 className="text-2xl font-bold mb-5 text-success text-center">
            Products
          </h3>
          <h1 className="text-5xl font-bold mb-8 text-center">Our Products</h1>
          <p className="text-center">
            The majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-3 justify-items-center mx-16 my-10">
          {product.map((productItem) => (
            <ProductItems
              key={productItem._id}
              product={productItem}
            ></ProductItems>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline btn-primary">More Products</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
