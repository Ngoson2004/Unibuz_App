import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const EventsPage = React.lazy(() => import("../pages/EventsPage"));
export default function EventsRoutes() {
  return (
    <Suspense fallback={<SuspenseLoadingPage />}>
      <Routes>
        <Route index element={<EventsPage />} />
      </Routes>
    </Suspense>
  );
}
