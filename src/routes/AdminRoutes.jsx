import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadingSpiner from "./../components/shared/loading/LoadingSpiner";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();

  if (loading || isLoading) return <LoadingSpiner />;

  if (user && role === "admin") return children;

  return <Navigate to={`/`} state={{ from: location }} replace />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};

export default AdminRoutes;
