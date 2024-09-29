import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer"
      onClick={() => {
        window.scrollBy(0, -9999);
      }}
      to={`/product/${id}`}
    >
      <div className="overflow-hidden ">
        <img
          className="transition-all ease-in-out hover:scale-110"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 overflow-hidden text-lg whitespace-nowrap text-ellipsis">
        {name}
      </p>
      <p className="text-xl font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
