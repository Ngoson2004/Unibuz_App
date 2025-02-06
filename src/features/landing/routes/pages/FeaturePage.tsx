import Footers from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import banner_img from "@/shared/assets/media/feature_banner.png";
import tribe_img from "@/shared/assets/media/feature_tribe.png";
import event_img from "@/shared/assets/media/feature_event.png";
import message_img from "@/shared/assets/media/feature_message.png";
import market_img from "@/shared/assets/media/feature_market.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Feature() {
  return (
    <div>
      <Header />
      <div className="isolate bg-white">
        <img
          className="absolute top-0 z-[-1] h-[700px] w-full object-cover sm:hidden"
          src={banner_img}
          alt="Unibuz Hero Banner"
        />
        <div className="relative w-full sm:grid sm:grid-cols-2">
          <img
            className="absolute top-0 z-[-1] hidden size-full object-cover sm:block"
            src={banner_img}
            alt="Unibuz Hero Banner"
          />
          <div className="mt-32 h-max place-content-center items-center bg-transparent sm:m-[72px] sm:h-[508px] sm:w-[523px]">
            <h1 className="mb-[37px] w-full text-center font-clash-grotesk-semibold text-4xl text-[#3224f2] sm:text-left sm:text-6xl">
              Features
            </h1>
            <p className="mx-10 mb-[60px] text-center font-satoshi-md text-[18px] leading-8 sm:mx-auto sm:inline-block sm:text-left sm:align-middle sm:text-[20px] sm:text-[#050026]">
              From finding your Tribes to hosting events, Unibuz offers
              everything you need to make the most of your time on campus.
            </p>
            <div className="flex w-full items-center justify-center gap-x-[40px] sm:justify-start">
              <Link
                to="/signup"
                className="rounded-full bg-[#3224f2] px-5 py-3 font-satoshi-bold text-[18px] text-[#cbfd80] shadow-sm hover:bg-[#1a0fb2] sm:px-16 sm:py-3"
              >
                Try for free
              </Link>
              <a
                href="#feature"
                className="hidden rounded-full border-2 border-[#3224f2] px-12 py-3 font-satoshi-md text-[18px] font-normal leading-6 text-[#3224f2] hover:bg-[#c3c1e6] sm:block"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          id="feature"
          className="mt-72 grid grid-rows-4 gap-20 p-10 sm:my-auto sm:gap-[46px] sm:p-[90px]"
        >
          <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
            <div className="hidden h-full w-[599px] sm:block">
              <img
                src={tribe_img}
                alt="Tribe"
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="h-full flex-col items-center">
              <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
                Tribes
              </h1>
              <div className="flex gap-2">
                <p className="mb-16 max-w-[566px] grow font-satoshi text-[20px]">
                  In our app, ‘Tribes’ are clubs or interest groups where you
                  can connect with like-minded students. Join or create Tribes
                  to make the most of your uni experience.
                </p>
                <img
                  src={tribe_img}
                  alt="Tribe"
                  className="h-auto w-1/2 sm:hidden"
                />
              </div>
              <div className="mb-5 flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Join or create Tribes
                  </strong>{" "}
                  to connect with like-minded students in clubs or interest
                  groups.
                </p>
              </div>

              <div className="flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 8.50488H22"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 16.5049H8"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 16.5049H14.5"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Browse and make payments
                  </strong>{" "}
                  easily and securely with a student-only platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
            <div className="h-full flex-col items-center">
              <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
                What's On
              </h1>
              <div className="flex gap-2">
                <img
                  src={tribe_img}
                  alt="Tribe"
                  className="h-auto w-1/2 sm:hidden"
                />
                <p className="mb-16 max-w-[566px] font-satoshi text-[20px]">
                  Stay in the loop with events that matter to you. Unibuz makes
                  it easy to find, save, and manage your campus activities, all
                  in one place.
                </p>
              </div>
              <div className="mb-5 flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_483_7086)">
                    <path
                      d="M8 2V5"
                      stroke="#3224f2"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="#3224f2"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 9.08997H3V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V9.08997Z"
                      stroke="#3224f2"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.6947 13.7H15.7037"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.6947 16.7H15.7037"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9955 13.7H12.0045"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9955 16.7H12.0045"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.29431 13.7H8.30329"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.29431 16.7H8.30329"
                      stroke="#3224f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 9H21V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V9Z"
                      stroke="#3224f2"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_483_7086">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Discover events and activities
                  </strong>{" "}
                  that match your vibe.
                </p>
              </div>

              <div className="flex gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.72911 15.6222C5.40906 15.071 5.16387 14.4797 5 13.8637L6.21494 12.3435C6.20118 12.1111 6.20118 11.8781 6.21494 11.6456L5.00072 10.1254C5.16431 9.50939 5.40901 8.91784 5.72838 8.36625L7.66229 8.14908C7.81672 7.97511 7.98137 7.81049 8.15536 7.65608L8.37257 5.7232C8.92345 5.40539 9.51412 5.1622 10.1291 5L11.6496 6.21475C11.882 6.20099 12.1151 6.20099 12.3475 6.21475L13.868 5.00072C14.4841 5.16429 15.0758 5.40894 15.6274 5.72827L15.8446 7.66187C16.0186 7.81628 16.1833 7.9809 16.3377 8.15487L18.2709 8.37205C18.5909 8.92322 18.8361 9.51456 19 10.1305L17.7851 11.6507C17.7988 11.8831 17.7988 12.1162 17.7851 12.3486L18.9993 13.8688C18.8368 14.4846 18.5934 15.0762 18.2752 15.628L16.3413 15.8451C16.1869 16.0191 16.0223 16.1837 15.8483 16.3381L15.6311 18.271C15.0798 18.591 14.4884 18.8362 13.8724 19L12.3519 17.7853C12.1194 17.799 11.8864 17.799 11.6539 17.7853L10.1334 18.9993C9.51751 18.8369 8.92587 18.5934 8.37402 18.2754L8.15681 16.3417C7.98282 16.1873 7.81817 16.0227 7.66374 15.8488L5.72911 15.6222Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Manage and customize
                  </strong>{" "}
                  event details and attendees effortlessly.
                </p>
              </div>
            </div>
            <div className="hidden h-full w-[599px] sm:block">
              <img
                src={event_img}
                alt="Event"
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>

          <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
            <div className="hidden h-full w-[599px] sm:block">
              <img
                src={message_img}
                alt="Message"
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="h-full flex-col items-center">
              <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
                Messages
              </h1>
              <div className="flex gap-2">
                <p className="mb-16 max-w-[566px] font-satoshi text-[20px]">
                  Stay connected with your mates through a secure and seamless
                  chat experience designed just for students.
                </p>
                <img
                  src={message_img}
                  alt="Tribe"
                  className="h-auto w-1/2 sm:hidden"
                />
              </div>
              <div className="mb-5 flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 8H17"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 13H13"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Message other students
                  </strong>{" "}
                  individually or in custom groups and Tribe channels.
                </p>
              </div>

              <div className="flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <RiLockPasswordLine className="size-24 text-[#3224f2]" />
                <p>
                  <strong className="font-satoshi-bold">Ensure safety</strong>{" "}
                  with our integrated system that monitors and prevents
                  bullying, discrimination, and hate speech.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
            <div className="h-full flex-col items-center">
              <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
                Unibaazar
              </h1>
              <div className="flex gap-2">
                <img
                  src={market_img}
                  alt="Tribe"
                  className="h-auto w-1/2 sm:hidden"
                />
                <p className="mb-16 max-w-[566px] font-satoshi text-[20px]">
                  Our student-only marketplace makes buying, selling, or
                  swapping items on campus simple and secure.
                </p>
              </div>
              <div className="mb-5 flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 13.0865V19.5C4.5 19.6989 4.57902 19.8897 4.71967 20.0303C4.86032 20.171 5.05109 20.25 5.25 20.25H18.75C18.9489 20.25 19.1397 20.171 19.2803 20.0303C19.421 19.8897 19.5 19.6989 19.5 19.5V13.0865"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M5.0625 3.75H18.9375C19.1004 3.75003 19.2589 3.80311 19.389 3.90122C19.519 3.99932 19.6136 4.13711 19.6584 4.29375L20.9637 8.87259C20.9819 8.93645 20.9339 9 20.8675 9H3.13257C3.06613 9 3.01816 8.93641 3.03641 8.87253L4.34438 4.29375C4.38904 4.13757 4.48321 4.00012 4.61272 3.90206C4.74222 3.804 4.90006 3.75064 5.0625 3.75Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M9 9V10.5C9 11.2956 8.68393 12.0587 8.12132 12.6213C7.55871 13.1839 6.79565 13.5 6 13.5C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2956 3 10.5V9"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M15 9V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V9"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5V9"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">
                    Buy, sell, or swap
                  </strong>{" "}
                  items safely with verified students in a trusted transaction
                  network.
                </p>
              </div>

              <div className="flex items-center gap-5 font-satoshi text-[20px] text-[#3224f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8035 15.8034L21 21"
                    stroke="#3224f2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <strong className="font-satoshi-bold">Search</strong> by item,
                  location, or university to find exactly what you need, quickly
                  and conveniently.
                </p>
              </div>
            </div>

            <div className="hidden h-full w-[599px] sm:block">
              <img
                src={market_img}
                alt="Market"
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
