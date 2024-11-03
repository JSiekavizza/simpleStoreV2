import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import { RiDeleteBack2Line } from "react-icons/ri";

import CartItemCounter from "./CartItemCounter.jsx";

import React from "react";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className=" flex justify-around w-auto  p-2" key={product.id}>
        <div className="bg-white flex items-center justify-between rounded-md p-3">
          <div className="mb-3">
            <a className="h-48 rounded"></a>
            <img className="mt-2" src={product.img} alt="img-product-card" />
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.name}
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center  justify-around bg-gray-400">
          <CartItemCounter product={product} />
          <p className="mt-1">{product.price * product.quanty}$</p>
          <h3
            className="cursor-pointer hover:text-red-500"
            onClick={() => deleteProduct(product.id)}
          >
            <RiDeleteBack2Line />
          </h3>
        </div>
      </div>
    );
  });
};

export default CartElements;
