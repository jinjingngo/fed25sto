import { BASENAME } from "../context";
const Product = ({ product, cart = {}, onAdd, onRemove }) => {
  const { name, price, image, id, quantity } = product;
  const onAddHandler = (e) => {
    e.preventDefault();
    onAdd(id);
  };

  const onRemoveHandler = (e) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <div style={{ padding: "2em" }}>
      <img width={200} height={200} src={`${BASENAME}${image}`} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      {quantity && <p>Quantity: {quantity}</p>}
      <button onClick={onAddHandler}>+ Add to Cart</button>
      {cart[id] && (
        <button onClick={onRemoveHandler}>- Remove 1 from Cart</button>
      )}
    </div>
  );
};

export default Product;
