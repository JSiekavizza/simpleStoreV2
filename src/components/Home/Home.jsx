import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../Banner/Banner.jsx";
import Products from "../Products/Products.jsx";
import News from "../News/News.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <div
        className="flex flex-wrap justify-center
      "
      >
        <Products />
      </div>
      <News />

      <div className="bg-gray-200 mt-auto p-4">
        <Footer />
      </div>
    </>
  );
};

export default Home;
