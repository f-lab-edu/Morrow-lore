import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  sales: number;
}

export const getTheProduct = async (productId: string): Promise<Product> => {
  const url = `/api/products/${productId}`;
  const response = await axios.get<Product>(url);
  return response.data;
};
