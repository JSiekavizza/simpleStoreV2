import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import React from "react";

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
      <section class="text-gray-600 body-font p-4">
        <div class="">
          <div class="bg-white">
            <div class="w-56">
              <a class=" bg-gray-400  block relative h-48 rounded"></a>
              <img className="mt-2" src={product.img} alt="img-product-card" />
              <div class="mt-4 ">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p class="mt-1">{product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default Products;
