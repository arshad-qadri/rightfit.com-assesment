import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="absolute px-5 py-3 flex justify-between w-full left-0 top-0">
      <h1 className="uppercase text-white font-bold">
        <Link to={"/"}>
          {/* <span className="opacity-60">Right</span>fit.com */}
          <img className="my-3" src="./assets/logo.png" width={100} alt="logo" />
        </Link>
      </h1>
      <Menu/>
    </div>
  );
};

export default Header;
