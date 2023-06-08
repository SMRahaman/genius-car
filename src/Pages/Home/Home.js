import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contacts/Contact";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Products></Products>
    </div>
  );
};

export default Home;
