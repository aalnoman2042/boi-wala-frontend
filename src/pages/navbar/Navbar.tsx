import { NavLink } from "react-router-dom";
import logo from "../../../public/images/Library_Logo.png";

export default function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `group relative inline-block px-2 py-1 text-sm transition duration-300 ${
      isActive ? "text-[#53877A] font-semibold" : "text-gray-700"
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Start - Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/books" className={navLinkStyle}>
                All Books
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-book" className={navLinkStyle}>
                Add Book
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/borrow-summary" className={navLinkStyle}>
                Borrow Summary
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
       <NavLink to="/" className="btn btn-ghost normal-case">
  <img src={logo} alt="Library Logo" className="h-8 w-auto sm:h-9 md:h-10 lg:h-12 object-contain" />
</NavLink>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/books" className={navLinkStyle}>
              All Books
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-book" className={navLinkStyle}>
              Add Book
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrow-summary" className={navLinkStyle}>
              Borrow Summary
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#53877A] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* End - Optional Button */}
      <div className="navbar-end">
        <button className="bg-[#53877A] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#4a706f] active:bg-[#41645f] transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#53877A] uppercase tracking-wide select-none">
          sign in
        </button>
      </div>
    </div>
  );
}
