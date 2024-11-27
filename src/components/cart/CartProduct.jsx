import React from "react";
import { IoIosClose } from "react-icons/io";
import { useData } from "../../context/data";

const CartProduct = ({ item }) => {
  const { data, setData } = useData();
  const handleRemoveCartItem = (item) => {
    const cartItems = [...data.cart];
    const filterdCart = cartItems.filter((c) => c.id !== item.id);
    setData({ ...data, cart: filterdCart });
  };
  return (
    <div className="flex  items-start gap-x-3  mt-3">
      <img src="./assets/girl.png" alt="product" width={150} />
      <div>
        <h5 className="text-lg">{item.name}</h5>
        <div className="flex gap-x-2">
          {item?.color && (
            <small className="font-semibold text-xs uppercase opacity-70">
              {item?.color}
            </small>
          )}
          {item?.material && (
            <small className="text-xs uppercase opacity-70">
              {item?.material}
            </small>
          )}
        </div>
        <div className="text-red-800 mt-2 text-sm">INR {item?.price}</div>
        <button
          className="bg-black text-white px-2 py-1 mt-2 text-sm flex justify-center items-center gap-x-1"
          onClick={() => handleRemoveCartItem(item)}
        >
          Remove <IoIosClose size={23} />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
