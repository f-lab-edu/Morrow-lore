import axios from 'axios';

export const postCarts = async (product: object) => {
  const url = '/api/cart';
  const carts = await axios.post(url, { product: product });
  return carts;
};
