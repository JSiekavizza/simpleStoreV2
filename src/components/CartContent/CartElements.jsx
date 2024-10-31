import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import CartItemCounter from "./CartItemCounter.jsx";

import React from "react";

const CartElements = () => {
  const { cart } = useContext(dataContext);
  return cart.map((product) => {
    return (
      <div className="" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <CartItemCounter product={product} />
        <h3>{product.price * product.quanty}$</h3>
        <button>Buy</button>
      </div>
    );
  });
};

export default CartElements;
