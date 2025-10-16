import React from 'react'
import HeadingText from '../../Common/Heading'

const BlogSection = () => {
  return (
    <div>
        <section class="max-w-[1320px] mx-auto px-[10px] bg-[#FFFFFF] py-20">
  <div class=" mb-10">
<HeadingText title={"Our Blog Posts"} desc={"Mirum est notare quam littera gothica quam nunc putamus parum claram!"}/>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="bg-white  hover:shadow-md transition-all duration-300">
      <div class="overflow-hidden">
        <img
          src="https://vela-kazan.myshopify.com/cdn/shop/articles/1_800x515.jpg?v=1511574495"
          alt="Blog image"
          class="w-full h-[260px] object-cover"
        />
      </div>
      <div class="mt-5">
        <h3 class="text-[20px] font-medium leading-[26px] hover:text-[#BC8246] transition-all duration-300 cursor-pointer text-[#201f1f] mb-2">
          Anteposuerit litterarum formas.
        </h3>
        <p class="text-[#8C8C8C] text-[12px] mb-4">
          By <span class="text-[#C89867]">Mr Admin</span> /
          November 16, 2017
        </p>
        <p class="text-[#606060] text-[14px] mb-5 leading-relaxed">
          Diga, Koma and Torus are three kitchen utensils designed for Ommo, a
          new design-oriented brand introduced at the Ambiente show in February
          2016. Minimalist approach,...
        </p>
        <button
          class="border border-[#EBEBEB] text-[14px] text-[#201f1f] font-medium py-[17px] px-[42px] hover:border-[#BC8246] hover:text-[#BC8246] transition-all duration-400"
        >
          Read More
        </button>
      </div>
    </div>

    <div class="bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div class="overflow-hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0016/0089/0919/articles/blog2_900x.jpg?v=1614336895"
          alt="Blog image"
          class="w-full h-[260px] object-cover"
        />
      </div>
      <div class="p-6">
        <h3 class="text-[18px] font-semibold text-[#1c1c1c] mb-2">
          Anteposuerit litterarum formas.
        </h3>
        <p class="text-[#888] text-[13px] mb-3">
          By <span class="text-[#c77b30]">Mr Admin</span> /
          November 06, 2017
        </p>
        <p class="text-[#555] text-[14px] mb-5 leading-relaxed">
          Diga, Koma and Torus are three kitchen utensils designed for Ommo, a
          new design-oriented brand introduced at the Ambiente show in February
          2016. Minimalist approach,...
        </p>
        <button
          class="border border-black text-[13px] font-medium py-[10px] px-[20px] hover:bg-black hover:text-white transition-all duration-300"
        >
          Read More
        </button>
      </div>
    </div>

    <div class="bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div class="overflow-hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0016/0089/0919/articles/blog3_900x.jpg?v=1614336919"
          alt="Blog image"
          class="w-full h-[260px] object-cover"
        />
      </div>
      <div class="p-6">
        <h3 class="text-[18px] font-semibold text-[#1c1c1c] mb-2">
          Anteposuerit litterarum formas.
        </h3>
        <p class="text-[#888] text-[13px] mb-3">
          By <span class="text-[#c77b30]">Mr Admin</span> /
          November 06, 2017
        </p>
        <p class="text-[#555] text-[14px] mb-5 leading-relaxed">
          Diga, Koma and Torus are three kitchen utensils designed for Ommo, a
          new design-oriented brand introduced at the Ambiente show in February
          2016. Minimalist approach,...
        </p>
        <button
          class="border border-black text-[13px] font-medium py-[10px] px-[20px] hover:bg-black hover:text-white transition-all duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default BlogSection