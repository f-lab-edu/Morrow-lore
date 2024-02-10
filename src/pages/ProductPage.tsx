import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../routes/ManageCenterRotue';
import { getProducts } from '../api/products/getProducts';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(ROUTES.PRODUCTID(productId));
  };

  return (
    <section>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={product.photo} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.sales}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductPage;
