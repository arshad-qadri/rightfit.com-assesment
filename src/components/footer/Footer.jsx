import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] p-5">
      {/* <h3 className="text-white my-3"><span className="opacity-60">RIGHT</span>FIT.COM</h3> */}
      <img className="my-3" src="./assets/logo.png" width={100} alt="logo" />
      <div className="grid grid-cols-[200px,auto,250px]">
        <ul className="text-white">
          <li className="text-sm mb-1"><Link to={"/"} > Home</Link></li>
          <li className="text-sm mb-1"><Link to={"/"} > All Products</Link></li>
          <li className="text-sm mb-1"><Link to={"/"} > Featured Products</Link></li>
          <li className="text-sm mb-1"><Link to={"/"} > Contact</Link></li>
          <li className="text-sm mb-1"><Link to={"/"} > About Us</Link></li>
        </ul>
        <div>
          <p className="text-white text-sm">
            We are a registered E-Commerce seller and we support a variety of
            Local and International <br /> payment modes
          </p>
          <img className="mt-2" src="./assets/payment.png" alt="Payment"  width={300} />
        </div>
        <div>
            <p className="text-white text-sm">Website protected</p>
            <img className="mt-3" src="./assets/digicert.png" alt="digicert" width={200} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
