import "./cart.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { getInCartProducts } from "../data";
import { BASENAME } from "../constant";
import useCart from "../providers/CartProvider/CartProvider.hook";

const Cart = () => {
  const [showCartList, setShowCartList] = useState(false);
  const { get, count } = useCart();
  const cart = get();
  console.log(cart);
  const inCartProducts = getInCartProducts(cart);

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
