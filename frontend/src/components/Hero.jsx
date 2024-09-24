import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero Left Side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-4">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-xs font-light md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-4xl font-bold leading-relaxed sm:py-3 lg:text-6xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-xs font-medium md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}

      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
