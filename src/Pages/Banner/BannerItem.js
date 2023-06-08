import React from "react";
import "./BannerItem.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const BannerItem = ({ banner }) => {
  const { image, prev, next, id } = banner;
  return (
    <div id={`slider${id}`} className="carousel-item relative w-full">
      <div className="img-overlay h-[550px] w-full ">
        <img src={image} className="w-full h-[100%] rounded-xl object-cover" />
      </div>

      <div className="absolute flex  transform -translate-y-1/2 left-12 top-40">
        <h1 className="text-7xl text-white font-bold">
          Affordable<br></br> Price for Car<br></br> Servicing
        </h1>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-12 top-[320px]">
        <p className=" text-white  w-2/3">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-12 top-[450px]">
        <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-accent">Latest Project</button>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
        <a href={`#slider${prev}`} className="btn btn-circle mr-12">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </a>
        <a href={`#slider${next}`} className="btn btn-circle">
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
