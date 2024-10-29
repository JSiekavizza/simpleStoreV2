import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import CartContent from "./components/CartContent/CartContent.jsx";
import Tienda from "./components/Tienda/Tienda.jsx";
import DataProvider from "./components/Context/dataContext.jsx";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
