import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "../../components/shared/buttons/Button";
import LoadingSpiner from "../../components/shared/loading/LoadingSpiner";
import SocialLogin from "../../components/social-login/SocialLogin";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { imageUpload } from "../../utils/utils";
import useAuth from "./../../hooks/useAuth";

const Register = () => {
  const { user, setUser, createUser, updateUser, loading } = useAuth();
  const [error, setError] = useState(null);
  const [prevImg, setPrevImg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.form?.pathname || "/";
  const axiosCommon = useAxiosCommon();
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const img_url = await imageUpload(photo);
    if (password.length < 6) {
      return setError("Password must be at least 6 characters log");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
      return setError("Password must contain at least one number");
    }
    if (!/[@$!%*?&]/.test(password)) {
      return setError("Password must contain at least one special character");
    }
    try {
      const result = await createUser(email, password);
      await updateUser(name, img_url);
      setUser({ ...result?.user, displayName: name, photoURL: img_url });
      const newUser = {
        name,
        email,
        image: img_url,
      };
      await axiosCommon.post(`/users`, newUser);
      navigate(from, { replace: true });
      toast(`Welcom ${name}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (loading) return <LoadingSpiner />;
  if (user?.email || loading) return navigate(from, { replace: true });
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container  rounded-lg">
        <div className="flex gap-6">
          <div className="w-1/2 hidden md:block">
            <Link to={"/"}>
              <img
                className="object-cover w-full rounded-lg"
                src="/img/register.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg text-center flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center gap-2 mb-6">
              <img src="/wbms.svg" className="h-12 mx-auto" alt="" />
              <p>Welcome to WS BMS</p>
            </div>
            <h4 className="heading">Please register your account</h4>
            <div className="w-full">
              <form onSubmit={handleCreateUser}>
                <div className="collum">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="frm-ctr"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="image">
                    <span className="block mb-2 text-sm bg-primary/80 text-white p-2 rounded-md text-center">
                      Select Image:
                    </span>
                    <img className="w-24 mx-auto mt-6" src={prevImg} alt="" />
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) =>
                      setPrevImg(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                </div>
                <div className="collum">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="frm-ctr"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="frm-ctr"
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <Button
                  title={`Sign Up`}
                  btnType={`btn-filled`}
                  className={`w-full`}
                  submit={`submit`}
                />
              </form>
              <p className="mt-6">
                You have an account?{" "}
                <Link
                  className="text-primary hover:text-secondary duration-300"
                  to={`/login`}
                >
                  Sign in now
                </Link>
              </p>
              <div>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
