"use client";


import Header from "../Components/Header";

import Footers from "../Components/Footer";

export function ComingSoon() {
  return (
    <div>
      <Header />
      <div className="isolate bg-white sm:relative">
        <div className="w-full pl-24 sm:relative sm:grid sm:grid-cols-2">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute inset-0 z-[-1] h-full w-full object-cover"
            playsInline
            preload="auto"
            poster=".\src\media\Banner video poster.jpg"
          >
            <source src=".\src\media\Banner video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img
            className="absolute inset-0 z-[-1] h-full w-full object-cover"
            src=".\src\media\Hero Banner BG.png"
            alt="Unibuz Hero Banner"
          />

          <div className="w-50 relative mb-[210px] mt-[240px] h-auto justify-center rounded-[50px] bg-[#f8f7f9] px-16 pb-[37px] pt-[50px] opacity-80 sm:h-[443px] sm:w-[595px] sm:items-start">
            <h1 className="mb-[37px] hidden w-full text-left font-clash-grotesk-semibold text-6xl text-[#060028] sm:inline-block">
              We are <p className="text-[#3224f2]">coming soon...</p>
            </h1>

            <p className="mb-[40px] text-center font-satoshi-md text-[18px] leading-8 sm:inline-block sm:text-left sm:align-middle sm:text-xl sm:text-[#050026]">
              Don't miss the buzz - join our newsletter and be the first to know
              when Unibuz goes live!
            </p>

            <div className="flex w-full items-center gap-x-[20px]">
              <input
                className="block h-12 w-full rounded-full border-2 border-gray-300 bg-white p-4 text-md"
                placeholder="Enter your university email"
              />
              <button
                type="submit"
                className="rounded-[50px] bg-[#3224f2] px-6 py-3 font-satoshi-md text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
