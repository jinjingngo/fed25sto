import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInCartProducts } from "../data";
import { BASENAME } from "../context";

const Cart = ({ cart = {} }) => {
  const [count, setCount] = useState(0);
  const [showCartList, setShowCartList] = useState(false);

  const inCartProducts = getInCartProducts(cart);

  useEffect(() => {
    const count = Object.values(cart).reduce(
      (accumulator, quantity) => accumulator + quantity,
      0
    );
    setCount(count);
  }, [cart]);

  return (
    <div style={{ cursor: "pointer", marginLeft: "auto" }}>
      <div
        onClick={(e) => {
          e.preventDefault();
          if (!count) return;
          setShowCartList(!showCartList);
        }}
      >
        Cart ({count})
      </div>
      {showCartList && (
        <div
          style={{
            position: "absolute",
            top: "58px",
            width: "300px",
            transform: "translateX(-45%)",
            backgroundColor: "salmon",
            padding: "1rem",
          }}
        >
          <ul>
            {inCartProducts.map(({ name, price, image, id, quantity }) => {
              return (
                <li key={id} style={{}}>
                  <img
                    width={200}
                    height={200}
                    src={`${BASENAME}${image}`}
                    alt={name}
                  />
                  <p>
                    {name} - {price} SEK
                  </p>
                  {quantity && <p>Quantity: {quantity}</p>}
                </li>
              );
            })}
          </ul>
          <Link to="./cart">Go to cart</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
