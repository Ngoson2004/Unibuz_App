import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { MdGroups } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import Footers from "../Components/Footer";
import { Avatar, Card } from "flowbite-react";
import banner_img from "../media/Hero Banner BG.png";
import character from "../media/characters.png";
import video from "../media/Unibuz video.mp4";
import mascot from "../media/mascot.png";

import profile1 from "../media/testimonials/Adam.png";

import profile2 from "../media/testimonials/Clara.png";

import profile3 from "../media/testimonials/Jane.png";

import profile4 from "../media/testimonials/Kevin.png";

import profile5 from "../media/testimonials/Kylie.png";

import profile6 from "../media/testimonials/Paul.png";

import profile7 from "../media/testimonials/Sara.png";

import profile8 from "../media/testimonials/Sophia.png";

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
  const [hoveredMascot, setHoveredMascot] = useState<string | null>(null);

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
            src={banner_img}
            alt="Unibuz Hero Banner"
          />

          <div className="w-50 relative mb-[210px] mt-[240px] h-auto justify-center rounded-[50px] bg-[#f8f7f9] px-16 pb-[37px] pt-[50px] opacity-80 sm:h-[443px] sm:w-[595px] sm:items-start">
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

        <div className="max-w-screen hidden grid-rows-4 gap-1 sm:grid">
          <div className="grid w-full grid-cols-2 items-center gap-96 bg-white p-[77px]">
            <div className="grid w-[700px] grid-rows-2 gap-14">
              <div>
                <h2 className="flex-inline tex</h2>t-[#060028] gap-3 text-left font-clash-grotesk-semibold text-5xl xl:flex">
                  Make your UniLife <p className="text-[#3224f2]">memorable</p>
                </h2>
                <p className="mt-[41px] text-left font-satoshi-md text-2xl text-[#44405e]">
                  Use Unibuz to find and connect with other university students,
                  build friendships and network professionally. You never know
                  where your university connections may lead you!
                </p>
              </div>

              <div className="flex justify-end">
                <img src={character} className="h-72 w-72" />
              </div>
            </div>

            <div className="mr-[66px] h-[614px] w-[345px]">
              <iframe
                className="h-full w-full rounded-3xl"
                src={video}
                title="Unibuz video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex-1 bg-white p-[77px]">
            <h2 className="text-center font-clash-grotesk-semibold text-5xl text-[#060028]">
              Features
            </h2>

            <div className="flex-cols-4 relative mt-5 flex h-[600px] items-end justify-center gap-5 text-[#44405e]">
              {hoveredMascot && (
                <div
                  className={`absolute top-0 ${
                    hoveredMascot === "tribes"
                      ? "left-10"
                      : hoveredMascot === "events"
                        ? "left-[370px]"
                        : hoveredMascot === "messages"
                          ? "left-[700px]"
                          : "left-[1010px]"
                  } 
                  z-0`}
                >
                  <img src={mascot} alt="Unibuz Mascot" className="h-52 w-52" />
                </div>
              )}
              <div
                onMouseEnter={() => setHoveredMascot("tribes")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-1/4 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80]"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Tribes
                </h3>
                <p className="font-satoshi-md text-lg">
                  Unibuz is where you can find people with the same passions and
                  lifestyle. It’s like Facebook, but for oversharing about
                  UniLife :)
                </p>
                <MdGroups className="mx-20 my-5 h-24 w-24 text-[#3224f2]" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("events")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-1/4 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80]"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  What's on?
                </h3>
                <p className="font-satoshi-md text-lg">
                  Our event picker’s like your mate who knows every gig, BBQ,
                  and footy match in town—no effort, just good times sorted ;)
                </p>
                <MdEvent className="mx-16 my-9 h-24 w-24 text-[#3224f2]" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("messages")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-1/4 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80]"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Messages
                </h3>
                <p className="font-satoshi-md text-lg">
                  Having a good ol’ yarn with people on Unibuz, whether you’re
                  doing group assignments or just fishing for a soulmate with a
                  killer GPA 😘
                </p>
                <FaRegEnvelope className="mx-16 my-3 h-24 w-24 text-[#3224f2]" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("unibazaar")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-1/4 rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80]"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Unibazaar
                </h3>
                <p className="font-satoshi-md text-lg">
                  You can empty you wallet, window shopping, and even sell that
                  weird lamp you regret buying! It’s like Gumtree, but for
                  UniLife : D
                </p>
                <FaShoppingCart className="mx-20 my-9 h-20 w-20 text-[#3224f2]" />
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-b from-neutral-100 to-[#f3f2f4] p-[72px]">
            <h2 className="font-clash-grotesk-semibold text-5xl text-[#060028]">
              Testimonials - Loved by 1000+ students and organisers!
            </h2>
            <div className="flex w-full flex-wrap gap-5 p-10">
              <div className="max-w-xl justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile8} alt="ava" rounded>
                  <div className="text-gray-500">Adam Hubermann</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | University of Melbourne
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I met my best friends and my current partner from an event on
                  UniBuz! Have been using it ever since and recommending it to
                  anyone I know.
                </p>
              </div>

              <div className="max-w-xl justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile1} alt="ava" rounded>
                  <div className="text-gray-500">Clara Boston</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Monash University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I found my dream job through a connection I made on UniBuz! I
                  can't thank the team enough for creating this platform.
                </p>
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile2} alt="ava" rounded>
                  <div className="text-gray-500">Jane Mary</div>
                  <div className="text-sm text-gray-400">
                    Student | Victoria University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I was struggling to find a house when first moved from
                  Brisbane to Melbourne. Thanks to Unibuz, I have been able to
                  rent one : D
                </p>
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile3} alt="ava" rounded>
                  <div className="text-gray-500">Kevin Bry</div>
                  <div className="text-sm text-gray-400">
                    PhD Student | Swinburne University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I am from Belgium and Unibuz has helped me connect with other
                  students who comes from the same country as mine! It is so
                  diverse {"<3"}
                </p>
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile4} alt="ava" rounded>
                  <div className="text-gray-500">Kylie Fehring</div>
                  <div className="text-sm text-gray-400">
                    Student | LaTrobe University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  My go-to app for meeting new friends. Perfect for
                  international students!
                </p>
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile5} alt="ava" rounded>
                  <div className="text-gray-500">Paul Park</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | Swinburne University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  Finally found some mates who love playing Valorant on Unibuz
                  ^^ We love meeting each other at offline sessions.
                </p>
              </div>
              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile6} alt="ava" rounded>
                  <div className="text-gray-500">Sara Henn</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | University of Sydney
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I've been using UniBuz for a while now and it's been amazing.
                  I've made so many friends and connections that I wouldn't have
                  otherwise.
                </p>
              </div>
              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile7} alt="ava" rounded>
                  <div className="text-gray-500">Sophia Carter</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Australia National University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  Great app, beautiful interface and very user friendly.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-[56px] bg-white p-[72px]">
            <h2 className="font-clash-grotesk-semibold text-5xl text-[#060028]">
              Event tips, life hacks, updates, and more!
            </h2>

            <div className="mt-20 grid grid-cols-3 items-start gap-7">
              <Card imgSrc="./src/media/Blog1.png" imgAlt="Blog 1">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  How to organize events at Uni
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  A step-by-step guide to organizing successful events at
                  Swinburne.
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img="./src/media/testimonials/Olivia.png" alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
              <Card imgSrc="./src/media/Blog2.png" imgAlt="Blog 2">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  NextGen: Top 5 Benefits for Students
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  Level up your student life with NextGen – because why settle
                  for less?
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img="./src/media/testimonials/Olivia.png" alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
              <Card imgSrc="./src/media/Blog3.png" imgAlt="Blog 3">
                <h1 className="my-2 font-satoshi-bold text-3xl">
                  Starting a Swinburne Club: From A to Z
                </h1>
                <p className="font-satoshi text-[20px] text-[#828093]">
                  Want to start a club? We’ll walk you through it.
                </p>
                <div className="flex-inline my-5 flex gap-3">
                  <Avatar img="./src/media/testimonials/Olivia.png" alt="ava">
                    <div className="text-gray-500">Olivia Smith</div>
                    <div className="text-sm text-gray-400">
                      1st December, 2024
                    </div>
                  </Avatar>
                </div>
              </Card>
            </div>

            <div className="items-center justify-self-center">
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

      <Footers />
    </div>
  );
}

export default Home;
