import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useRole from "../../hooks/useRole";

const AgreementBtn = ({ id, link }) => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const handleAgreementClick = async (id) => {
    if (!user) {
      navigate("/login");
    } else if (role === "admin") {
      toast.error("You are An admin you can not use this system");
    } else if (role !== "member") {
      // Navigate to agreement page

      Swal.fire({
        title: "You are not a member",
        text: "Are you want to member?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Send Member request",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosCommon.patch(`/member-request/${user?.email}`);
          toast.success("Your member request received");
        }
      });
    } else if (role === "pending") {
      toast.success(" You membership request pending");
    } else {
      navigate(`/agreement/${id}`); // বা যেখানে member হতে পারবে
    }
  };
  return (
    <button
      onClick={() => handleAgreementClick(id)}
      className="btn btn-success"
      to={`/apertment/${link}`}
    >
      Agreement{" "}
    </button>
  );
};

export default AgreementBtn;
