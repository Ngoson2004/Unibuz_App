"use client";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Toast } from "flowbite-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import footer_img from "@/shared/assets/media/coming-soon-footer.png";
import footer_brand from "@/shared/assets/media/black_logo.png";
import { enqueueUser } from "@/features/landing/services/enqueue-user";

const ComingSoonFooter = () => {
  const [heroEmail, setHeroEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { mutateAsync: subscribeHero, isPending: isHeroPending } = useMutation({
    mutationFn: enqueueUser,
  });

  const { mutateAsync: subscribeFooter, isPending: isFooterPending } =
    useMutation({
      mutationFn: enqueueUser,
    });

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await subscribeHero(heroEmail);
      if ((response as { message: string }).message) {
        setIsError(false);
        setToastMessage((response as { message: string }).message);
      } else if (
        (response as { error: string; errorKey: string }).errorKey ===
        "RATE_LIMIT_EXCEEDED"
      ) {
        setToastMessage(
          "You've reached the rate limit. Please try again in the next hour.",
        );
        setIsError(true);
      } else {
        setToastMessage((response as { error: string }).error);
        setIsError(true);
      }
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Show toast for 5 seconds
      return () => clearTimeout(timer);
    } catch (error) {
      setToastMessage((error as Error).message);
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await subscribeFooter(footerEmail);
      if ((response as { message: string }).message) {
        setIsError(false);
        setToastMessage((response as { message: string }).message);
      } else if (
        (response as { error: string; errorKey: string }).errorKey ===
        "RATE_LIMIT_EXCEEDED"
      ) {
        setToastMessage(
          "You've reached the rate limit. Please try again in the next hour.",
        );
        setIsError(true);
      } else {
        setToastMessage((response as { error: string }).error);
        setIsError(true);
      }
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    } catch (error) {
      setToastMessage((error as Error).message);
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <Footer>
      <div className="w-dvw lg:w-full">
        {showToast && (
          <div className="fixed bottom-5 right-5 z-20">
            <Toast>
              <div
                className={`inline-flex items-center justify-center rounded-lg ${isError ? "bg-red-100 text-red-500" : "bg-lime-100 text-lime-500"}`}
              >
                {isError ? (
                  <FaExclamationCircle className="size-5" />
                ) : (
                  <FaCheckCircle className="size-5" />
                )}
              </div>
              <div
                className={`ml-8 text-xl font-medium ${isError ? "text-red-600" : "text-lime-600"}`}
              >
                {toastMessage}
              </div>
              <Toast.Toggle />
            </Toast>
          </div>
        )}

        <div
          className="relative flex h-80 items-center justify-center sm:h-96"
          id="subscribe"
        >
          <img
            src={footer_img}
            loading="lazy"
            className="size-full rounded-[40px] object-cover"
          />
          <h1 className="absolute inset-0 bg-gradient-to-r from-black px-5 pt-16 font-clash-grotesk-semibold text-4xl text-white sm:px-[77px] sm:pt-[77px] sm:text-6xl">
            <p className="mb-2 text-[#cbfd80]">Join our newsletters</p> to learn
            more
          </h1>

          <div className="absolute inset-1 flex items-center space-x-6 px-2 pt-[120px] font-satoshi-bold text-[16px] sm:space-x-4 sm:px-[77px] sm:pt-[154px]">
            <input
              className="text-md block h-12 w-[350px] rounded-full border-2 border-gray-300 bg-white p-4"
              placeholder="Your university email"
              type="email"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={handleHeroSubmit}
              className="text-md w-[125px] rounded-[50px] border-2 border-gray-300 bg-white px-6 py-3 font-satoshi-md text-gray-500 hover:bg-[#3224f2] hover:text-white sm:w-auto"
            >
              {isHeroPending ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>

        <div className="flex flex-col border-b-2 border-indigo-100 sm:flex-row md:gap-[20px] lg:gap-[10px] xl:gap-[10px]">
          <div className="sm:grid-rows-0 grid basis-6/12 grid-rows-1 gap-[50px] bg-[#F5F4FE] p-[77px]">
            <Footer.Brand
              src={footer_brand}
              alt="Unibuz Logo"
              name="UNIBUZ"
              className="mx-auto h-16 w-auto sm:mx-0"
            />
            <p className="text-center font-satoshi text-[16px] sm:text-left">
              In the spirit of reconciliation we acknowledge the Traditional
              Custodians of country throughout Australia and their connections
              to land, sea and community. We pay our respect to their elders
              past and present and extend that respect to all Aboriginal and
              Torres Strait Islander peoples today.
            </p>
          </div>

          <div className="grid basis-6/12 gap-4 bg-white p-[40px] ">
            <div className="space-y-6">
              <h2 className="text-center font-clash-grotesk-semibold text-[28px] sm:text-left">
                Join our newsletters
              </h2>
              <p className="text-center font-satoshi text-[16px] text-gray-600 sm:text-left">
                Be the first to know when Unibuz goes live!
              </p>
              <div className="flex space-x-4">
                <input
                  className="text-md block h-12 w-full rounded-full border-2 border-gray-300 bg-white p-4"
                  placeholder="Your university email"
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  onClick={handleFooterSubmit}
                  className="text-md w-32 rounded-[50px] border-2 border-gray-300 bg-white px-6 py-3 font-satoshi-md text-gray-500 hover:bg-[#3224f2] hover:text-white"
                >
                  {isFooterPending ? "..." : "Subscribe"}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="font-clash-grotesk-semibold text-[28px]">
                Follow us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-full bg-[#3224f2] p-3 text-white hover:bg-[#2a1ed6]"
                >
                  <BsFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#3224f2] p-3 text-white hover:bg-[#2a1ed6]"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#3224f2] p-3 text-white hover:bg-[#2a1ed6]"
                >
                  <FaTiktok size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/unibuz"
                  className="rounded-full bg-[#3224f2] p-3 text-white hover:bg-[#2a1ed6]"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-5">
          <Footer.Copyright href="#" by="Unibuz" year={2025} />
          <div className="flex space-x-6 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={FaTiktok} />
            <Footer.Icon
              href="https://www.linkedin.com/company/unibuz"
              icon={FaLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default ComingSoonFooter;
