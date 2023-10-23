import React, { useContext } from "react";
import registerImage from "../../assets/images/login/login.svg";

import SI1 from "../../assets/s-icons/1.svg";
import SI2 from "../../assets/s-icons/2.svg";
import SI3 from "../../assets/s-icons/3.svg";

import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

  const {createUser} = useContext(authContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
    .then((res) => {
      console.log(res.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      })
    })
    .catch((e) => {
      console.log(e.message);
    })
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-10 items-center flex-col lg:flex-row">
        <div className="text-center w-[50%] lg:text-left">
          <img src={registerImage} alt="" />
        </div>

        <div className="border-2 p-6 lg:w-[50%]">
          <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
          <form onSubmit={handleRegister} className="p-6">
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>

            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-3 mt-6">
              <button
                type="submit"
                className="btn capitalize bg-[#FF3811] font-medium border-none text-white btn-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-[#444]">Or Sign Up with</p>
          <div className="flex justify-center mt-4">
            <div className="flex text-2xl gap-2">
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2">
                {" "}
                <img className="z-20FFFFF" src={SI1} alt="" />
              </div>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2">
                {" "}
                <img className="z-20FFFFF" src={SI2} alt="" />
              </div>
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2">
                {" "}
                <img className="z-20FFFFF" src={SI3} alt="" />
              </div>
            </div>
          </div>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#FF3811] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
