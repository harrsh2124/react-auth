import { useNavigate } from "react-router-dom";
import React from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    localStorage.setItem("user-token", "abc");
    navigate("/dashboard", {
      replace: true,
    });
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
