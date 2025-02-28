import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const SignInPage = React.lazy(() => import("../pages/SignInPage"));
const SignUpPage = React.lazy(() => import("../pages/SignUpPage"));
const AuthCode = React.lazy(() => import("../pages/AuthCode"));
const Password = React.lazy(() => import("../pages/Password"));

export default function AuthRoutes() {
  return (
    <Suspense fallback={<SuspenseLoadingPage />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="verify" element={<AuthCode />} />
          <Route path="password" element={<Password />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
