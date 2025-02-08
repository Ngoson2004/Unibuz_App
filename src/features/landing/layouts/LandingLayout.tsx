import Footers from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footers />
    </div>
  );
}

export default LandingLayout;
