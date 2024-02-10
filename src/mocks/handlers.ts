import { http, HttpResponse } from 'msw';
import { createApi } from 'unsplash-js';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  sales: number;
}

const products: Product[] = [];
const cart: Product[] = [];

const unsplash = createApi({
  accessKey: 'L1S4NmQPsA447oKCupFLPRMEEVxgu0HAodjESrpsxZQ',
});

const generateProducts = async () => {
  const response = await unsplash.search.getPhotos({
    query: 'sneakers',
    perPage: 30,
  });
  const photoUrls =
    response.response?.results.map((photo) => photo.urls.small) || [];

  for (let i = 0; i < photoUrls.length; i++) {
    products.push({
      id: i,
      name: `MORROWLORE-SB110${i}`,
      price: Math.floor(Math.random() * (200000 - 50000) + 50000),
      photo: photoUrls[i],
      sales: Math.floor(Math.random() * (30 - 10) + 10),
    });
  }
};

generateProducts();

export const handlers = [
  http.get('/api/products', () => {
    try {
      const result = products;
      return HttpResponse.json({ result });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.get(`/api/products/:productId`, ({ params }) => {
    const { productId } = params;
    try {
      const result = products;
      const detailResult = result.filter((x) => {
        if (x.id === parseInt(productId)) {
          return x;
        }
      });
      return HttpResponse.json(detailResult[0]);
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.post(`/api/cart`, async ({ request }) => {
    const product = await request.json();
    try {
      cart.push(product);
      localStorage.setItem('myCart', JSON.stringify(cart));
      return HttpResponse.json({ product });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.get(`/api/cart`, () => {
    try {
      return HttpResponse.json(JSON.parse(localStorage.getItem('myCart')));
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.delete(`/api/cart`, async ({ request }) => {
    const product = await request.json();
    try {
      const newCart = cart.filter((x) => {
        if (x.product.id !== product.product.id) {
          return x;
        }
      });
      localStorage.setItem('myCart', JSON.stringify(newCart));
      return HttpResponse.json({ newCart });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
];
