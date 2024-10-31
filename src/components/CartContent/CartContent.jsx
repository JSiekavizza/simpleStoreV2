import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import React from "react";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2>Tu carrito esta vacio</h2>
  );
};

export default CartContent;
