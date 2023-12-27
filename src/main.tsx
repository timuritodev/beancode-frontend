/* eslint-disable react-refresh/only-export-components */
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./services/redux/store";

import "./index.css";

import SignInPage from "./pages/AuthPage/SignInPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import { Layout } from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

const Root: FC = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route
						path="/recover-password"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<RecoverPasswordPage />
							)
						}
					/>
					<Route
						path="/reset-password/:code"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<ResetPasswordPage />
							)
						}
					/>
					<Route path="/reset-password" element={<ResetPasswordPage />} />
					<Route
						path="/confirm-email"
						element={
							user.token ? (
								<>
									<Loader />
									<Navigate to="/" />
								</>
							) : (
								<ConfirmEmailPage />
							)
						}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<ProfilePage />
							</ProtectedRoute>
						}
					/> */}
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
