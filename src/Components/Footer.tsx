"use client";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <Footer>
      <div className="hidden w-full sm:block">
        <div className="relative flex w-full h-96">
          <img
            src="./src/media/Password.jpg"
            className="w-full h-full rounded-3xl object-cover"
          />
          <h1 className="absolute inset-0 text-white p-10 text-6xl font-bold bg-gradient-to-r from-black">
            Ready to join your <p className="text-[#cbfd80]">first Unibuz event?</p>
          </h1>
          <div className="absolute inset-0 px-10 mt-16 flex items-center gap-x-6 font-semibold">
              <Link
                to="/signup"
                className="rounded-full bg-[#cbfd80] p-3 text-xl text-black shadow-sm hover:bg-lime-400 hover:bg-[#3224f2] hover:bg-[#cbfd80] sm:px-12 sm:py-3"
              >
                Let's go!
              </Link>
              <a
                href="#feature"
                className="hidden rounded-full border-2 border-[#cbfd80] px-8 py-3 text-lg font-normal leading-6 text-[#cbfd80] hover:text-[#3224f2] hover:border-[#3224f2] sm:block"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
        </div>
        
        <div className="border-2 border-indigo-100 flex-cols-2 flex w-full">
          <div className="grid basis-5/12 grid-rows-2 gap-10 bg-indigo-200 px-10 pb-10 pt-5">
            <Footer.Brand
              href="https://flowbite.com"
              src="./src/media/logo_light-trans.png"
              alt="Unibuz Logo"
              name="UNIBUZ"
              className="h-20 w-auto"
            />
            <p className="place-content-end text-5xl font-bold">
              Discover events, <p className="text-[#3224f2]">find new mates.</p>
            </p>
          </div>

          <div className="grid grid-rows-2 gap-2 px-20 pt-10 items-center justify-center">
            <div className="flex-cols-3 flex gap-32">
              <div>
                <Footer.Title
                  className="text-xl font-semibold text-[#050026] underline decoration-wavy"
                  title="about us"
                />
                <Footer.LinkGroup className="text-md font-normal" col>
                  <Footer.Link href="#">Our story</Footer.Link>
                  <Footer.Link href="#">Our app</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="text-xl font-semibold text-[#050026] underline decoration-wavy"
                  title="Follow us"
                />
                <Footer.LinkGroup className="text-md font-normal" col>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                  <Footer.Link href="#">Tiktok</Footer.Link>
                  <Footer.Link href="#">LinkedIn</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="text-xl font-semibold text-[#050026] underline decoration-wavy"
                  title="Blog"
                />
                <Footer.LinkGroup className="text-md font-normal" col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#"></Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>

            <div className="flex flex-inline gap-8 text-lg font-semibold">
              <Link
                to="/signin"
                className="rounded-full bg-[#3224f2] px-12 py-3 text-[#cbfd80] hover:bg-[#cbfd80] hover:text-green-700"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="rounded-full border-2 border-[#3224f2] px-12 py-3 text-[#3224f2] hover:bg-[#cbfd80] hover:border-[#cbfd80] hover:text-green-700"
              >
                Sign Up
              </Link>
            </div>

          </div>
        </div>
        <div className="w-full items-center px-5 py-5 sm:flex sm:items-center sm:justify-between">
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
