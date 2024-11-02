import React from "react";

import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
  return (
    <div className="bg-black p-5 text-center mt-5">
      <h3 className="text-white">{total} $ </h3>
    </div>
  );
};

export default CartTotal;
