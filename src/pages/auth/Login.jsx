import { Link } from "react-router-dom";
import Button from "../../components/shared/buttons/Button";
import SocialLogin from "../../components/social-login/SocialLogin";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container bg-[url(/img/login.jpg)] bg-cover bg-center bg-no-repeat  rounded-lg">
        <div className="flex gap-6">
          <div className="w-1/2 hidden md:block"></div>
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg text-center">
            <div className="flex flex-col items-center gap-2 mb-6">
              <img src="/wbms.svg" className="h-12 mx-auto" alt="" />
              <p>Welcome to WS BMS</p>
            </div>
            <h4 className="heading">User Login</h4>
            <div className="w-full">
              <form>
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
                </div>
                <Button
                  title={`Login`}
                  btnType={`btn-filled`}
                  className={`w-full`}
                  submit={`submit`}
                />
              </form>
              <p className="mt-6">
                You have no account?{" "}
                <Link
                  className="text-primary hover:text-secondary duration-300"
                  to={`/register`}
                >
                  Sign up now
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

export default Login;
