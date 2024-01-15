import { getProduct } from "../data";

const useGetProduct = (id) => {
  const product = getProduct(id);
  return { product };
};

export default useGetProduct;
