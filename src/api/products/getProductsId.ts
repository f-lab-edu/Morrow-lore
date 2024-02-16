import axios from 'axios';

export const getTheProduct = async (productId) => {
  const url = `/api/products/${productId}`;
  const response = await axios.get(url);
  return response;
};
