import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/ManageCenterRotue';
import { useAxios } from '../axios/AxiosContext';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const axios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get('/api/products')
          .then((response) => {
            setProducts(response.data.result);
          })
          .catch((error) => console.error('Fetching products failed:', error));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [axios]);

  const handleProductClick = (productId: number) => {
    try {
      axios
        .post(`/api/product/${productId}`)
        .then(() => {
          navigate(ROUTES.PRODUCTID(productId));
        })
        .catch((error) => console.error('Fetching products failed:', error));
    } catch (error) {
      console.error(error);
    }
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
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>판매 수: {product.sales}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductPage;
