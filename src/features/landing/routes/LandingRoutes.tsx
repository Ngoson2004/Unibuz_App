import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Feature } from "./pages/FeaturePage";
import { ComingSoon } from "./pages/ComingSoonPage";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/coming" element={<ComingSoon />} />
    </Routes>
  );
}
