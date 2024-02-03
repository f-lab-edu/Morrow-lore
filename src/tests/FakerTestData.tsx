import { faker } from '@faker-js/faker';

const generateProducts = () => {
  const productArray = [];
  for (let i = 0; i < 30; i++) {
    const product = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      sales: faker.number.int(50),
    };
    productArray.push(product);
  }
  return productArray;
};

export const products = generateProducts();
