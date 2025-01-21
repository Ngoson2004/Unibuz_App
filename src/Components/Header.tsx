"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <div className="fixed z-20 h-16 w-full items-center justify-between rounded-b-[40px] bg-[#3224f2] px-[77px] py-[30px] sm:flex sm:h-20 xl:h-28 2xl:h-[115px]">
      <div className="hidden w-[286px] items-center space-x-10 font-satoshi text-lg sm:flex">
        <Link
          to="/"
          className="hidden text-white hover:text-[#b9b5fa] sm:block"
        >
          Home
        </Link>
        <Link
          to="/feature"
          className="hidden text-white hover:text-[#b9b5fa] sm:block"
        >
          Features
        </Link>
        <Link to="/about" className="hidden text-white hover:text-[#b9b5fa] sm:block">
          About
        </Link>
        <Link
          to="/"
          className="hidden text-white hover:text-[#b9b5fa] sm:block"
        >
          Blog
        </Link>
      </div>

      <div className="hidden mx-[225px] sm:flex items-center">
        <Link to="/">
          <img
            src="./src/media/lime_logo.png"
            alt="Unibuz"
            className="h-[53px] w-[188px]"
          />
        </Link>
      </div>

      <div className="text-md items-center space-x-[21px] font-satoshi-bold sm:flex">
        <Link
          to="/signin"
          className="hidden h-[49px] w-[133px] content-center rounded-full bg-[#cbfd80] px-[43px] text-[#3224f2] hover:bg-white sm:block"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="hidden h-[51px] w-[133px] content-center rounded-full border-2 border-[#cbfd80] px-[35px] text-[#cbfd80] hover:bg-[#1a0fb2] sm:block"
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
