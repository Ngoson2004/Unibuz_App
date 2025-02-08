import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { About } from "../pages/AboutPage";
import { Feature } from "../pages/FeaturePage";
import { ComingSoon } from "../pages/ComingSoonPage";
import LandingLayout from "../layouts/LandingLayout";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/landing" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route index element={<ComingSoon />} />
        <Route path="/blog" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
