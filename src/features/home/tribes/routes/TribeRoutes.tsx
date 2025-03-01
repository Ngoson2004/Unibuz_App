import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const FeedPage = React.lazy(() => import("../pages/FeedPage"));
const MyTribesPage = React.lazy(() => import("../pages/MyTribesPage"));
const TribeDetailsPage = React.lazy(() => import("../pages/TribeDetailsPage"));
const UnibazaarPage = React.lazy(() => import("../pages/UnibazaarPage"));

export default function TribeRoutes() {
  return (
    <Suspense fallback={<SuspenseLoadingPage />}>
      <Routes>
        <Route path="feed" element={<FeedPage />} />
        <Route path="my-tribes" element={<MyTribesPage />} />
        <Route path="my-tribes/:id" element={<TribeDetailsPage />} />
        <Route path="market" element={<UnibazaarPage />} />
      </Routes>
    </Suspense>
  );
}
