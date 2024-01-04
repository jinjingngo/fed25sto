import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <div>
      <Header cartItems={cartItems} />
      <Body onAdd={handleAddToCart} />
    </div>
  );
}

export default App;
