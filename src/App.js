import CartProvider from "./components/contextProviders/CartProvider";
import Header from "./components/header/Header";
import Watches from "./components/watches/Watches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <section className="p-5">
                <h1 className="text-center text-uppercase fw-bold">Showcase</h1>
                <Watches />
              </section>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
