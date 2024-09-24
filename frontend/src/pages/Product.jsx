import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  let fetchProductData = async () => {
    products.forEach((product) => {
      if (product._id === id) {
        setProductData(product);
        setImage(product.image[0]);
        setSize(product.sizes[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  return productData ? (
    <div className="pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100">
      {/* Product Data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row ">
        {/* Product Images */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  alt={`Product image ${index + 1}`}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-bold">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">4.5</p>
          </div>
          <p className="mt-5 text-3xl font-light">
            <span className="font-semibold">{currency}</span>
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes &&
                productData.sizes.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`border py-2 px-4 bg-gray-100 ${
                        item === size ? "border-orange-500 bg-orange-200" : ""
                      }`}
                      onClick={() => {
                        setSize(item);
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
          <button
            className="px-8 py-3 text-sm text-white bg-black active:bg-gray-700"
            onClick={() => {
              addToCart(productData._id, size);
              toast.success("Product Added to Cart!");
            }}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return & exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Reviews Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">Description</b>
          <p className="px-5 py-3 text-sm border">Reviews (112 )</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border">
          <p>
            An E-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and global reach they offer.
          </p>
          <p>
            E-commerce website typically display products or services along with
            detailed descriptions, images, prices, and any available variations
            (e.g., sizes, colors, etc.). Each product usually its own dedicated
            page with relevant information.
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div style={{ opacity: 0 }}></div>
  );
};

export default Product;
