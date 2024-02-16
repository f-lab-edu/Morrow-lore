import axios from 'axios';

export const getTheProduct = async (productId) => {
  const url = `/api/products/${productId}`;
  const product = await axios.get(url);
  return product;
};
