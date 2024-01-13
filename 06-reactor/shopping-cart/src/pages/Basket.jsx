import { getInCartProducts } from "../data";
import Product from "../components/Product";

const Basket = ({ cart = {}, handleAddToCart, handleRemoveFromCart }) => {
  const inCartProducts = getInCartProducts(cart);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
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
