/* eslint-disable react-refresh/only-export-components */
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./services/redux/store";

import "./index.css";

import { SignInPage } from "./pages/AuthPage/SignInPage";
import { Layout } from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { DeliveryPage } from "./pages/DeliveryPage/DeliveryPage";
import { BonusPage } from "./pages/BonusPage/BonusPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { SignUpPage } from "./pages/AuthPage/SignUpPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
// import { App } from "./pages/App/App";
import { InfoPaymentPageSucess } from "./pages/InfoPaymentPage/InfoPaymentPageSucess";
import { InfoPaymentPageFail } from "./pages/InfoPaymentPage/InfoPaymentPageFail";
import ScrollToTop from "./hooks/ScrollToTop";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { WholesalePage } from "./pages/WholesalePage/WholesalePage";
import { ChangePasswordPage } from "./pages/AuthPage/ChangePasswordPage";
import { RecoverPasswordPage } from "./pages/AuthPage/RecoverPasswordPage";
import { ResetPasswordPage } from "./pages/AuthPage/ResetPasswordPage";

const Root: FC = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<App />} /> */}
          {/* <Route path="/main" element={<MainPage />} /> */}
          <Route index element={<MainPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/delivery-page" element={<DeliveryPage />} />
          <Route path="/bonus-page" element={<BonusPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/order-page" element={<OrderPage />} />
          <Route path="/payment-sucess" element={<InfoPaymentPageSucess />} />
          <Route path="/payment-fail" element={<InfoPaymentPageFail />} />
          <Route path="/wholesale-page" element={<WholesalePage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/recover-password" element={<RecoverPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //   <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop />
        <Root />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //   </React.StrictMode>
);
