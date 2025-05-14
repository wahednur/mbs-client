import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../components/shared/loading/LoadingSpiner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpiner />;
  if (user) return children;
  return <Navigate to="/" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
