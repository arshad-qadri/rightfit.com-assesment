import React from "react";
import Menu from "../header/Menu";
import Cart from "../cart/Cart";
import { useDrawer } from "../../context/drawer";

const Drawer = () => {
    const {isDrawerOpen} = useDrawer()
  return (
    <div className={`h-screen absolute ${isDrawerOpen ? "right-0":"-right-[450px]"}  top-0 w-[450px] bg-[#D9D9D9] z-40 p-5`}>
      <div className="flex justify-center items-center">
        <Menu color="black" />
      </div>
      <Cart />
    </div>
  );
};

export default Drawer;
