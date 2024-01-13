import { BASENAME } from "../context";
const Product = ({ product, onAdd }) => {
  const { name, price, image, id } = product;
  const onClickHandler = (e) => {
    e.preventDefault();
    onAdd(id);
  };
  return (
    <div style={{ padding: "2em" }}>
      <img width={200} height={200} src={`${BASENAME}${image}`} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <button onClick={onClickHandler}>+ Add to cart</button>
    </div>
  );
};

export default Product;
