import { http, HttpResponse } from 'msw';
import { products } from '../tests/FakerTestData';

export const handlers = [
  http.get('/api/products', async () => {
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
];
