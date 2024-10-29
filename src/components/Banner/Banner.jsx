import React from "react";

import BannerPrincipal from "../../../public/banner/bannerSimple.jpg";

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
      ></div>
    </div>
  );
};

export default Banner;
