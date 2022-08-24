import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("user-token");
    navigate("/signin", {
      replace: true,
    });
  };
  return (
    <div>
      Home
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
