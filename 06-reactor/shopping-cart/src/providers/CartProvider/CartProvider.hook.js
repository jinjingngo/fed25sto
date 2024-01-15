import { useContext } from "react";
import CartProviderContext from "./CartProvider.context";

const useCart = () => {
  return useContext(CartProviderContext);
};

export default useCart;
