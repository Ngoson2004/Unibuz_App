import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseLoadingPage from "./shared/page/SuspenseLoadingPage";

const LandingRoutes = React.lazy(
  () => import("@/features/landing/routes/LandingRoutes"),
);
const AuthRoutes = React.lazy(
  () => import("@/features/auth/routes/AuthRoutes"),
);
const OnboardingRoutes = React.lazy(
  () => import("@/features/onboarding/routes/OnboardingRoutes"),
);
const HomeRoutes = React.lazy(
  () => import("@/features/home/routes/HomeRoutes"),
);
const NotFound = React.lazy(
  () => import("./features/not-found/pages/NotFoundPage"),
);

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/*"
          element={
            <Suspense fallback={<SuspenseLoadingPage />}>
              <LandingRoutes />
            </Suspense>
          }
        />
        {import.meta.env.DEV ? (
          <>
            <Route
              path="/auth/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <AuthRoutes />
                </Suspense>
              }
            />
            <Route
              path="/onboarding/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <OnboardingRoutes />
                </Suspense>
              }
            />
            <Route
              path="/home/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <HomeRoutes />
                </Suspense>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/auth/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <NotFound />
                </Suspense>
              }
            />
            <Route
              path="/onboarding/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <NotFound />
                </Suspense>
              }
            />
            <Route
              path="/home/*"
              element={
                <Suspense fallback={<SuspenseLoadingPage />}>
                  <NotFound />
                </Suspense>
              }
            />
          </>
        )}
      </Routes>
    </main>
  );
}
export default App;
