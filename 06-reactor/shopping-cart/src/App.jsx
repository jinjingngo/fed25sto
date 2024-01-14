import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import { BASENAME } from "./context";
import Basket from "./pages/Basket";

function App() {
  const [cart, setCart] = useState({});

  const handleAddToCart = (id) => {
    const quantity = cart[id] ? cart[id] + 1 : 1;
    setCart({ ...cart, [id]: quantity });
  };

  const handleRemoveFromCart = (id) => {
    if (!cart[id]) return;

    const quantity = cart[id] - 1;

    const decreasedCart = {
      ...cart,
      [id]: quantity,
    };

    const nonZeroCart = Object.entries(decreasedCart).reduce(
      (newCart, [key, value]) => {
        if (value !== 0) {
          newCart[key] = value;
        }
        return newCart;
      },
      {}
    );

    setCart(nonZeroCart);
  };

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Root cart={cart} />}>
          <Route
            index
            element={
              <Shop
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Basket
                cart={cart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
