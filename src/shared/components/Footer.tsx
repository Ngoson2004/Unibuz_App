"use client";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import footer_img from "@/shared/assets/media/footer.jpg";
import footer_brand from "@/shared/assets/media/black_logo.png";

const Footers = () => {
  return (
    <Footer>
      <div className="w-dvw lg:w-full">
        <div className="relative flex h-96">
          <img
            src={footer_img}
            className="h-full w-full rounded-[40px] object-cover"
          />

          <h1 className="absolute inset-0 bg-gradient-to-r from-black px-5 pt-16 font-clash-grotesk-semibold text-4xl text-white sm:px-[77px] sm:pt-[77px] sm:text-6xl">
            Ready to join your{" "}
            <p className="text-[#cbfd80]">first Unibuz event?</p>
          </h1>

          <div className="absolute inset-1 flex items-center space-x-4 px-2 font-satoshi-bold text-[16px] sm:px-[77px] sm:pt-[154px]">
            <Link
              to="/signup"
              className="rounded-full bg-[#cbfd80] px-8 py-3 text-lg text-[#1a1439] shadow-sm hover:bg-[#3224f2] hover:text-[#cbfd80] sm:px-12 sm:py-3"
            >
              Let's go!
            </Link>
            <a
              href="#feature"
              className="flex items-center gap-4 rounded-full border-2 border-[#cbfd80] px-5 py-3 text-lg font-normal leading-6 text-[#cbfd80] hover:border-[#3224f2] hover:text-[#3224f2]"
            >
              <FaRegPlayCircle className="h-7 w-7" />
              See Demo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[77px] border-b-2 border-indigo-100 sm:flex-row">
          <div className="grid basis-5/12 grid-rows-2 gap-[77px] bg-indigo-200 p-[77px]">
            <Footer.Brand
              src={footer_brand}
              alt="Unibuz Logo"
              name="UNIBUZ"
              className="h-16 w-auto"
            />
            <p className="place-content-center text-center font-clash-grotesk-semibold text-3xl text-[#060028] sm:text-left sm:text-5xl">
              Discover events, <p className="text-[#3224f2]">find new mates.</p>
            </p>
          </div>

          <div className="grid grid-rows-2 items-center justify-center gap-[59px] p-10 sm:p-[77px]">
            <div className="flex flex-col gap-20 justify-self-center sm:flex-row sm:gap-32">
              <div>
                <Footer.Title
                  className="mb-[28px] font-satoshi-bold text-xl text-[#44405e] underline decoration-wavy underline-offset-8"
                  title="about us"
                />
                <Footer.LinkGroup
                  className="font-satoshi-md text-[14px] text-[#6a667e]"
                  col
                >
                  <Footer.Link href="#">Our story</Footer.Link>
                  <Footer.Link href="#">Our app</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="mb-[28px] font-satoshi-bold text-xl text-[#44405e] underline decoration-wavy underline-offset-8"
                  title="Follow us"
                />
                <Footer.LinkGroup
                  className="font-satoshi-md text-[14px] text-[#6a667e]"
                  col
                >
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                  <Footer.Link href="#">Tiktok</Footer.Link>
                  <Footer.Link href="#">LinkedIn</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="mb-[28px] font-satoshi-bold text-xl text-[#44405e] underline decoration-wavy underline-offset-8"
                  title="Blog"
                />
                <Footer.LinkGroup
                  className="font-satoshi-md text-[14px] text-[#6a667e]"
                  col
                >
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#"></Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 text-lg sm:flex-row">
              <Link
                to="/signin"
                className="rounded-full bg-[#3224f2] px-12 py-3 font-satoshi-bold text-[#cbfd80] hover:bg-[#1a0fb2]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="rounded-full border-2 border-[#3224f2] px-12 py-3 font-satoshi-md text-[#3224f2] hover:bg-[#c3c1e6]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center items-center justify-between px-5 py-5">
          <Footer.Copyright href="#" by="Unibuz" year={2025} />
          <div className="flex space-x-6 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={FaTiktok} />
            <Footer.Icon href="#" icon={FaLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
