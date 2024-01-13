import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import { BASENAME } from "./context";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartItems(cartItems + 1);
  };

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Root cartItems={cartItems} />}>
          <Route index element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route
            path="/product/:id"
            element={<ItemPage handleAddToCart={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
