"use client";

import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaBookBookmark } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import  Footers from "../Components/Footer";

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
        <div className="w-full py-32 sm:relative sm:grid sm:grid-cols-2">
          <video
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
          </video>
          <div className="mt-30 relative mx-32 mb-36 w-10/12 justify-center rounded-3xl p-10 opacity-90 sm:items-start sm:bg-white">
            <h1 className="hidden text-balance text-3xl font-bold text-[#050026] sm:block md:text-4xl lg:text-5xl">
              Discover events, <p className="text-[#3224f2]">find new mates!</p>
            </h1>
            <p className="mt-6 text-center text-3xl font-normal leading-8 text-white sm:inline-block sm:text-left sm:align-middle sm:text-2xl sm:text-[#050026]">
              <TypingAnimation />
            </p>
            <div className="mt-16 flex items-center gap-x-6 font-semibold">
              <Link
                to="/signup"
                className="rounded-full bg-[#3224f2] p-3 text-xl text-[#cbfd80] shadow-sm hover:bg-lime-400 hover:text-blue-700 sm:px-12 sm:py-3"
              >
                Let's go!
              </Link>
              <a
                href="#feature"
                className="hidden rounded-full border-2 border-[#3224f2] px-8 py-3 text-lg font-normal leading-6 text-[#3224f2] hover:text-blue-700 sm:block"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="max-w-screen mx-20 hidden grid-rows-4 gap-60 py-32 sm:grid"
          id="feature"
        >
          <div className="w-full items-start justify-items-start bg-white">
            <div className="mb-10 w-7/12">
              <h2 className="flex-inline gap-3 text-balance text-4xl font-bold xl:flex">
                Make your UniLife <p className="text-[#3224f2]">memorable</p>
              </h2>
              <p className="mt-6 text-left text-xl">
                Use Unibuz to find and connect with other university students in
                your area, build friendships and network professionally. You
                never know where your university connections may lead you!
              </p>
            </div>
            <div className="flex-inline flex w-full items-start gap-16">
              <div className="h-80 w-7/12">
                <iframe
                  className="h-full w-full rounded-3xl"
                  src=".\src\media\Unibuz video.mp4"
                  title="Unibuz video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex h-80">
                <img
                  src=".\src\media\characters.png"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex-cols-2 flex justify-between gap-32 bg-white">
            <div className="w-72 items-start py-10 pl-8">
              <h2 className="text-left text-5xl font-extrabold">Features</h2>
              <p className="mt-10 text-left text-xl">
                Unibuz is a social media for everyone. With Unibuz, you can
                check newsfeed, join social groups, attend events and message
                your friends.
              </p>
            </div>

            <div className="flex-cols-3 flex items-end gap-10">
              <div className="mt-36 w-64 rounded-3xl bg-slate-100 px-10 py-5 text-center hover:mt-32 hover:bg-[#cbfd80]">
                <h3 className="mb-10 text-3xl font-bold underline decoration-wavy">
                  What's on
                </h3>
                <p className="text-md font-semibold">
                  You can share, snoop on other people’s posts, crash social
                  groups, RSVP to events you’ll probably forget, and even sell
                  that weird lamp you regret buying!
                </p>
                <SlMagnifier className="my-10 ml-14 h-20 w-20 text-[#3224f2]" />
              </div>
              <div className="mt-36 w-64 rounded-3xl bg-slate-100 px-12 py-5 text-center hover:mt-32 hover:bg-[#cbfd80]">
                <h3 className="mb-10 text-3xl font-bold underline decoration-wavy">
                  Newsfeed
                </h3>
                <p className="text-md font-semibold">
                  This is where you can share posts and view others' posts. Just
                  remember, with great power comes great responsibility... and
                  hilarious memes.
                </p>
                <FaBookBookmark className="my-10 ml-10 h-20 w-20 text-[#3224f2]" />
              </div>
              <div className="mt-36 w-64 rounded-3xl bg-slate-100 px-12 py-5 text-center hover:mt-32 hover:bg-[#cbfd80]">
                <h3 className="mb-10 text-3xl font-bold underline decoration-wavy">
                  Messages
                </h3>
                <p className="text-md font-semibold">
                  Having a good ol’ yarn with people on Unibuz — whether you’re
                  swapping stuff, spilling tea, or just fishing for a soulmate
                  with a killer GPA!
                </p>
                <FaRegEnvelope className="my-10 ml-10 h-20 w-20 text-[#3224f2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footers/>
    </div>
  );
}

export default Home;
