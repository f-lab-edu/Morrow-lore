import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  sales: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const url = '/api/products';
  const response = await axios.get<Product[]>(url);
  return response.data;
};
