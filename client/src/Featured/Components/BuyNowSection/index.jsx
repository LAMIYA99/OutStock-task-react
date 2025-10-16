import React from "react";

const BuyNowSection = () => {
  return (
    <section className="w-full py-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="w-full max-h-[405px] bg-[url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner4_950x457.jpg?v=1690860139')] bg-no-repeat bg-cover bg-center flex items-center justify-between p-10">
          <div>
            <p className="text-[14px] text-[#bd8448] font-normal mb-2">
              Products Essentials
            </p>
            <h3 className="text-[18px] font-semibold text-[#323232] mb-3">
              Bottle With Wooden Cork
            </h3>
            <p className="text-[#555] text-[14px] mt-6 leading-relaxed ">
              The Newtown sofa range is the first product Jonas Wagell <br /> has
              designed for Zaozuo, but one of the last to be finalized and
              launched.
            </p>
            <button className="border border-black text-[12px] mt-8 font-medium py-[16px] px-[26px] hover:bg-black hover:text-white transition-all duration-300">
              BUY NOW /{" "}
              <span className="text-[#BD8548] text-[14px] font-semibold">$196.98</span>
            </button>
          </div>
        </div>

        <div className="w-full max-h-[405px] bg-[url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner4_950x457.jpg?v=1690860139')] bg-no-repeat bg-cover bg-center flex items-center justify-start p-10 h-[450px]">
          <div className="flex flex-col  text-left justify-center text-[#1c1c1c] max-w-[440px]">
            <p className="text-[14px] text-[#bd8448] font-normal mb-2">
              Products Furniture
            </p>
            <h3 className="text-[18px] text-[#323232] font-semibold mb-3">
              Hauteville Plywood Chair
            </h3>
            <p className="text-[#555] text-[14px] mt-6 leading-relaxed">
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram, anteposuerit litterarum formas.
            </p>
            <button className="border border-black text-[12px] font-medium py-[14px] mt-8 px-[26px] hover:bg-black hover:text-white transition-all duration-300 w-fit">
              BUY NOW /<span className="text-[#BD8548] text-[14px] font-semibold">$396.90</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNowSection;
