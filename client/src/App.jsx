import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import Loading from "./Featured/Common/Loading";
import ToTop from "./Featured/Common/ToTop";
import Modal from "./Featured/Components/Modal";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
    {loading ? (
      <Loading />
    ) : (
      <Layout>
        <Modal/>
        <Home />
        <ToTop/>
      </Layout>
    )}
  </div>
  );
};

export default App;
