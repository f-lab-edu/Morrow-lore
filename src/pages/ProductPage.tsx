import React, { useState, useEffect } from "react";
import { fakerKO as faker } from "@faker-js/faker";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  sales: number;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generateProducts = (): Product[] => {
      const productArray: Product[] = [];
      for (let i = 0; i < 100; i++) {
        productArray.push({
          id: i,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.urlLoremFlickr({ category: "sneakers" }),
          description: faker.commerce.productDescription(),
          sales: faker.number.int(100),
        });
      }
      return productArray;
    };

    setProducts(generateProducts());
  }, []);

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>판매 수: {product.sales}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductPage;
