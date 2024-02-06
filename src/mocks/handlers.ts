import { http, HttpResponse } from 'msw';
import { products } from '../tests/FakerTestData';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  photo: string;
  sales: number;
}
const cart: Product[] = [];

export const handlers = [
  http.get('/products', async () => {
    try {
      const result = await products;
      return HttpResponse.json({ result });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.post(`/singledetail/:productId`, async ({}) => {
    try {
      return HttpResponse.json();
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.get(`/singledetail/:productId`, async ({ params }) => {
    const { productId } = params;
    try {
      const result = await products;
      const detailResult = result.filter((x) => {
        if (x.id === parseInt(productId)) {
          return x;
        }
      });
      return HttpResponse.json({ detailResult });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.post(`/cart`, async ({ request }) => {
    const product = await request.json();
    try {
      cart.push(product);
      localStorage.setItem('myCart', JSON.stringify(cart));
      return HttpResponse.json({ product });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.get(`/cart`, async () => {
    try {
      return HttpResponse.json(JSON.parse(localStorage.getItem('myCart')));
    } catch (error) {
      return HttpResponse.error();
    }
  }),
];
