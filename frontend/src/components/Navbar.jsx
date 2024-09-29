import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  let navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("collection")) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [location]);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden gap-5 text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          onClick={() => {
            if (!location.pathname.includes("collection")) {
              navigate("/collection");
              setShowSearch(true);
            } else {
              setShowSearch(true);
            }
          }}
          className="w-6 cursor-pointer"
          alt=""
        />
        <div className="relative group">
          <Link to={"/login"}>
            <img
              src={assets.profile_icon}
              className="w-6 cursor-pointer"
              alt=""
            />
          </Link>

          <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
              <p className="cursor-pointer hover:text-gray-700">My Profile</p>
              <p className="cursor-pointer hover:text-gray-700">Orders</p>
              <p className="cursor-pointer hover:text-gray-700">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 min-w-5" alt="" />
          <p className="absolute right-[-7px] bottom-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screens */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <ul className="flex flex-col items-center gap-20 py-20 text-2xl gray-700">
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              to="/"
              className="flex flex-col items-center gap-1 "
            >
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[4px] bg-gray-700 hidden rounded-full" />
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[4px] bg-gray-700 hidden rounded-full" />
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              to="/about"
              className="flex flex-col items-center gap-1"
            >
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[4px] bg-gray-700 hidden rounded-full" />
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              to="/contact"
              className="flex flex-col items-center gap-1"
            >
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[4px] bg-gray-700 hidden rounded-full" />
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
