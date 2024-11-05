import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/dataContext.jsx";

const ProductDetail = () => {
  const { id } = useParams(); // Obtenemos el id del producto desde la URL
  const { data } = useContext(dataContext);

  // Buscamos el producto con el id correspondiente
  const product = data.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <div className="" key={product.id}>
        <div className="bg-white">
          <div className="w-56">
            <a className=" bg-gray-400  block relative h-48 rounded"></a>
            <img
              className="cursor-pointer mt-2"
              src={product.img}
              alt="img-product-card"
            />
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
    </div>
  );
};

export default ProductDetail;
