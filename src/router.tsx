import { useRoutes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

export const Router = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [{ path: "/todo", element: <Main /> }],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
};
