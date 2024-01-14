import { Link } from "react-router-dom";
import { products } from "../data";
import Product from "./Product";

const Body = ({ cart, onAdd, onRemove }) => {
  return (
    <div className="shop">
      {products.map((product) => (
        <Link key={product.id} to={`./product/${product.id}`}>
          <Product
            product={product}
            cart={cart}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </Link>
      ))}
    </div>
  );
};

export default Body;
