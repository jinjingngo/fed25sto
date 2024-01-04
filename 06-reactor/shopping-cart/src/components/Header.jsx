import Cart from "./Cart";

const Header = ({ cartItems }) => {
  return (
    <div
      style={{
        backgroundColor: "#282c36",
        minHeight: "60px",
        padding: "10px 10px 0 10px",
        display: "flex",
        fontSize: "2em",
        color: "white",
      }}
    >
      <div>My Shop</div>
      <Cart numItems={cartItems} />
    </div>
  );
};

export default Header;
