import { Route, Routes } from "react-router-dom";
import MessagePage from "../pages/MessagePage";

export default function MessageRoutes() {
  return (
    <Routes>
      <Route index element={<MessagePage />} />
    </Routes>
  );
}
