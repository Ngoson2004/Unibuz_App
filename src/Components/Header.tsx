"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <div className="relative z-20 flex h-16 items-center justify-between rounded-b-xl bg-[#3224f2] sm:h-20 xl:h-24 2xl:h-28">
      <div className="px-10 items-center space-x-8 text-lg font-semibold sm:flex">
      <Link to="/"
        className="hidden text-[#cbfd80] hover:text-white sm:block"
      >
        Home
      </Link>
      <Link to="#feature"
        className="hidden text-[#cbfd80] hover:text-white sm:block"
      >
        Features
      </Link>
      <Link to="/"
        className="hidden text-[#cbfd80] hover:text-white sm:block"
      >
        Blog
      </Link>
      </div>
      
      <div className="ml-10 flex items-center">
      <Link to="/">
        <img
        src="./src/media/logo_dark.jpeg"
        alt="Unibuz"
        className="h-10 w-auto sm:h-20"
        />
      </Link>
      </div>
      <div className="mr-5 items-center space-x-8 text-lg font-semibold sm:flex">
      <Link
        to="/signin"
        className="hidden text-[#3224f2] bg-[#cbfd80] rounded-full px-8 py-2 hover:text-green-700 hover:bg-white sm:block"
      >
        Log In
      </Link>
      <Link
        to="/signup"
        className="hidden text-[#cbfd80] border-2 border-[#cbfd80] rounded-full px-8 py-2 hover:text-green-700 hover:bg-white sm:block"
      >
        Sign Up
      </Link>
      </div>
      <div className="sm:hidden">
      <Dropdown
        label=""
        renderTrigger={() => (
        <span>
          <Bars3Icon className="mr-2 h-6 w-6 text-lime-400" />
        </span>
        )}
      >
        <Dropdown.Item>
        <Link to="/signin" className="text-lime-400 hover:text-green-700">
          Log In
        </Link>
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/signup" className="text-lime-400 hover:text-green-700">
          Sign Up
        </Link>
        </Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  );
};

export default Header;
