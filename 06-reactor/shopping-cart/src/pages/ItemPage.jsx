import { useParams } from "react-router-dom";
import { getProduct } from "../data";
import Product from "../components/Product";

const ItemPage = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const { id } = useParams();
  const item = getProduct(id);

  if (!item) return <div>Item not found</div>;
  return (
    <div style={{ display: "flex" }}>
      <Product
        product={item}
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
      />
      <div style={{ marginTop: "10em" }}>{item.description}</div>
    </div>
  );
};

export default ItemPage;
