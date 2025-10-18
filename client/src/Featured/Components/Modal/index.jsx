import React, { useEffect, useState } from "react";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      id="modalView"
      className={`fixed inset-0 z-[1000] ${
        isVisible ? "flex" : "hidden"
      } items-center justify-center bg-black/60`}
    >
      <div className="relative w-[820px] max-w-[92vw]">
        <div className="bg-white shadow-2xl border border-[#EDEDED] px-[64px] py-[56px] text-center relative ">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 w-8 h-8 grid place-items-center text-xl text-[#1f1f1f] hover:opacity-80"
          >
            ×
          </button>

          <h2 className="text-[32px] leading-tight font-semibold text-[#1f1f1f] mb-3">
            Get Our Email Letter
          </h2>
          <p className="text-[#7A7A7A] text-[14px] leading-relaxed max-w-[640px] mx-auto mb-10">
            Subscribe to the Outstock mailing list to receive updates on new
            arrivals, special offers and other discount information.
          </p>

          <form className="w-full">
            <div className="max-w-[560px] mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full h-[50px] border border-[#E5E5E5] px-4 text-[14px] text-[#555555] placeholder:text-[#AAAAAA] outline-none focus:border-black"
              />
            </div>

            <button
              type="button"
              className="mt-6 inline-block bg-black text-white text-[13px] font-medium tracking-wide py-[14px] px-[48px] hover:opacity-90 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
