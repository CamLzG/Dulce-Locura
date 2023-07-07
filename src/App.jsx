import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import ItemDetailContainer from "./components/ProductPage/ItemDetailContainer/ItemDetailContainer";
import CartSection from "./components/CartSection/CartSection";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/category" element={<ProductPage />}></Route>
            <Route path="/category/:id" element={<ProductPage />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<CartSection/>}></Route>
          </Routes>
          <Footer />
        </CartContextProvider>
      </Router>
    </>
  );
}

export default App;
