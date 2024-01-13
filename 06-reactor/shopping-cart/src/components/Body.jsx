import { Link } from "react-router-dom";
import { products } from "../data";
import Product from "./Product";

const Body = ({ onAdd }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {products.map((product) => (
        <Link key={product.id} to={`./product/${product.id}`}>
          <Product product={product} onAdd={onAdd} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
