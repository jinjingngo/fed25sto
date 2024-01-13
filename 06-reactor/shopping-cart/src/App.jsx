import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/product/:id"
          element={<ItemPage handleAddToCart={handleAddToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
