import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBox = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);

  return showSearch ? (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-3/4 px-5 py-2 mx-3 my-5 border border-gray-400 rounded-full sm:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          className="flex-1 text-sm outline-none bg-inherit"
        />
        <img
          src={assets.cross_icon}
          alt=""
          className="inline w-3 cursor-pointer"
          onClick={(e) => {
            setShowSearch(false);
          }}
        />
      </div>
    </div>
  ) : null;
};

export default SearchBox;
