import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import Navbar from "../Navbar/Navbar.jsx";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <div className="bg-gray-400 flex flex-col justify-arround p-3  mt-5">
            <CartElements />
            <CartTotal />
          </div>
        </>
      ) : (
        <h2 className="bg-black text-white text-center text-2xl p-3">
          Tu carrito esta vacio
        </h2>
      )}
    </>
  );
};

export default CartContent;
