import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const ProductDetail = () => {
  const { id } = useParams(); // Obtenemos el id del producto desde la URL
  const { data, buyProducts } = useContext(dataContext);

  // Buscamos el producto con el id correspondiente
  const product = data.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen flex flex-col justify-between p-4"
        key={product.id}
      >
        <img
          className="bg-gray-400 rounded h-80 bg-cover cursor-pointer"
          src={product.img}
          alt="img-product-card"
        />
        <img className="bg-gray-500 rounded h-80 bg-cover"></img>
        <div className="mt-4 flex-col ">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-gray-900 title-font text-2xl font-bold">
              {product.name}
            </h2>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
          </div>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="">${product.price}</p>
            <button
              className="text-black bg-gray-400 rounded px-2 py-1.5 my-3"
              onClick={() => buyProducts(product)}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
