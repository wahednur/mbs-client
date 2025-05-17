import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../layouts/DashLayout";
import RootLayout from "../layouts/RootLayout";
import Apartment from "../pages/apartment/Apartment";
import FlatDetails from "../pages/apartment/FlatDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddApartment from "../pages/dashboard/admin/apartment/AddApartment";
import ApartmentList from "../pages/dashboard/admin/apartment/ApartmentList";
import AddCoupon from "../pages/dashboard/admin/coupons/AddCoupon";
import Coupons from "../pages/dashboard/admin/coupons/Coupons";
import AddFlat from "../pages/dashboard/admin/flats/AddFlat";
import FlatList from "../pages/dashboard/admin/flats/FlatList";
import UserProfile from "../pages/dashboard/UserProfile";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/public/home/HomePage";
import AdminRoutes from "./AdminRoutes";
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
      {
        path: "/apertment/:id",
        element: <FlatDetails />,
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
        element: (
          <AdminRoutes>
            <AddApartment />
          </AdminRoutes>
        ),
      },
      {
        path: "apartment-list",
        element: (
          <AdminRoutes>
            <ApartmentList />
          </AdminRoutes>
        ),
      },
      {
        path: "add-flat",
        element: (
          <AdminRoutes>
            <AddFlat />
          </AdminRoutes>
        ),
      },
      {
        path: "flat-list",
        element: (
          <AdminRoutes>
            <FlatList />
          </AdminRoutes>
        ),
      },
      {
        path: "add-coupon",
        element: (
          <AdminRoutes>
            <AddCoupon />
          </AdminRoutes>
        ),
      },
      {
        path: "Coupons",
        element: (
          <AdminRoutes>
            <Coupons />
          </AdminRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
