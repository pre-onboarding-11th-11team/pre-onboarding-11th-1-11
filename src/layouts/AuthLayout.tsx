import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../common/api/auth";

const AuthLayout = () => {
  const user = getCurrentUser();

  if (user) {
    <Navigate replace to="/todo" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
