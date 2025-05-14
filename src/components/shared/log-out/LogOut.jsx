import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../../../hooks/useAuth";
import Button from "../buttons/Button";

const LogOut = ({ className }) => {
  const navigate = useNavigate();
  const { logOut: signOut } = useAuth();
  const handleLogOut = async () => {
    await signOut();
    navigate("/");
    toast.success("Logout successfully");
  };

  return (
    <Button
      title={"Log Out"}
      btnType={"btn-filled"}
      clickEvent={handleLogOut}
      className={className}
    />
  );
};

export default LogOut;
