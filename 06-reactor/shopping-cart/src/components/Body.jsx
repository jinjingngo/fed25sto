import { products } from "../data";
import Product from "./Product";

const Body = ({ onAdd }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {products.map((product, index) => (
        <Product key={index} {...product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Body;
