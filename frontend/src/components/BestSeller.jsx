import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    let bestSeller = products.filter((product) => product.bestseller === true);
    setBestSeller(bestSeller);
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 mb-12 text-4xl text-center">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-lg font-light text-gray-700 sm:text-lg">
          Explore our most sought-after products, curated to meet your every
          need with quality, style, and unbeatable value.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 ">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
