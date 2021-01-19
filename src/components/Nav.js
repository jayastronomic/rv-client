import React from "react";
import logo from "../assets/rvlogo.PNG";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="flex  justify-between bg-gray-900 top-0 nav">
      <div className="pl-10">
        <Link>
          <img width={75} src={logo} />
        </Link>
      </div>
      <div className="flex items-center justify-around space-x-10 pr-10 text-white font-bold">
        <Link className="hover:text-green-500 hover:bg-gray-800 py-2 px-4 rounded transform transition duration-150 ease-in">
          Home
        </Link>
        <Link className="hover:text-green-500 hover:bg-gray-800 py-2 px-4 rounded transform transition duration-150 ease-in">
          About
        </Link>
        <Link className="hover:text-green-500 hover:bg-gray-800 py-2 px-4 rounded transform transition duration-150 ease-in">
          Contact
        </Link>
        <Link className="hover:text-green-500 hover:bg-gray-800 py-2 px-4 rounded transform transition duration-150 ease-in">
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
