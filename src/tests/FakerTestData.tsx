import { faker } from '@faker-js/faker';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'L1S4NmQPsA447oKCupFLPRMEEVxgu0HAodjESrpsxZQ',
});

const generateProducts = async () => {
  const productArray = [];
  const photos = await unsplash.search.getPhotos({
    query: 'sneakers',
    perPage: 30,
  });
  const photoUrls =
    photos.response?.results.map((photo) => photo.urls.small) || [];

  for (let i = 0; i < 30; i++) {
    const product = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      photo: photoUrls[i] || require(`../assets/images/sneakers1.png`),
      description: faker.commerce.productDescription(),
      sales: faker.number.int(50),
    };
    productArray.push(product);
  }
  return productArray;
};

const products = generateProducts();

export { products };
