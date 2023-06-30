import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../common/api/auth";

const MainLayout = () => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate replace to="/signin" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
