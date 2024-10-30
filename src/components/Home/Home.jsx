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

      <body
        className="flex flex-wrap justify-center
      "
      >
        <Products />
      </body>
      <div className="lg:flex flex-col items-center">
        <News />
      </div>
      <div className="bg-gray-200 mb-0 bottom-0 w-full p-4 mt-7">
        <Footer />
      </div>
    </>
  );
};

export default Home;
