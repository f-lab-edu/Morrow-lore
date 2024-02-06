import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();
  const [product, setProducts] = useState([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    axios
      .get(`/singledetail/${itemId}`)
      .then((response) => {
        setProducts(response.data.detailResult[0]);
      })
      .catch((error) => console.error('Fetching products failed:', error));
  }, []);

  const handleCartClick = (product: object) => {
    if (inCart === false) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

  const handleGoCartClick = (product: object) => {
    navigate(`/cart`);

    axios
      .post(`/cart`, { product: product })
      .then(() => {})
      .catch((error) => console.error('Fetching products failed:', error));
  };

  return (
    <section>
      <article>
        <h1>{product.name}</h1>
        <img src={product.photo} alt={product.name} />
        <p>{product.description}</p>
        <p>가격: ${product.price}</p>
        <p>판매 수: {product.sales}</p>
      </article>
      <aside>
        <button onClick={() => handleCartClick(product)}>장바구니담기</button>
        <button onClick={() => handleGoCartClick(product)}>결제하기</button>
      </aside>
    </section>
  );
};

export default SingleDetailPage;
