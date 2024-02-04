import { http, HttpResponse } from 'msw';
import { products } from '../tests/FakerTestData';

export const handlers = [
  http.get('/api/products', () => {
    if (!products) {
      return HttpResponse.error();
    } else {
      new HttpResponse('', { status: 200 });
      return HttpResponse.json({ products });
    }
  }),
];
