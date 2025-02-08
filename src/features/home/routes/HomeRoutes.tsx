import { Route, Routes } from "react-router-dom";
import TribeRoutes from "../tribes/routes/TribeRoutes";
import EventsRoutes from "../events/routes/EventsRoutes";
import MessageRoutes from "../message/routes/MessageRoutes";
import HomeLayout from "../layouts/HomeLayout";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/tribes/*" element={<TribeRoutes />} />
        <Route path="/events/*" element={<EventsRoutes />} />
        <Route path="/messages/*" element={<MessageRoutes />} />
      </Route>
    </Routes>
  );
}
