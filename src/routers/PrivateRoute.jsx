import React from "react";
import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, lodding } = useContext(authContext);

  if (lodding) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
