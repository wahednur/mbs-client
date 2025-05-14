import { FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";
const SocialLogin = () => {
  return (
    <div className="flex gap-2 items-center justify-center mt-6">
      <button className="social-btn">
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
