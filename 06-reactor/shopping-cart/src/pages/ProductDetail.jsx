import "./productDetail.css";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import useGetProduct from "../hooks/useGetProduct";

const ProductDetail = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  const { id } = useParams();
  const { product } = useGetProduct(id);

  if (!product) return <div>Item not found</div>;
  return (
    <div className="product_detail">
      <Product product={product} />
      <div className="product__description">{product.description}</div>
    </div>
  );
};

export default ProductDetail;
