import { useEffect, useState } from "react";
import CartProviderContext from "./CartProvider.context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = Object.values(cart).reduce(
      (accumulator, quantity) => accumulator + quantity,
      0
    );
    setCount(count);
  }, [cart]);

  const get = () => {
    return cart;
  };

  const add = (id) => {
    const quantity = cart[id] ? cart[id] + 1 : 1;
    setCart({ ...cart, [id]: quantity });
  };

  const remove = (id) => {
    if (!cart[id]) return;

    const quantity = cart[id] - 1;

    const decreasedCart = {
      ...cart,
      [id]: quantity,
    };

    const nonZeroCart = Object.entries(decreasedCart).reduce(
      (newCart, [key, value]) => {
        if (value !== 0) {
          newCart[key] = value;
        }
        return newCart;
      },
      {}
    );

    setCart(nonZeroCart);
  };

  const value = {
    get,
    add,
    remove,
    count,
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};

export default CartProvider;
