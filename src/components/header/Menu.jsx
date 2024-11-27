import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import { useDrawer } from "../../context/drawer";
import { useData } from "../../context/data";

const Menu = ({ color }) => {
  const {toggleDrawer }=useDrawer()
  const [searchParams] = useSearchParams();
  const {data} = useData()
  let menuItems = [
    { label: "All Products", link: "/" },
    { label: "Featured Products", link: "/?product=featured" },
  ];
  const activeIndex = searchParams.get("product") === "featured" ? 1 : 0;
  return (
    <div className="flex gap-x-5 justify-center items-center px-5">
      <ul className="flex gap-x-5">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${color === "black" ? "text-black" : "text-white"} ${
              activeIndex === index ? "opcity-90" : "opacity-55"
            }`}
          >
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <button
        className={`${
          color === "black" ? "text-black" : "text-white"
        } flex justify-center items-center gap-x-2`}
        onClick={toggleDrawer}
      >
        <MdOutlineShoppingCart size={18} /> <small> {data?.cart ? data?.cart.length:"0"}</small>
      </button>
    </div>
  );
};

export default Menu;
