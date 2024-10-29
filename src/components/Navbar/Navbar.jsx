import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-4   z-10 lg:justify-between">
        <div className="w-full flex items-center justify-between ">
          <Link to={"/"}>
            <h1 className="title-font text-xl font-light text-center mb-4 md:mb-0 hover:text-orange-600">
              SIMPLE
            </h1>
          </Link>
          <Link className="text-xl" to={"/cart"}>
            <BsCart4 />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
