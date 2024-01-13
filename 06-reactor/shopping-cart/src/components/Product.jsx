import { BASENAME } from "../context";
const Product = ({ name, price, image, onAdd }) => {
  return (
    <div style={{ padding: "2em" }}>
      <img width={200} height={200} src={`${BASENAME}${image}`} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <button onClick={onAdd}>+ Add to cart</button>
    </div>
  );
};

export default Product;
