import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";

export default function OnboardingLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
