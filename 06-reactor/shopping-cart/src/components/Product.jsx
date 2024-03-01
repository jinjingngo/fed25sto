import { BASENAME } from "../constant";
import useCart from "../hooks/useCart";

const Product = ({ product }) => {
  const { name, price, image, id, quantity } = product;
  const { get, add, remove } = useCart();
  const cart = get();
  const onAddHandler = (e) => {
    e.preventDefault();
    add(id);
  };

  const onRemoveHandler = (e) => {
    e.preventDefault();
    remove(id);
  };

  return (
    <div className="product">
      <img className="product__image" src={`${BASENAME}${image}`} alt={name} />
      <p className="product__name_price">
        {name} - {price} SEK
      </p>
      {quantity && <p className="product__quantity">Quantity: {quantity}</p>}
      <button
        className="product__button product__add_to_cart"
        onClick={onAddHandler}
      >
        + Add to Cart
      </button>
      {cart[id] && (
        <button
          className="product__button product__remove_from_cart"
          onClick={onRemoveHandler}
        >
          - Remove 1 from Cart
        </button>
      )}
    </div>
  );
};

export default Product;
