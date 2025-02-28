import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLoadingPage from "@/shared/page/SuspenseLoadingPage";

const MessagePage = React.lazy(() => import("../pages/MessagePage"));

export default function MessageRoutes() {
  return (
    <Suspense fallback={<SuspenseLoadingPage />}>
      <Routes>
        <Route index element={<MessagePage />} />
      </Routes>
    </Suspense>
  );
}
