import { Route, Routes } from "react-router-dom";
import ProfileInfoPage from "../pages/ProfileInfoPage";
import UniversityPage from "../pages/UniversityPage";
import InterestPage from "../pages/InterestPage";
import GoodVibeGuidePage from "../pages/GoodVibeGuidePage";

export default function OnboardingRoutes() {
  return (
    <Routes>
      <Route path="profile" element={<ProfileInfoPage />} />
      <Route path="university" element={<UniversityPage />} />
      <Route path="interest" element={<InterestPage />} />
      <Route path="guide" element={<GoodVibeGuidePage />} />
    </Routes>
  );
}
