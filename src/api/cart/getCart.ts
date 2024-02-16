import axios from 'axios';

export const getCart = async () => {
  const url = '/api/cart';
  const cart = await axios.get(url);
  return cart;
};
