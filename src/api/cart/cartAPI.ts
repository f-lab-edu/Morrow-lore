import axios from 'axios';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  sales: number;
}
const getCarts = async () => {
  const url = '/api/cart';
  const response = await axios.get(url);
  return response.data;
};

const putCarts = async (product: CartItem) => {
  const url = '/api/cart';
  const response = await axios.put(url, { product });
  return response.data;
};

const deleteCarts = async (productId: number) => {
  const url = `/api/cart/${productId}`;
  const response = await axios.delete(url);
  return response.data;
};

export { getCarts, putCarts, deleteCarts };
