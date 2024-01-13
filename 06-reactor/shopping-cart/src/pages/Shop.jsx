import Header from "../components/Header";
import Body from "../components/Body";

const Shop = ({ cartItems, handleAddToCart }) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <Body onAdd={handleAddToCart} />
    </>
  );
};

export default Shop;
