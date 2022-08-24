import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const SignIn = lazy(() => import("../pages/SignIn"));

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Suspense fallback={<>...</>}>
              <Dashboard />
            </Suspense>
          </PrivateRouter>
        }
      />

      <Route
        path="/signin"
        element={
          <PublicRouter>
            <Suspense fallback={<>...</>}>
              <SignIn />
            </Suspense>
          </PublicRouter>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
    </Routes>
  );
};

export default IndexRouter;
