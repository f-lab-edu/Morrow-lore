import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import SignUpPage from "./pages/SignUpPage";
import PaymentPage from "./pages/PaymentPage";
import CheckoutPage from "./pages/CheckoutPage";
// import SingleDetailPage from "./pages/SingleDetailPage";

// ProductPage만 lazy loading으로 import
const ProductPage = lazy(() => import("./pages/ProductPage"));
const SingleDetailPage = lazy(() => import("./pages/SingleDetailPage"));

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/product"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path="/singledetail/:itemId" // 동적 경로 매개변수 사용
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <SingleDetailPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
