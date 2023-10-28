import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";

import logo from "../assets/logo.svg";
import { authContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navber = () => {
  const { user } = useContext(authContext);

  const handleLogOut = () => {
    signOut(auth)
      .then((res) => console.log(res.user))
      .catch((e) => console.log(e));
  };

  const navItems = (
    <div className="flex gap-4">
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/Services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-[#FF3811]"
              : ""
          }
          to={"/myBokkings"}
        >
          My Bookings
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar p-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="w-[70px]" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1">{navItems}</ul>
      </div>
      <div className="gap-3 text-2xl navbar-end">
        <BiShoppingBag />
        <BiSearch />
        <div className="flex gap-4">
          <button className="btn btn-outline font-medium text-[#FF3811]">
            Appointment
          </button>
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline font-medium text-[#FF3811]"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-outline font-medium text-[#FF3811]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
