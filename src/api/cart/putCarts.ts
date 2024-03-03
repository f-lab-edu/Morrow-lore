import axios from 'axios';

export const putCarts = async (product: object) => {
  const url = '/api/cart';
  const response = await axios.put(url, { product: product });
  return response.data;
};
