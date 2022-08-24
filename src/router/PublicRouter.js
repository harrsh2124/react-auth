import { Navigate } from "react-router-dom";

const PublicRouter = ({ children, ...rest }) => {
  const userToken = localStorage.getItem("user-token");

  if (userToken) return <Navigate to="/" />;
  return children;
};

export default PublicRouter;
