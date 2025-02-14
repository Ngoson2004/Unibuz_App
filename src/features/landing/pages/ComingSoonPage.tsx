import React, { useState } from "react";
import story from "@/shared/assets/media/story.png";
import suzanne from "@/shared/assets/media/suzanne.png";
import ellipse1 from "@/shared/assets/media/ellipse1.png";
import ellipse2 from "@/shared/assets/media/ellipse2.png";
import polygon from "@/shared/assets/media/polygon.png";
import rectangle from "@/shared/assets/media/rectangle.png";
import tribe_img from "@/shared/assets/media/feature_tribe.png";
import event_img from "@/shared/assets/media/feature_event.png";
import message_img from "@/shared/assets/media/feature_message.png";
import market_img from "@/shared/assets/media/feature_market.png";
import banner_img from "@/shared/assets/media/Hero Banner BG.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { Avatar, Toast } from "flowbite-react";
import { Card } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000); // Show toast for 5 seconds
    return () => clearTimeout(timer);
  };

  return (
    <div>
      {showToast && (
        <div className="fixed bottom-5 right-5 z-20">
          <Toast>
            <div className="inline-flex items-center justify-center rounded-lg bg-lime-100 text-lime-500">
              <FaCheckCircle className="size-5" />
            </div>
            <div className="ml-8 text-xl font-medium text-lime-600">
              Successfully subscribed to newsletter!
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}

      <div className="isolate bg-white sm:relative">
        <div className="pt-32 sm:pt-0">
          <div className="mt-0 w-full sm:relative sm:grid sm:grid-cols-2 sm:pl-20">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 z-[-1] size-full object-cover"
              playsInline
              preload="auto"
              poster=".\src\media\Banner video poster.jpg"
            >
              <source src=".\src\media\Banner video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute inset-0 z-[-1] size-full object-cover"
              src={banner_img}
              alt="Unibuz Hero Banner"
            />

            <div className="relative mx-4 mb-[100px] mt-[120px] h-auto justify-center rounded-[50px] bg-[#f8f7f9] px-6 pb-[37px] pt-[50px] opacity-80 sm:mx-0 sm:mb-[210px] sm:mt-[240px] sm:h-[443px] sm:w-[595px] sm:items-start sm:px-16">
              <h1 className="mb-[37px] text-center font-clash-grotesk-semibold text-4xl text-[#060028] sm:text-left sm:text-6xl">
                We are <p className="text-[#3224f2]">coming soon...</p>
              </h1>

              <p className="mb-[40px] text-center font-satoshi-md text-[16px] leading-8 sm:text-left sm:align-middle sm:text-[18px] sm:text-[#050026]">
                Don't miss the buzz - join our newsletter and be the first to
                know when Unibuz goes live!
              </p>

              <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-x-[20px]">
                <input
                  className="text-md block h-12 w-full rounded-full border-2 border-gray-300 bg-white p-4"
                  placeholder="Enter your university email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full rounded-[50px] bg-[#3224f2] px-6 py-3 font-satoshi-md text-white sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 md:pt-0">
        <div className="relative grid grid-rows-1 gap-20 p-20 md:my-auto md:gap-10 md:p-[90px]">
          <div className="flex h-fit grow flex-col items-center justify-center gap-20 md:flex-1 md:flex-row">
            <div className="h-[300px] w-full md:h-full md:w-[599px]">
              <img
                src={story}
                alt="story"
                className="size-full rounded-[40px] object-cover"
              />
            </div>
            <div className="flex h-full flex-col justify-center space-y-8 px-4 sm:px-0">
              <h1 className="font-clash-grotesk-semibold text-5xl text-[#0000FF]">
                Our Story
              </h1>
              <p className="max-w-[566px] font-satoshi text-lg leading-relaxed text-[#1A1A1A]">
                Unibuz began with the founder's personal experiences navigating
                the challenges of university life, from academic pressure to
                cultural differences and social isolation.
                <br />
                <br />
                Understanding that these struggles affect both local and
                international students, Unibuz was born to help all university
                students in Australia thrive throughout their academic journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-4 flex h-fit w-dvw flex-1 grow place-content-center rounded-[40px] bg-[#EAE9FE] sm:h-[622px]">
        <img
          src={ellipse1}
          alt="ellipse1"
          className="absolute left-0 top-0 hidden size-[200px] object-cover sm:block"
        />
        <img
          src={rectangle}
          alt="rectangle"
          className="absolute left-28 top-28 hidden size-[100px] object-cover sm:block"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          className="absolute bottom-0 left-0 sm:bottom-5 sm:left-96"
        >
          <circle
            cx="43.12"
            cy="43.12"
            r="42.12"
            stroke="#6F66F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
        </svg>

        <img
          src={rectangle}
          alt="rectangle"
          className="absolute bottom-10 left-0 size-[50px] object-cover sm:bottom-20 sm:left-96"
        />

        <Card className="my-5 w-10/12 sm:my-12 sm:w-5/12">
          <div className="flex flex-col space-y-8">
            <Avatar img={suzanne} size="xl" />
            <h1 className="text-center font-satoshi-md text-sm text-[#3224f2] sm:text-[24px]">
              Suzanne Soares · Founder & CEO
            </h1>
            <p className="mx-auto text-balance text-center font-satoshi text-sm text-[#060028] sm:mx-5 sm:text-lg">
              "Unibuz is the{" "}
              <p className="text-[#3224f2]">one-stop digital meeting place</p>{" "}
              for university students – enhancing their sense of connectedness
              and social life"
            </p>
          </div>
        </Card>

        <img
          src={polygon}
          alt="polygon"
          className="absolute right-10 top-20 size-[50px] object-cover sm:right-96 sm:top-28"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          className="absolute right-0 top-0 sm:right-96 sm:top-5"
        >
          <circle
            cx="54.605"
            cy="54.605"
            r="53.605"
            stroke="#6F66F5"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <img
          src={polygon}
          alt="polygon"
          className="absolute bottom-28 right-28 hidden size-[100px] object-cover sm:block"
        />
        <img
          src={ellipse2}
          alt="ellipse2"
          className="absolute bottom-0 right-0 hidden size-[200px] object-cover sm:block"
        />
      </div>
      <div id="feature" className="grid gap-20 p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-clash-grotesk-semibold text-5xl">
            Features
          </h1>
          <div className="mt-2 h-1 w-20 rounded-full bg-[#3224f2]"></div>
        </div>

        <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
          <div className="hidden size-full max-w-[599px] sm:block">
            <img
              src={tribe_img}
              alt="Tribe"
              className="h-auto w-full rounded-[40px] object-cover"
            />
          </div>
          <div className="h-full flex-col items-center">
            <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
              Tribes
            </h1>
            <div className="flex gap-2">
              <p className="mb-16 max-w-[566px] grow font-satoshi text-[20px]">
                In our app, 'Tribes' are clubs or interest groups where you can
                connect with like-minded students. Join or create Tribes to make
                the most of your uni experience.
              </p>
              <img
                src={tribe_img}
                alt="Tribe"
                className="h-auto w-1/2 max-w-[250px] sm:hidden"
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
                className="h-auto w-1/2 max-w-[250px] sm:hidden"
              />
              <p className="mb-16 max-w-[566px] font-satoshi text-[20px]">
                Stay in the loop with events that matter to you. Unibuz makes it
                easy to find, save, and manage your campus activities, all in
                one place.
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
          <div className="hidden size-full max-w-[599px] sm:block">
            <img
              src={event_img}
              alt="Event"
              className="h-auto w-full rounded-[40px] object-cover"
            />
          </div>
        </div>

        <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
          <div className="hidden size-full max-w-[599px] sm:block">
            <img
              src={message_img}
              alt="Message"
              className="h-auto w-full rounded-[40px] object-cover"
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
                className="h-auto w-1/2 max-w-[250px] sm:hidden"
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
                with our integrated system that monitors and prevents bullying,
                discrimination, and hate speech.
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
                className="h-auto w-1/2 max-w-[250px] sm:hidden"
              />
              <p className="mb-16 max-w-[566px] font-satoshi text-[20px]">
                Our student-only marketplace makes buying, selling, or swapping
                items on campus simple and secure.
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

          <div className="hidden size-full max-w-[599px] sm:block">
            <img
              src={market_img}
              alt="Market"
              className="h-auto w-full rounded-[40px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
