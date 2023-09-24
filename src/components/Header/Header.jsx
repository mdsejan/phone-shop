import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const links = (
    <>
      <li className="mr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/favourite">Favourite</NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-base-300 sticky top-0 py-2 z-30">
      <div className="max-w-screen-2xl mx-auto navbar px-5 ">
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
              {links}
              <a className="p-3 w-36 text-center rounded-md bg-[#9576FF] text-white md:hidden">
                Apply Now
              </a>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
