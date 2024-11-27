import React, { useEffect } from "react";
import { useData } from "../../context/data";

const Product = ({ product }) => {
  const { data, setData } = useData();
  const handleAddCart = () => {
    if (data.cart) {
      setData({ ...data, cart: [...data.cart, product] });
    } else {
      setData({ ...data, cart: [product] });
    }
    alert("Item added successfully.")
  };
  useEffect(()=>{
    console.log("data?.cart=", data.cart);
    
  },[data])
  return (
    <div>
      <div className="relative w-[250px] group">
        <img src="./assets/girl.png" alt="product" className="w-full" />
        <div
          className="absolute top-0 left-0 w-full h-full z-30 cursor-pointer bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleAddCart}
        >
          <button className="text-white font-semibold">Add to cart</button>
        </div>
      </div>
      {/* Product Details */}
      <h5 className="mt-2">{product?.name}</h5>
      <div className="flex gap-x-2">
        {product?.color && (
          <small className="font-semibold text-xs uppercase opacity-70">
            {product?.color}
          </small>
        )}
        {product?.material && (
          <small className="text-xs uppercase opacity-70">
            {product?.material}
          </small>
        )}
      </div>
      <div className="text-red-800 mt-2 text-sm">INR {product?.price}</div>
    </div>
  );
};

export default Product;
