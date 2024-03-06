import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './api/context/CartContext.js';

import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import PaymentPage from './pages/PaymentPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentCompletedPage from './pages/PaymentCompeletedPage';

import LazyLoadWrapper from './components/utility/LazyLoadWrapper';

const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductIdPage = lazy(() => import('./pages/ProductIdPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orderComplete" element={<PaymentCompletedPage />} />
          <Route
            path="/products"
            element={
              <LazyLoadWrapper>
                <ProductPage />
              </LazyLoadWrapper>
            }
          />
          <Route
            path="/products/:itemId"
            element={
              <LazyLoadWrapper>
                <ProductIdPage />
              </LazyLoadWrapper>
            }
          />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
