"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdGroups } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Avatar, Card } from "flowbite-react";
import banner_img from "@/shared/assets/media/Hero Banner BG.png";
import character from "@/shared/assets/media/characters.png";
import video from "@/shared/assets/media/Unibuz video.mp4";
import mascot from "@/shared/assets/media/mascot.png";

import blog1 from "@/shared/assets/media/Blog1.png";
import blog2 from "@/shared/assets/media/Blog2.png";
import blog3 from "@/shared/assets/media/Blog3.png";
import blog_img from "@/shared/assets/media/testimonials/Olivia.png";
import { InfiniteMovingCards } from "@/shared/components/ui/infinite-moving-cards";
import { testimonials } from "../data/testimonials";

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
        }, 2000); // Pause before switching to the next sentence
      }
    };

    const typingInterval = setInterval(type, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, sentenceIndex]);

  return <span>{currentSentence}</span>;
};

function Home() {
  const [hoveredMascot, setHoveredMascot] = useState<string | null>(null);

  return (
    <div>
      <div className="isolate bg-white">
        {/*Mobile version */}
        <img
          className="absolute top-0 z-[-1] h-[700px] w-full object-cover sm:hidden"
          src={banner_img}
          alt="Unibuz Hero Banner"
        />
        <div className="relative w-full sm:grid sm:grid-cols-2 sm:pl-24">
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

          {/*Desktop version */}
          <img
            className="absolute top-0 z-[-1] hidden size-full object-cover sm:block"
            src={banner_img}
            alt="Unibuz Hero Banner"
          />
          <div className="mx-8 mt-40 h-[400px] items-center rounded-[50px] bg-[#f8f7f9] p-16 opacity-80 sm:mb-[210px] sm:mt-[240px] sm:h-[443px] sm:w-[595px] sm:items-start">
            <h1 className="mb-[37px] w-full text-center font-clash-grotesk-semibold text-3xl text-[#060028] sm:text-left sm:text-6xl">
              Join club events,{" "}
              <p className="text-[#3224f2]">Find your tribe!</p>
            </h1>
            <p className="mb-[60px] text-center font-satoshi-md text-base leading-8 sm:inline-block sm:text-left sm:align-middle sm:text-2xl sm:text-[#050026]">
              <TypingAnimation />
            </p>
            <div className="flex w-full items-center justify-center gap-x-[40px] sm:justify-start">
              <Link
                to="/auth/sign-up"
                className="rounded-full bg-[#3224f2] px-5 py-3 font-satoshi-bold text-base text-[#cbfd80] shadow-sm hover:bg-[#1a0fb2] sm:px-16 sm:py-3 sm:text-[18px]"
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
          id="feature"
          className="grid w-full grid-rows-1 gap-20 sm:grid-rows-2 sm:gap-1"
        >
          {/*Intro - Desktop version */}
          <div className="hidden size-full grid-cols-2 items-center gap-72 bg-white p-[77px] sm:grid xl:gap-96">
            <div className="grid w-[500px] grid-rows-2 gap-14 xl:w-[700px]">
              <div>
                <h2 className="flex-inline gap-3 text-left font-clash-grotesk-semibold text-5xl text-[#060028] xl:flex">
                  Make your UniLife <p className="text-[#3224f2]">memorable</p>
                </h2>
                <p className="mt-[41px] text-left font-satoshi-md text-lg text-[#44405e] xl:text-2xl">
                  Use Unibuz to find and connect with other university students,
                  build friendships and network professionally. You never know
                  where your university connections may lead you!
                </p>
              </div>

              <div className="flex justify-end">
                <img src={character} className="size-72" />
              </div>
            </div>

            <div className="mr-[66px] h-[614px] w-[345px]">
              <video
                className="size-full rounded-3xl"
                src={video}
                title="Unibuz video player"
                controls
              />
            </div>
          </div>

          {/*Intro - Mobile version */}
          <div className="relative mx-auto mt-0 grid h-fit max-w-sm grid-rows-1 items-center p-10 sm:hidden">
            <div className="pt-40 text-center">
              <h2 className="gap-1 text-center font-clash-grotesk-semibold text-3xl text-[#060028]">
                Make your UniLife <p className="text-[#3224f2]">memorable</p>
              </h2>
              <p className="mt-4 text-center font-satoshi-md text-lg text-[#44405e]">
                Use Unibuz to find and connect with other university students,
                build friendships and network professionally. You never know
                where your university connections may lead you!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-10">
              <div className="place-self-center">
                <img src={character} className="h-52 w-full" />
              </div>
              <div className="h-auto w-full">
                <video
                  className="size-full rounded-3xl"
                  src={video}
                  title="Unibuz video player"
                  controls
                />
              </div>
            </div>
          </div>

          <div className="relative flex grow flex-col justify-center bg-white px-10 sm:-mt-10 sm:flex-1 sm:px-[77px]">
            <div className="flex flex-col items-center">
              <h2 className="text-center font-clash-grotesk-semibold text-3xl text-[#060028] sm:text-5xl">
                Features
              </h2>
              <div className="mt-2 h-1 w-20 bg-[#3224f2]"></div>
            </div>

            <div className="relative mt-10 items-end space-y-16 text-[#44405e] sm:-mt-5 sm:flex sm:gap-8 sm:space-y-32">
              {hoveredMascot && (
                <div
                  className={`absolute top-0 hidden sm:block ${
                    hoveredMascot === "tribes"
                      ? "left-1 xl:left-10 2xl:left-20"
                      : hoveredMascot === "events"
                        ? "left-56 xl:left-[370px] min-[1800px]:left-[550px]"
                        : hoveredMascot === "messages"
                          ? "left-[440px] xl:left-[700px] min-[1800px]:left-[1000px]"
                          : "left-[660px] xl:left-[1010px] min-[1800px]:left-[1440px]"
                  }
                  z-0`}
                >
                  <img src={mascot} alt="Unibuz Mascot" className="size-52" />
                </div>
              )}

              <div
                onMouseEnter={() => setHoveredMascot("tribes")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-gray-200 p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Tribes
                </h3>
                <p className="font-satoshi-md text-lg">
                  Unibuz is where you can find people with the same passions and
                  lifestyle. It's like Facebook, but for oversharing about
                  UniLife :)
                </p>
                <div className="flex justify-center pt-24 sm:pt-0">
                  <MdGroups className="size-24 text-[#3224f2] xl:my-5" />
                </div>
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("events")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-gray-200 p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  What's on?
                </h3>
                <p className="font-satoshi-md text-lg">
                  Our event picker's like your mate who knows every gig, BBQ,
                  and footy match in town—no effort, just good times sorted ;)
                </p>
                <div className="flex justify-center pt-24 sm:pt-0">
                  <MdEvent className="h-20 w-24 text-[#3224f2] xl:my-9 xl:h-24" />
                </div>
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("messages")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-gray-200 p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Messages
                </h3>
                <p className="font-satoshi-md text-lg">
                  Having a good ol' yarn with people on Unibuz, whether you're
                  doing group assignments or just fishing for a soulmate with a
                  killer GPA 😘
                </p>
                <div className="flex justify-center pt-24 sm:pt-0">
                  <FaRegEnvelope className="h-16 w-24 justify-self-center text-[#3224f2] xl:my-3 xl:h-24" />
                </div>
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("unibazaar")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-full rounded-[40px] bg-gray-200 p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Unibazaar
                </h3>
                <p className="font-satoshi-md text-lg">
                  You can empty you wallet, window shopping, and even sell that
                  weird lamp you regret buying! It's like Gumtree, but for
                  UniLife : D
                </p>
                <div className="flex justify-center pt-24 sm:pt-0">
                  <FaShoppingCart className="size-20 justify-self-center text-[#3224f2] xl:my-9" />
                </div>
              </div>
            </div>
          </div>

          {/*Testimonials - Desktop version */}
          <div className="mt-0 hidden bg-gradient-to-b from-neutral-100 to-[#f3f2f4] p-[72px] sm:block">
            <h2 className="font-clash-grotesk-semibold text-5xl text-[#060028]">
              Testimonials - Loved by 1000+ students and organisers!
            </h2>
            {/* Testimonials goes here */}
            <div className="relative flex flex-col items-center justify-center pt-8 antialiased">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={true}
              />
            </div>
          </div>

          {/*Testimonials - Mobile version */}
          <div className="relative mt-0 flex h-1/2 w-dvw flex-col space-y-8 bg-gradient-to-b from-neutral-100 to-[#f3f2f4] p-8 sm:hidden">
            <h2 className="font-clash-grotesk-semibold text-3xl text-[#060028]">
              Testimonials - Loved by 1000+ students and organisers!
            </h2>
            <div className="relative flex flex-col items-center justify-center antialiased">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={true}
              />
            </div>
          </div>

          <div className="space-y-16 bg-white p-10 pt-0 sm:space-y-[56px] sm:p-[72px] sm:pt-8">
            <h2 className="font-clash-grotesk-semibold text-3xl text-[#060028] sm:text-5xl">
              Event tips, life hacks, updates, and more!
            </h2>

            <div className="mt-20 flex grow grid-cols-3 flex-col items-start gap-7 sm:grid">
              <Card imgSrc={blog1} imgAlt="Blog 1">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  How to organize events at Uni
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  A step-by-step guide to organizing successful events at
                  Swinburne.
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img={blog_img} alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
              <Card imgSrc={blog2} imgAlt="Blog 2">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  NextGen: Top 5 Benefits for Students
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  Level up your student life with NextGen – because why settle
                  for less?
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img={blog_img} alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
              <Card imgSrc={blog3} imgAlt="Blog 3">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  Starting a Swinburne Club: From A to Z
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  Want to start a club? We'll walk you through it.
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img={blog_img} alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
            </div>

            <div className="flex items-center justify-center">
              <Link
                className="rounded-full border-2 border-[#828093] bg-transparent py-[12px] pl-[42px] pr-[52px] font-satoshi text-[20px] text-[#828093] hover:bg-slate-200"
                to="/blog"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
