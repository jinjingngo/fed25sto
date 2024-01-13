import { Link } from "react-router-dom";

const Cart = ({ numItems = 0 }) => {
  return (
    <Link to="./cart" style={{ marginLeft: "auto" }}>
      <div>Cart ({numItems})</div>{" "}
    </Link>
  );
};

export default Cart;
