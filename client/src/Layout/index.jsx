import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Featured/Common/Loading";
import Modal from "../Featured/Components/Modal";
import { Home } from "lucide-react";
import ToTop from "../Featured/Common/ToTop";
import ProductModal from "../Featured/Common/ProductModal";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <div>
      {
        !loading&&(
          <>
          <Modal />
          <Home />
          <ToTop />
          <ProductModal />
                          </>
        )
      }
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
