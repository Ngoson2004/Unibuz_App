import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthCode from "../pages/AuthCode";
import Password from "../pages/Password";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="verify" element={<AuthCode />} />
      <Route path="password" element={<Password />} />
    </Routes>
  );
}
