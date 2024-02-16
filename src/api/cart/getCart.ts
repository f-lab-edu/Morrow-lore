import axios from 'axios';

export const getCart = async () => {
  const url = '/api/cart';
  const response = await axios.get(url);
  return response;
};
