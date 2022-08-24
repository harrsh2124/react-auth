import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("user-token");
    navigate("/signin", {
      replace: true,
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
      }}
    >
      Dashboard
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
