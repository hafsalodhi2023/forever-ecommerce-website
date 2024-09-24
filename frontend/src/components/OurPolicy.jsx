import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-center gap-16 pt-10 pb-36">
      <div className="text-4xl text-center ">
        <Title text1={"OUR"} text2={"POLICIES"} />
        <p className="w-3/4 m-auto text-xs font-light text-gray-400 sm:text-sm md:text-base">
          Secure transactions, prompt delivery, and hassle-free returns for your
          satisfaction.
        </p>
      </div>
      <div className="flex flex-col justify-around gap-12 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="text-xl font-semibold">Easy Exchange Policy</p>
          <p className="font-light text-gray-400">
            We offer hassle free exchange policy.
          </p>
        </div>
        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="text-xl font-semibold">7 Days Return Policy</p>
          <p className="font-light text-gray-400">
            We provide 7 days free return policy.
          </p>
        </div>
        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="text-xl font-semibold">Best Customer Support</p>
          <p className="font-light text-gray-400">
            We provide 24/7 customer support.
          </p>
        </div>
      </div>  
    </div>
  );
};

export default OurPolicy;
