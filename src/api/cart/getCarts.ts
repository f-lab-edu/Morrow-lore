import axios from 'axios';

export const getCarts = async () => {
  const url = '/api/cart';
  const response = await axios.get(url);
  return response.data;
};
