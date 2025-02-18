"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import logo from "@/shared/assets/media/lime_logo.png";
import logo_mobile from "@/shared/assets/media/lime_logo_mobile.png";

export default function ComingSoonHeader() {
  return (
    <div className="fixed top-0 z-20 flex h-16 w-dvw items-center justify-between rounded-b-md bg-[#3224f2] px-9 py-[30px] md:h-20 md:rounded-b-[40px] lg:h-28 xl:px-[77px] 2xl:h-[115px]">
      {/* Mobile Navigation Dropdown (Left) */}
      <div className="md:hidden">
        <Dropdown
          label=""
          renderTrigger={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M11.25 17.5V13C11.25 12.8011 11.171 12.6103 11.0303 12.4697C10.8897 12.329 10.6989 12.25 10.5 12.25H7.5C7.30109 12.25 7.11032 12.329 6.96967 12.4697C6.82902 12.6103 6.75 12.8011 6.75 13V17.5C6.75 17.6989 6.67098 17.8897 6.53033 18.0303C6.38968 18.171 6.19891 18.25 6 18.25H1.5C1.30109 18.25 1.11032 18.171 0.96967 18.0303C0.829018 17.8897 0.75 17.6989 0.75 17.5V8.83188C0.75001 8.72736 0.771866 8.624 0.814165 8.52842C0.856463 8.43285 0.918272 8.34717 0.995625 8.27688L8.49563 1.195C8.63372 1.06931 8.81374 0.999649 9.00047 0.999649C9.1872 0.999649 9.36722 1.06931 9.50531 1.195L17.0053 8.27688C17.0827 8.34717 17.1445 8.43285 17.1868 8.52842C17.2291 8.624 17.2509 8.72736 17.2509 8.83188V17.5C17.2509 17.6989 17.1719 17.8897 17.0313 18.0303C16.8906 18.171 16.6998 18.25 16.5009 18.25H12C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5Z"
                stroke="#cbfd80"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        >
          <Dropdown.Item>
            <a href="/#about" className="text-lime-400 hover:text-green-700">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/#feature" className="text-lime-400 hover:text-green-700">
              Features
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* Mobile Logo (Center) */}
      <div className="items-center md:hidden">
        <Link to="/">
          <img src={logo_mobile} alt="Unibuz" className="size-6" />
        </Link>
      </div>

      {/* Desktop Logo (Left) */}
      <div className="hidden items-center md:flex">
        <Link to="/">
          <img
            src={logo}
            alt="Unibuz"
            className="h-10 w-auto xl:h-[53px] xl:w-[188px]"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links (Right) */}
      <div className="hidden items-center space-x-8 font-satoshi text-lg md:flex xl:space-x-10">
        <a href="#about" className="relative text-white hover:text-[#b9b5fa]">
          About
        </a>
        <a
          href="#features"
          className="relative text-white hover:text-[#b9b5fa]"
        >
          Features
        </a>
        <Link
          to="#subscribe"
          className="flex h-[51px] w-[120px] items-center justify-center rounded-full bg-[#cbfd80] text-[#3224f2] hover:bg-white"
        >
          Subscribe
        </Link>
      </div>

      {/* Mobile Sign Up Dropdown (Right) */}
      <div className="md:hidden">
        <Dropdown
          label=""
          renderTrigger={() => (
            <span>
              <Bars3Icon className="size-6 text-[#cbfd80]" />
            </span>
          )}
        >
          <Dropdown.Item>
            <Link
              to="#subscribe"
              className="text-lime-400 hover:text-green-700"
            >
              Subscribe
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
