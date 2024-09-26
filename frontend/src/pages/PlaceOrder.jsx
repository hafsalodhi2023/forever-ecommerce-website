import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Email Address"
          className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zip Code"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="py-1.5 px-3.5 border border-gray-300 rounded w-full"
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12 text-2xl">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button
              className="px-16 py-3 my-8 text-sm text-white bg-black"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
