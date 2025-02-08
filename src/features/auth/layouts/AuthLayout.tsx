import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
