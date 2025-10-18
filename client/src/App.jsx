import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import Loading from "./Featured/Common/Loading";
import ToTop from "./Featured/Common/ToTop";

import ProductModal from "./Featured/Common/ProductModal";
import Modal from "./Featured/Components/Modal";

const App = () => {

  return (
    <div className="relative">
{/*      
      {loading ? (
        <Loading />
      ) : (
         <>
          <Modal />
          <Home />
          <ToTop />
          <ProductModal />
          </>
      )} */}
    </div>
  );
};

export default App;
