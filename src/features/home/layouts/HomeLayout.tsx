import { Tab } from "@/shared/components/Tabs";
import AuthProvider from "../providers/AuthProvider";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <AuthProvider>
        <Outlet />
        <Tab />
      </AuthProvider>
    </>
  );
}
