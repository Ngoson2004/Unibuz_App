import { Route, Routes } from "react-router-dom";
import TribeRoutes from "../tribes/routes/TribeRoutes";
import EventsRoutes from "../events/routes/EventsRoutes";
import MessageRoutes from "../message/routes/MessageRoutes";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="/tribes/*" element={<TribeRoutes />} />
      <Route path="/events/*" element={<EventsRoutes />} />
      <Route path="/messages/*" element={<MessageRoutes />} />
    </Routes>
  );
}
