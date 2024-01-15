export const products = [
  {
    id: 1,
    name: "Shirt",
    price: 150,
    image: "/image/shirt.jpg",
    description: "This is a shirt",
  },
  {
    id: 2,
    name: "Pants",
    price: 250,
    image: "/image/pants.jpg",
    description: "This is pants",
  },
  {
    id: 3,
    name: "Hat",
    price: 150,
    image: "/image/hat.jpg",
    description: "This is a hat",
  },
  {
    id: 4,
    name: "Scarf",
    price: 250,
    image: "/image/scarf.jpg",
    description: "This is a scarf",
  },
  {
    id: 5,
    name: "Shoes",
    price: 350,
    image: "/image/shoes.jpg",
    description: "This is shoes",
  },
  {
    id: 6,
    name: "Watch",
    price: 450,
    image: "/image/watch.jpg",
    description: "This is a watch",
  },
];

export const getProduct = (id) => {
  return products.find((product) => product.id === Number(id));
};

export const getInCartProducts = (cart = {}) =>
  products.reduce((previous, product) => {
    if (!cart[product.id]) return previous;
    return [...previous, { ...product, quantity: cart[product.id] }];
  }, []);
