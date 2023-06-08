import React from "react";
import personImage from "../../assets/images/about_us/person.jpg";
import partsImage from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="mx-16 mt-[100px] mb-[140px]">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 ">
            <div className=" relative">
              <img
                src={personImage}
                className="rounded-lg shadow-2xl  h-[473px] w-[460px] object-cover"
              />
              <div className="absolute rounded-lg shadow-2xl flex w-[327px] h-[332px] bottom-[-40px] right-[0px] object-cover border-8 border-white ">
                <img src={partsImage} alt="" />
              </div>
            </div>
          </div>

          <div className="w-1/2 mx-auto p-10">
            <h3
              className="text-2xl font-bold mb-5 text-success
            "
            >
              About us
            </h3>
            <h1 className="text-5xl font-bold mb-8">
              We are qualified<br></br> & of experience<br></br> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
              <p className="mt-5">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
