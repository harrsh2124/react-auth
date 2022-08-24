import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />

      <Route
        path="/signin"
        element={
          <PublicRouter>
            <SignIn />
          </PublicRouter>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
    </Routes>
  );
};

export default IndexRouter;
