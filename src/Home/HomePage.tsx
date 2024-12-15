"use client";

import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Footers from "../Components/Footer";

const TypingAnimation = () => {
  const sentences = [
    "Your Uni, Your Passions, Your Tribe.",
    "Tu Universidad, Tus Pasiones, Tu Tribu.",
    "Deine Uni, Deine Leidenschaften, Dein Stamm.",
    "Votre université, vos passions, votre tribu.",
    "Đại học của bạn, Đam mê của bạn, Cộng đồng của bạn.",
    "Universitas Anda, gairah Anda, suku Anda",
    "あなたの大学、あなたの情熱、あなたの部族。",
    "你的大学，你的激情，你的部落。",
    "당신의 대학, 당신의 열정, 당신의 부족.",
    "มหาวิทยาลัยของคุณ ความหลงใหลของคุณ เผ่าของคุณ",
    "आपका विश्वविद्यालय, आपका जुनून, आपकी जनजाति",
    "আপনার ইউনি, আপনার প্যাশন, আপনার উপজাতি",
    "ඔබේ යුනි, ඔබේ ආශාවන්, ඔබේ ගෝත්‍රය",
    "آپ کی یونی، آپ کے جذبات، آپ کا قبیلہ",
  ];
  const [currentSentence, setCurrentSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (charIndex < sentences[sentenceIndex].length) {
        setCurrentSentence(
          (prev) => prev + sentences[sentenceIndex][charIndex],
        );
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentSentence("");
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }); // Pause before switching to the next sentence
      }
    };

    const typingInterval = setInterval(type, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, sentenceIndex]);

  return <span>{currentSentence}</span>;
};

function Home() {
  return (
    <div>
      <Header />
      <div className="isolate bg-white sm:relative">
        <div className="mt-20 w-full pl-24 sm:relative sm:grid sm:grid-cols-2">
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

          <div className="w-50 relative mb-[220px] mt-[190px] h-auto justify-center rounded-[50px] bg-[#f8f7f9] px-16 pb-[37px] pt-[50px] opacity-80 sm:h-[443px] sm:w-[595px] sm:items-start">
            <h1 className="mb-[37px] hidden w-full text-left font-clash-grotesk-semibold text-6xl text-[#060028] sm:inline-block">
              Join club events,{" "}
              <p className="text-[#3224f2]">Find your tribe!</p>
            </h1>
            <p className="mb-[60px] text-center font-satoshi-md text-[18px] leading-8 sm:inline-block sm:text-left sm:align-middle sm:text-2xl sm:text-[#050026]">
              <TypingAnimation />
            </p>
            <div className="flex w-full items-center gap-x-[40px]">
              <Link
                to="/signup"
                className="rounded-full bg-[#3224f2] p-3 font-satoshi-bold text-[18px] text-[#cbfd80] shadow-sm hover:bg-[#1a0fb2] sm:px-16 sm:py-3"
              >
                Let's go!
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
          className="max-w-screen hidden hidden grid-rows-3 gap-1 sm:grid"
          id="feature"
        >
          <div className="grid w-full grid-cols-2 items-center gap-96 bg-white p-[77px]">
            <div className="grid w-[700px] grid-rows-2 gap-14">
              <div>
                <h2 className="flex-inline gap-3 text-left font-clash-grotesk-semibold text-5xl text-[#060028] xl:flex">
                  Make your UniLife <p className="text-[#3224f2]">memorable</p>
                </h2>
                <p className="mt-[41px] text-left font-satoshi-md text-2xl text-[#44405e]">
                  Use Unibuz to find and connect with other university students,
                  build friendships and network professionally. You never know
                  where your university connections may lead you!
                </p>
              </div>

              <div className="flex justify-end">
                <img src=".\src\media\characters.png" className="h-72 w-72" />
              </div>
            </div>

            <div className="mr-[66px] h-[614px] w-[345px]">
              <iframe
                className="h-full w-full rounded-3xl"
                src=".\src\media\Unibuz video.mp4"
                title="Unibuz video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex-cols-2 flex justify-between gap-20 bg-white p-[77px]">
            <div className="w-72 items-start py-10 pl-8">
              <h2 className="text-left font-clash-grotesk-semibold text-5xl text-[#060028]">
                Features
              </h2>
              <p className="mt-[35px] text-left font-satoshi-md text-xl text-[#44405e]">
                Unibuz is a social media for everyone. With Unibuz, you can
                check newsfeed, join social groups, attend events and message
                your friends.
              </p>
            </div>

            <div className="flex-cols-3 flex items-end gap-5 text-[#44405e]">
              <div className="mt-[217px] h-3/4 w-64 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-4/5 hover:bg-[#cbfd80]">
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Unibazaar
                </h3>
                <p className="font-satoshi-md text-lg">
                  You can compare prices you’ll still ignore, window shopping,
                  and even sell that weird lamp you regret buying!
                </p>
                <FaShoppingCart className="my-10 ml-14 h-20 w-20 text-[#3224f2]" />
              </div>
              <div className="mt-[217px] h-3/4 w-64 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-4/5 hover:bg-[#cbfd80]">
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  What's on?
                </h3>
                <p className="font-satoshi-md text-lg">
                  Unibuz is where you can share posts and view others' posts.
                  It’s like Facebook, but for oversharing about UniLife :)
                </p>
                <FaBookBookmark className="my-10 ml-14 h-20 w-20 text-[#3224f2]" />
              </div>
              <div className="mt-[217px] h-3/4 w-64 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-4/5 hover:bg-[#cbfd80]">
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Messages
                </h3>
                <p className="font-satoshi-md text-lg">
                  Having a good ol’ yarn with people on Unibuz — whether you’re
                  doing group assignments or just fishing for a soulmate with a
                  killer GPA!
                </p>
                <FaRegEnvelope className="my-10 ml-14 h-20 w-20 text-[#3224f2]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
}

export default Home;
