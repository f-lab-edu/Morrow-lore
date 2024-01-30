import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const generateProducts = (): Product[] => {
      const productArray: Product[] = [];
      for (let i = 0; i < 100; i++) {
        const id = i;
        const product: Product = {
          id,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.urlLoremFlickr({ category: "sneakers" }),
          description: faker.commerce.productDescription(),
          sales: faker.number.int(100),
        };
        productArray.push(product);
      }
      return productArray;
    };

    setProducts(generateProducts());
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(`/singledetail/${productId}`);
  };

  return (
    <section>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: "pointer" }}
        >
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
