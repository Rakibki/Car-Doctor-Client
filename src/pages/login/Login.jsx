import React from 'react'
import LoginImage from "../../assets/images/login/login.svg"

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content items-center flex-col lg:flex-row">
    <div className="text-center w-[50%] lg:text-left">
     <img src={LoginImage} alt="" />
    </div>

    <div className="border-2 p-6  w-[50%]">
        <h2 className='text-2xl text-center font-semibold'>Sign Up</h2>
      <form className="p-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login