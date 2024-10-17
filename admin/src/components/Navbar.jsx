import { assets } from "../assets/assets";

function Navbar({ setToken }) {
  return (
    <div className="flex items-center justify-between px-[4%] py-2 bg-white">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
      <button
        onClick={() => setToken("")}
        className="px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
