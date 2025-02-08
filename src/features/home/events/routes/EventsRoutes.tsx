import { Route, Routes } from "react-router-dom";
import EventsPage from "../pages/EventsPage";

export default function EventsRoutes() {
  return (
    <Routes>
      <Route index element={<EventsPage />} />
    </Routes>
  );
}
