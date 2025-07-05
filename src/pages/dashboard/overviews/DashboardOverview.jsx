import useRole from "../../../hooks/useRole";
import AdminOverview from "./AdminOverview";

const DashboardOverview = () => {
  const [role] = useRole();
  return <div> {role === "admin" && <AdminOverview />}</div>;
};

export default DashboardOverview;
