import React, { useEffect, useState } from "react";
import HomeTemp from "../Templates/HomeTemp";
import Modal from "../Components/Modal";
import ToTop from "../Common/ToTop";
import ProductModal from "../Common/ProductModal";

const Home = () => {
  return (
    <div>
      {/* <div className="relative">
        <>
          <Modal />
          <Home />
          <ToTop />
          <ProductModal />
        </>
      </div> */}
      <HomeTemp />
    </div>
  );
};

export default Home;
