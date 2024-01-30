import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import SignUpPage from "./pages/SignUpPage";
import SingleDetailPage from "./pages/SingleDetailPage";
import PaymentPage from "./pages/PaymentPage";
import CheckoutPage from "./pages/CheckoutPage";

// 지연 로딩할 ProductPage 컴포넌트
const ProductPage = lazy(() => import("./pages/ProductPage"));

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
        <Route path="/singledetail" element={<SingleDetailPage />} />
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
      </Routes>
    </div>
  );
};

export default App;
