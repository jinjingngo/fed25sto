const Product = ({ name, price, image, onAdd }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <button onClick={onAdd}>+ Add to cart</button>
    </div>
  );
};

export default Product;
