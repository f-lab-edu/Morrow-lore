import { faker } from '@faker-js/faker';
import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch';

declare global {
  var fetch: typeof nodeFetch.default;
  type RequestInit = nodeFetch.RequestInit;
  type Response = nodeFetch.Response;
}
global.fetch = nodeFetch.default;

const unsplash = createApi({
  accessKey: 'L1S4NmQPsA447oKCupFLPRMEEVxgu0HAodjESrpsxZQ',
  fetch: nodeFetch.default,
});

const generateProducts = () => {
  const productArray = [];
  for (let i = 0; i < 30; i++) {
    const product = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      photo: unsplash.search.getPhotos({ query: 'sneakers' }),
      description: faker.commerce.productDescription(),
      sales: faker.number.int(50),
    };
    productArray.push(product);
  }
  return productArray;
};

export const products = generateProducts();
