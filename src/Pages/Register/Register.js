import React from "react";
import { useContext } from "react";
import registerimage from "../../assets/images/login/login.svg";
import Footer from "../../ShareLayout/Footer/Footer";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const { register } = useContext(UserContext);
  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);

    register(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("registration successfully");
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
          <form onSubmit={registerHandler} className="w-1/2">
            <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100  ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    name="photoUrl"
                    className="input input-bordered"
                  />
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="text-center mt-4">
                  <small>
                    I have an Account.
                    <Link to="/login" className="text-green-500 font-bold">
                      Login
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

export default Register;
