import React from "react";
import Header from "../ShareLayout/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ShareLayout/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
