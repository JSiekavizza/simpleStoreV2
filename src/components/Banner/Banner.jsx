import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gray-200">
      <div
        className=" flex flex-col justify-center  bg-center content-box bg-cover h-56 mt-3 mb-5"
        style={{
          backgroundImage: ``,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="bg-gray-300 block flex-col text-center justify-center p-5">
          <h2 className="text-2xl text-gray-900">
            Ropa Esencial para cada día
          </h2>
          <button className="mt-2">
            <Link
              className="flex text-black bg-gray-400 border-0 py-2 px-8 
                                focus:outline-none hover:bg-orange-500 rounded text-lg mt-10 sm:mt-0"
              to="/tienda"
            >
              Tienda
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
