import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base">
        <div>
          <img src={assets.logo} className="w-32 mb-5 " alt="" />
          <p className="w-full text-gray-600 md:w-2/3">
            Welcome to Forever at Great, where timeless elegance meets modern
            convenience. Discover a curated selection of fashion-forward pieces
            that promise both style and quality. Embrace the essence of
            everlasting fashion with us today.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-base text-center">
          Copyright © 2024 @forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
