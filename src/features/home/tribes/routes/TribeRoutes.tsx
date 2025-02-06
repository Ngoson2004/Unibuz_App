import { Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import MyTribesPage from "../pages/MyTribesPage";
import TribeDetailsPage from "../pages/TribeDetailsPage";
import UnibazaarPage from "../pages/UnibazaarPage";

export default function TribeRoutes() {
  return (
    <Routes>
      <Route path="feed" element={<FeedPage />} />
      <Route path="my-tribes" element={<MyTribesPage />} />
      <Route path="my-tribes/:id" element={<TribeDetailsPage />} />
      <Route path="market" element={<UnibazaarPage />} />
    </Routes>
  );
}
