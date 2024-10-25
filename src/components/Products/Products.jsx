import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import React from "react";

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="">
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h3>{product.price}$</h3>
        <button>Buy</button>
      </div>
    );
  });
};

export default Products;
