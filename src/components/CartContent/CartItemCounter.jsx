import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import React from "react";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = () => {
    const productrepeat = cart.find((item) => item.id === product.id);

    productrepeat.quanty !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty - 1 }
            : item
        )
      );
  };
  return (
    <>
      <div className="flex items-center justify-between w-56">
        <p
          className="bg-white text-black cursor-pointer rounded-xl p-2"
          onClick={decrese}
        >
          -
        </p>
        <p>{product.quanty}</p>
        <p
          className="bg-white text-black cursor-pointer rounded-xl p-2"
          onClick={() => buyProducts(product)}
        >
          +
        </p>
      </div>
    </>
  );
};

export default CartItemCounter;
