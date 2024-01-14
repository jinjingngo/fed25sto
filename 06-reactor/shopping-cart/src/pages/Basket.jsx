import "./basket.css";
import { getInCartProducts } from "../data";
import Product from "../components/Product";

const Basket = ({ cart = {}, handleAddToCart, handleRemoveFromCart }) => {
  const inCartProducts = getInCartProducts(cart);

  return (
    <div className="basket">
      {inCartProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default Basket;
