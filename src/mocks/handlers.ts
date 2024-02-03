import { http, HttpResponse } from 'msw';
import { products } from '../tests/FakerTestData';

export const handlers = [
  http.get('/api/products', () => {
    console.log(products);
    return HttpResponse.json({ products });
  }),
];
