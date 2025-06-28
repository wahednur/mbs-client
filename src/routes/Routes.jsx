import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../layouts/DashLayout";
import RootLayout from "../layouts/RootLayout";
import Agreement from "../pages/agreement/Agreement";
import MyAgreements from "../pages/agreement/MyAgreements";
import Payment from "../pages/agreement/Payment";
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
import Users from "../pages/dashboard/admin/users/Users";
import DashboardOverview from "../pages/dashboard/overviews/DashboardOverview";
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
      {
        path: "/agreement/:id",
        element: <Agreement />,
      },
      {
        path: "/payment",
        element: <Payment />,
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
        index: true,
        element: <DashboardOverview />,
      },
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
        path: "coupons",
        element: (
          <AdminRoutes>
            <Coupons />
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Users />
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
      {
        path: "my-agreements",
        element: (
          <PrivateRoute>
            <MyAgreements />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
