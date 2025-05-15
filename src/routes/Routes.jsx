import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../layouts/DashLayout";
import RootLayout from "../layouts/RootLayout";
import Apartment from "../pages/apartment/Apartment";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddApartment from "../pages/dashboard/admin/apartment/AddApartment";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/public/home/HomePage";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-apartment",
        element: <AddApartment />,
      },
    ],
  },
]);

export default router;
