import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const hideCartPath = ["/cart"];

const Header = () => {
  const [showCart, setShowCart] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowCart(hideCartPath.includes(pathname) ? false : true);
  }, [pathname]);
  return (
    <div className="header">
      <Link to="./">Duck Shop</Link>
      {showCart && <Cart />}
    </div>
  );
};

export default Header;
