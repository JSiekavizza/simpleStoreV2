import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../Banner/Banner.jsx";
import Products from "../Products/Products.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <body
        className="flex flex-wrap justify-center
      "
      >
        <Products />
      </body>
    </>
  );
};

export default Home;
