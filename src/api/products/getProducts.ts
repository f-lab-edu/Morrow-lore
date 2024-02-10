import axios from 'axios';

export const getProducts = async () => {
  const url = '/api/products';
  const products = await axios.get(url);
  return products;
};
