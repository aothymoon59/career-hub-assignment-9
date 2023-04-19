import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8 bg-[#F9F9FF]">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost p-0 lg:hidden">
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
              className="menu bg-white menu-compact dropdown-content mt-3 p-4 shadow rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={`bg-white ${({ isActive }) =>
                    isActive ? "active" : "default"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  aria-label="Statistics"
                  title="Statistics"
                  className={`bg-white ${({ isActive }) =>
                    isActive ? "active" : "default"}`}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  aria-label="Applied Jobs"
                  title="Applied Jobs"
                  className={`bg-white ${({ isActive }) =>
                    isActive ? "active" : "default"}`}
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={`bg-white ${({ isActive }) =>
                    isActive ? "active" : "default"}`}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/">
              <span className="ml-2 md:ml-0 text-lg sm:text-xl md:text-[32px] font-extrabold">
                TalentTrail
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7 items-center px-1">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                aria-label="Applied Jobs"
                title="Applied Jobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button>
            <Link
              to=""
              className="my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
            >
              Start Applying
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
