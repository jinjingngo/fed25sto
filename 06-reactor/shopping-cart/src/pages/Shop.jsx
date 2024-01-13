import Body from "../components/Body";

const Shop = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <Body cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
  );
};

export default Shop;
