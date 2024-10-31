import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";

function List() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/product/list`);
      if (response.data.success) {
        setList(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error(response.data.message);
      }
      setList(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* ------- List Table Title ------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* ------- Product List ------- */}

        {list?.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={`data:image/jpg;base64,${item.images[0].toString(
                  "base64"
                )}`}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p>X</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
