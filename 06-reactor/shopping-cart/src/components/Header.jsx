import { useEffect, useState } from "react";
import Cart from "./Cart";

const Header = ({ cart = {} }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const count = Object.values(cart).reduce(
      (accumulator, quantity) => accumulator + quantity,
      0
    );
    setCount(count);
  }, [cart]);
  return (
    <div
      style={{
        backgroundColor: "#282c36",
        minHeight: "60px",
        padding: "10px 10px 0 10px",
        display: "flex",
        fontSize: "2em",
        color: "white",
      }}
    >
      <div>My Shop</div>
      <Cart numItems={count} />
    </div>
  );
};

export default Header;
