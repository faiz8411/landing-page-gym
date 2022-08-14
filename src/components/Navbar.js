import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/download.png";
const NavBar = () => {
  const menuItem = (
    <>
      <li className="font-bold">
        <Link to="/">HOME</Link>
      </li>
      <li className="font-bold">
        <Link to="/appointment">ABOUT</Link>
      </li>

      <li tabindex="0" className="font-bold">
        <a class="justify-between">
          PROGRAMMES
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul class="p-2">
          <li className="font-bold">
            <a>Submenu 1</a>
          </li>
          <li className="font-bold">
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>

      <li className="font-bold">
        <Link to="/about">SUCCESS STORIES</Link>
      </li>
      <li className="font-bold">
        <Link to="/login">BLOG</Link>
      </li>
      <li className="font-bold">
        <Link to="/login">LOGIN</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <img width="80" height="80" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      
    </div>
  );
};

export default NavBar;
