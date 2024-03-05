import axios from 'axios';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  sales: number;
}

export const putCarts = async (product: CartItem) => {
  const url = '/api/cart';
  const response = await axios.put(url, { product });
  return response.data;
};
