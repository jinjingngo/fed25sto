import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const hideCartPath = ["/cart"];

const Header = ({ cart = {} }) => {
  const [showCart, setShowCart] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowCart(hideCartPath.includes(pathname) ? false : true);
  }, [pathname]);
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
      {showCart && <Cart cart={cart} />}
    </div>
  );
};

export default Header;
