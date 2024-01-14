import "./cart.css";

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
    <div className="cart">
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
        <div className="cart__popover">
          <ul className="cart__list">
            {inCartProducts.map(({ name, price, image, id, quantity }) => {
              return (
                <li className="cart__item" key={id}>
                  <img
                    className="cart__image"
                    src={`${BASENAME}${image}`}
                    alt={name}
                  />
                  <p className="cart__name_price">
                    {name} - {price} SEK
                  </p>
                  {quantity && (
                    <p className="cart__quantity">Quantity: {quantity}</p>
                  )}
                </li>
              );
            })}
          </ul>
          <Link className="goto_basket" to="./cart">
            Go to cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
