import { Routes, Route } from "react-router-dom";
import LandingRoutes from "@/features/landing/routes/LandingRoutes";
import AuthRoutes from "@/features/auth/routes/AuthRoutes.tsx";
import OnboardingRoutes from "./features/onboarding/routes/OnboardingRoutes";
import HomeRoutes from "./features/home/routes/HomeRoutes";
import { NotFound } from "./features/not-found/pages/NotFoundPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
        {import.meta.env.DEV && (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/onboarding/*" element={<OnboardingRoutes />} />
            <Route path="/home/*" element={<HomeRoutes />} />
          </>
        )}
        {import.meta.env.DEV && (
          <>
            <Route path="/auth/*" element={<NotFound />} />
            <Route path="/onboarding/*" element={<NotFound />} />
            <Route path="/home/*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </main>
  );
}

export default App;
