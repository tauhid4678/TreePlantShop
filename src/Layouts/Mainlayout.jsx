import React, { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Mainlayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
