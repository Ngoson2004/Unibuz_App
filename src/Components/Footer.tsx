import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import footer_img from "../media/footer.jpg";
import footer_brand from "../media/black_logo.png";

const Footers = () => {
  return (
    <Footer>
      <div className="hidden w-full sm:block">
        <div className="relative flex h-96 w-full">
          <img
            src={footer_img}
            className="h-full w-full rounded-[40px] object-cover"
          />

          <h1 className="absolute inset-0 px-[77px] pt-[77px] bg-gradient-to-r from-black text-6xl font-clash-grotesk-semibold text-white">
            Ready to join your{" "}
            <p className="text-[#cbfd80]">first Unibuz event?</p>
          </h1>

          <div className="absolute inset-1 px-[77px] pt-[154px] flex items-center gap-x-6 font-satoshi-bold text-[16px]">
            <Link
              to="/signup"
              className="rounded-full bg-[#cbfd80] p-3 text-xl text-[#1a1439] shadow-sm hover:bg-[#3224f2] hover:text-[#cbfd80] sm:px-12 sm:py-3"
            >
              Let's go!
            </Link>
            <a
              href="#feature"
              className="hidden rounded-full border-2 border-[#cbfd80] px-8 py-3 text-lg font-normal leading-6 text-[#cbfd80] hover:border-[#3224f2] hover:text-[#3224f2] sm:flex items-center gap-4"
            >
              <FaRegPlayCircle className="h-7 w-7" />
              See Demo
            </a>
          </div>
        </div>

        <div className="flex-cols-2 flex gap-[77px] w-full border-b-2 border-indigo-100">
          <div className="grid basis-5/12 grid-rows-2 gap-[77px] bg-indigo-200 p-[77px]">
            <Footer.Brand
              src={footer_brand}
              alt="Unibuz Logo"
              name="UNIBUZ"
              className="h-16 w-auto"
            />
            <p className="place-content-center text-5xl text-[#060028] font-clash-grotesk-semibold">
              Discover events, <p className="text-[#3224f2]">find new mates.</p>
            </p>
          </div>

          <div className="grid grid-rows-2 items-center justify-center gap-[59px] p-[77px]">
            <div className="flex-cols-3 flex gap-32">
              <div>
                <Footer.Title
                  className="text-xl mb-[28px] font-satoshi-bold text-[#44405e] underline underline-offset-8 decoration-wavy"
                  title="about us"
                />
                <Footer.LinkGroup
                  className="text-[14px] font-satoshi-md text-[#6a667e]"
                  col
                >
                  <Footer.Link href="#">Our story</Footer.Link>
                  <Footer.Link href="#">Our app</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="text-xl mb-[28px] font-satoshi-bold text-[#44405e] underline underline-offset-8 decoration-wavy"
                  title="Follow us"
                />
                <Footer.LinkGroup
                  className="text-[14px] font-satoshi-md text-[#6a667e]"
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
                  className="text-xl mb-[28px] font-satoshi-bold text-[#44405e] underline underline-offset-8 decoration-wavy"
                  title="Blog"
                />
                <Footer.LinkGroup
                  className="text-[14px] font-satoshi-md text-[#6a667e]"
                  col
                >
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#"></Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>

            <div className="flex gap-8 text-lg items-end">
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
