import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/shared/buttons/Button";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container  rounded-lg">
        <div className="flex gap-6">
          <div className="w-1/2 hidden md:block">
            <img
              className="object-cover w-full rounded-lg"
              src="/img/register.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg text-center flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center gap-2 mb-6">
              <img src="/wbms.svg" className="h-12 mx-auto" alt="" />
              <p>Welcome to WS BMS</p>
            </div>
            <h4 className="heading">Please register your account</h4>
            <div className="w-full">
              <form>
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
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm bg-primary/80 text-white p-2 rounded-md text-center"
                  >
                    Select Image:
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="frm-ctr"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
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
                You have an account?{" "}
                <Link
                  className="text-primary hover:text-secondary duration-300"
                  to={`/login`}
                >
                  Sign in now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
