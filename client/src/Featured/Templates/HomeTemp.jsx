import BannerSection from "../Components/BannerSection";
import BlogSection from "../Components/BlogSection";
import BrandSection from "../Components/BrandsSection";
import BuyNowSection from "../Components/BuyNowSection";
import DiscountSection from "../Components/DiscountSection";
import TrendsSection from "../Components/TrendsSection";

const HomeTemp = () => {
  return (
    <div>
      <BannerSection />
      <TrendsSection />
      <BuyNowSection />
      <BrandSection/>
      <BlogSection/>
      <DiscountSection/>
    </div>
  );
};

export default HomeTemp;
