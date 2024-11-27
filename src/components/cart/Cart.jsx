import React from "react";
import CartProduct from "./CartProduct";
import { useData } from "../../context/data";

const Cart = () => {
  const { data } = useData();
  return (
    <div className="mt-4">
      <h2>Shopping Cart</h2>
      {data?.cart &&
        data.cart.length > 0 ?
        data.cart.map((item, index) => <CartProduct key={index} item={item}  />)
      : <p>No items in the cart.</p>}
    </div>
  );
};

export default Cart;
