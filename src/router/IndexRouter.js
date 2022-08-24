import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const IndexRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
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
    </Routes>
  );
};

export default IndexRouter;
