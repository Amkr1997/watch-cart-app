//import Cart from "./components/cart/Cart";
import CartProvider from "./components/contextProviders/CartProvider";
import Header from "./components/header/Header";
import Watches from "./components/watches/Watches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  /*
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function hideCartHandler() {
    setCartIsVisible(false);
  }

  function showCartHandler() {
    setCartIsVisible(true);
  }*/

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
          {/*cartIsVisible && <Cart onHideCart={hideCartHandler} />*/}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
