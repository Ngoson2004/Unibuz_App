import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { About } from "../pages/AboutPage";
import { Feature } from "../pages/FeaturePage";
import { ComingSoon } from "../pages/ComingSoonPage";
import LandingLayout from "../layouts/LandingLayout";
import { NotFound } from "@/features/not-found/pages/NotFoundPage";
import { UnsubscribePage } from "../pages/UnsubscribePage";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/unsubscribe" element={<UnsubscribePage />} />
      <Route element={<LandingLayout />}>
        <Route index element={<ComingSoon />} />
        {import.meta.env.DEV && (
          <>
            <Route path="/landing" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/blog" element={<ComingSoon />} />{" "}
          </>
        )}
        {!import.meta.env.DEV && (
          <>
            <Route path="/landing" element={<NotFound />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/feature" element={<NotFound />} />
            <Route path="/blog" element={<NotFound />} />{" "}
          </>
        )}
      </Route>
    </Routes>
  );
}
