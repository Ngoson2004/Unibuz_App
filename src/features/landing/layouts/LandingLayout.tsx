import ComingSoonFooter from "@/shared/components/ComingSoonFooter";
import ComingSoonHeader from "@/shared/components/ComingSoonHeader";
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <div>
      <ComingSoonHeader />
      <Outlet />
      <ComingSoonFooter />
    </div>
  );
}

export default LandingLayout;
