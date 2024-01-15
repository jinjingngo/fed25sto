import "./basket.css";
import { getInCartProducts } from "../data";
import Product from "../components/Product";
import useCart from "../providers/CartProvider/CartProvider.hook";

const Basket = () => {
  const { get } = useCart();
  const cart = get();
  const inCartProducts = getInCartProducts(cart);

  return (
    <div className="basket">
      {inCartProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Basket;
