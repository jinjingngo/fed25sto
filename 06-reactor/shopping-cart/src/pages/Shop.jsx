import "./shop.css";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import useGetProducts from "../hooks/useGetProducts";

const Shop = () => {
  const { products } = useGetProducts();

  return (
    <div className="shop">
      {products.map((product) => (
        <Link key={product.id} to={`./product/${product.id}`}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Shop;
