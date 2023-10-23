import React from "react";
import registerImage from "../../assets/images/login/login.svg";

import SI1 from "../../assets/s-icons/1.svg";
import SI2 from "../../assets/s-icons/2.svg";
import SI3 from "../../assets/s-icons/3.svg";

import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content items-center flex-col lg:flex-row">
        <div className="text-center w-[50%] lg:text-left">
          <img src={registerImage} alt="" />
        </div>

        <div className="border-2 p-6  w-[50%]">
          <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
          <form className="p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#FF3811] font-medium border-none text-white btn-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-[#444]">Or Sign Up with</p>
          <div className="flex justify-center mt-4">
            <div className="flex text-2xl gap-2">
             <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2"> <img className="z-20FFFFF" src={SI1} alt="" /></div>
             <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2"> <img className="z-20FFFFF" src={SI2} alt="" /></div>
             <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#a6a0a0] rounded-full p-2"> <img className="z-20FFFFF" src={SI3} alt="" /></div>
            </div>
          </div>
          <p className="text-center mt-3">Already have an account? <Link className="text-[#FF3811] font-medium">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
