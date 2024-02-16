import axios from 'axios';

export const postCarts = async (product: object) => {
  const url = '/api/cart';
  const response = await axios.post(url, { product: product });
  return response;
};
