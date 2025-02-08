import { Routes, Route } from "react-router-dom";
import LandingRoutes from "@/features/landing/routes/LandingRoutes";
import AuthRoutes from "@/features/auth/routes/AuthRoutes.tsx";
import OnboardingRoutes from "./features/onboarding/routes/OnboardingRoutes";
import HomeRoutes from "./features/home/routes/HomeRoutes";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/onboarding/*" element={<OnboardingRoutes />} />
        <Route path="/home/*" element={<HomeRoutes />} />
      </Routes>
    </main>
  );
}

export default App;
