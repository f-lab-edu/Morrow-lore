import axios from 'axios';

export const getProducts = async () => {
  const url = '/api/products';
  const response = await axios.get(url);
  return response;
};
