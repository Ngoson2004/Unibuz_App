import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const FeaturePage = React.lazy(() => import("../pages/FeaturePage"));
const ComingSoonPage = React.lazy(() => import("../pages/ComingSoonPage"));
const NotFoundPage = React.lazy(
  () => import("@/features/not-found/pages/NotFoundPage"),
);
const UnsubscribePage = React.lazy(() => import("../pages/UnsubscribePage"));
const WheelOfPrizesPage = React.lazy(
  () => import("../pages/WheelOfPrizesPage"),
);

export default function LandingRoutes() {
  return (
    <Suspense fallback={<SuspenseLoadingPage />}>
      <Routes>
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
        <Route path="/wheel-of-prizes" element={<WheelOfPrizesPage />} />
        <Route element={<LandingLayout />}>
          <Route index element={<ComingSoonPage />} />
          {import.meta.env.DEV && (
            <>
              <Route path="/landing" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/feature" element={<FeaturePage />} />
              <Route path="/blog" element={<ComingSoonPage />} />
            </>
          )}
          {!import.meta.env.DEV && (
            <>
              <Route
                path="/landing"
                element={
                  <Suspense fallback={<SuspenseLoadingPage />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<SuspenseLoadingPage />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
              <Route
                path="/feature"
                element={
                  <Suspense fallback={<SuspenseLoadingPage />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
              <Route
                path="/blog"
                element={
                  <Suspense fallback={<SuspenseLoadingPage />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </>
          )}
        </Route>
      </Routes>
    </Suspense>
  );
}
