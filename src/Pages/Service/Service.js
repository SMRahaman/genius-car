import React, { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mb-[100px]">
      <div>
        <h3 className="text-2xl font-bold mb-5 text-success text-center">
          Service
        </h3>
        <h1 className="text-5xl font-bold mb-8 text-center">
          Our Service Area
        </h1>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center mx-16 my-10">
        {service.map((serviceItem) => (
          <ServiceItems
            key={serviceItem._id}
            services={serviceItem}
          ></ServiceItems>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary">More Services</button>
      </div>
    </div>
  );
};

export default Service;
