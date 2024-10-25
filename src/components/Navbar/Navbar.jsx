import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-600">
      <nav className="flex justify-between">
        <h1 className="">Shop</h1>
        <Link className="" to={"/cart"}>
          🛒
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
