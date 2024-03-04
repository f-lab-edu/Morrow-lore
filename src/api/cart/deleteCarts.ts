import axios from 'axios';

export const deleteCarts = async (productId: number) => {
  const url = `/api/cart/${productId}`;
  const response = await axios.delete(url);
  console.log(response);
  return response.data;
};
