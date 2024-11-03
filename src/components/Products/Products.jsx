import { useContext, useState } from "react";
import { dataContext } from "../Context/dataContext.jsx";

const Products = () => {
  const { data, buyProducts } = useContext(dataContext);

  return data.map((product) => {
    return (
      <section className="text-gray-600 body-font p-4">
        <div className="" key={product.id}>
          <div className="bg-white">
            <div className="w-56">
              <a className=" bg-gray-400  block relative h-48 rounded"></a>
              <img className="mt-2" src={product.img} alt="img-product-card" />
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
                <button onClick={() => buyProducts(product)}>Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default Products;
