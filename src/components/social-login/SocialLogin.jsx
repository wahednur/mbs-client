import { FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
const SocialLogin = () => {
  const { user, googleLogin } = useAuth();
  const axiosCommon = useAxiosCommon();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.form?.pathname || "/";
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const newUser = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      };
      // eslint-disable-next-line no-unused-vars
      const { data } = await axiosCommon.post(`/users`, newUser);
      navigate(from, { replace: true });
      toast.success(
        <p>
          <span className="font-bold">{user?.email}</span> Login successfully
        </p>
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex gap-2 items-center justify-center mt-6">
      <button onClick={handleGoogleLogin} className="social-btn">
        <FaGoogle />
      </button>
      <button className="social-btn">
        <FaFacebookF />
      </button>
      <button className="social-btn">
        <FaXTwitter />
      </button>
    </div>
  );
};

export default SocialLogin;
