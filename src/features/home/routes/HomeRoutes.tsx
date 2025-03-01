import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const TribeRoutes = React.lazy(() => import("../tribes/routes/TribeRoutes"));

const EventsRoutes = React.lazy(() => import("../events/routes/EventsRoutes"));

const MessageRoutes = React.lazy(
  () => import("../message/routes/MessageRoutes"),
);

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route
          path="/tribes/*"
          element={
            <Suspense fallback={<SuspenseLoadingPage />}>
              <TribeRoutes />
            </Suspense>
          }
        />
        <Route
          path="/events/*"
          element={
            <Suspense fallback={<SuspenseLoadingPage />}>
              <EventsRoutes />
            </Suspense>
          }
        />
        <Route
          path="/messages/*"
          element={
            <Suspense fallback={<SuspenseLoadingPage />}>
              <MessageRoutes />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
