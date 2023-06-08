import React from "react";

import registerimage from "../../assets/images/login/login.svg";
import facebook from "../../assets/icons/icons8-facebook-96.png";
import googlemama from "../../assets/icons/icons8-google-96.png";
import Footer from "../../ShareLayout/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../AuthContext/AuthContext";

const Login = () => {
  const { login, googleProvider, facebookProvider } = useContext(UserContext);
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const googleHandler = () => {
    googleProvider()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const facebookHandler = () => {
    facebookProvider()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content  flex gap-20 items-center">
          <div className="text-center w-1/2 lg:text-left">
            <img src={registerimage} alt="" />
          </div>
          <form onSubmit={loginHandler} className="w-1/2">
            <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100  ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="mt-4 flex justify-center ">
                  <button onClick={facebookHandler}>
                    <img src={facebook} alt="" className="w-[40px] mr-5" />
                  </button>
                  <button onClick={googleHandler}>
                    <img src={googlemama} alt="" className="w-[40px]" />
                  </button>
                </div>
                <div className="text-center mt-4">
                  <small>
                    Have an Account??
                    <Link to="/register" className="text-green-500 font-bold">
                      Register
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
