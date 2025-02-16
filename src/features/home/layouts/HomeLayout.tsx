import { Tab } from "@/shared/components/Tabs";
import UserProvider from "../providers/UserProvider";

export default function HomeLayout() {
  return (
    <>
      <UserProvider />
      <Tab />
    </>
  );
}
