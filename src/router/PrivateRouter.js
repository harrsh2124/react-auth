import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children, ...rest }) => {
  const userToken = localStorage.getItem("user-token");

  if (!userToken) return <Navigate to="/signin" />;
  return children;
};

export default PrivateRouter;
