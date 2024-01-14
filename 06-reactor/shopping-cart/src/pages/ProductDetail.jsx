import "./productDetail.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../data";
import Product from "../components/Product";

const ProductDetail = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const { id } = useParams();
  const item = getProduct(id);

  if (!item) return <div>Item not found</div>;
  return (
    <div className="product_detail">
      <Product
        product={item}
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
      />
      <div className="product__description">{item.description}</div>
    </div>
  );
};

export default ProductDetail;
