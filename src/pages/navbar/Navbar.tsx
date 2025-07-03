import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Start - Logo & Mobile Menu */}
      <div className="navbar-start">
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
              <NavLink to="/books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/create-book">Add Book</NavLink>
            </li>
            <li>
              <NavLink to="/borrow-summary">Borrow Summary</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl normal-case">
          📚 boi-wala
        </NavLink>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active font-semibold underline" : "")}
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-book"
              className={({ isActive }) => (isActive ? "active font-semibold underline" : "")}
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/borrow-summary"
              className={({ isActive }) => (isActive ? "active font-semibold underline" : "")}
            >
              Borrow Summary
            </NavLink>
          </li>
        </ul>
      </div>

      {/* End - Action Button (Future Use) */}
      <div className="navbar-end">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}
