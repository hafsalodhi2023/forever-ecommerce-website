import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export let backendURL = import.meta.env.VITE_BACKEND_URL;
export let currency = "PKR. ";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-800 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />}></Route>
                <Route path="/list" element={<List token={token} />}></Route>
                <Route
                  path="/orders"
                  element={<Orders token={token} />}
                ></Route>
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
