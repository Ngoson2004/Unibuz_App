import { Tab } from "@/shared/components/Tabs";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Outlet />
      <Tab />
    </>
  );
}
