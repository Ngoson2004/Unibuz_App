"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdGroups } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Avatar, Card } from "flowbite-react";
import { Fivestars } from "@/features/landing/components/FiveStars";
import banner_img from "@/shared/assets/media/Hero Banner BG.png";
import character from "@/shared/assets/media/characters.png";
import video from "@/shared/assets/media/Unibuz video.mp4";
import mascot from "@/shared/assets/media/mascot.png";
import profile1 from "@/shared/assets/media/testimonials/Adam.png";
import profile2 from "@/shared/assets/media/testimonials/Clara.png";
import profile3 from "@/shared/assets/media/testimonials/Jane.png";
import profile4 from "@/shared/assets/media/testimonials/Kevin.png";
import profile5 from "@/shared/assets/media/testimonials/Kylie.png";
import profile6 from "@/shared/assets/media/testimonials/Paul.png";
import profile7 from "@/shared/assets/media/testimonials/Sara.png";
import profile8 from "@/shared/assets/media/testimonials/Sophia.png";
import blog1 from "@/shared/assets/media/Blog1.png";
import blog2 from "@/shared/assets/media/Blog2.png";
import blog3 from "@/shared/assets/media/Blog3.png";
import blog_img from "@/shared/assets/media/testimonials/Olivia.png";

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
                to="/signup"
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

          <div className="relative flex grow flex-col justify-center bg-white px-10 sm:flex-1 sm:px-[77px]">
            <h2 className="text-center font-clash-grotesk-semibold text-3xl text-[#060028] sm:text-5xl">
              Features
            </h2>

            <div className="relative mt-10 items-end space-y-32 text-[#44405e] sm:mt-5 sm:flex sm:gap-5">
              {hoveredMascot && (
                <div
                  className={`absolute top-0 hidden sm:block ${
                    hoveredMascot === "tribes"
                      ? "left-1 xl:left-10"
                      : hoveredMascot === "events"
                        ? "left-56 xl:left-[370px]"
                        : hoveredMascot === "messages"
                          ? "left-[440px] xl:left-[700px]"
                          : "left-[660px] xl:left-[1010px]"
                  }
                  z-0`}
                >
                  <img src={mascot} alt="Unibuz Mascot" className="size-52" />
                </div>
              )}

              <div
                onMouseEnter={() => setHoveredMascot("tribes")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Tribes
                </h3>
                <p className="font-satoshi-md text-lg">
                  Unibuz is where you can find people with the same passions and
                  lifestyle. It’s like Facebook, but for oversharing about
                  UniLife :)
                </p>
                <MdGroups className="size-24 justify-self-center text-[#3224f2] xl:my-5" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("events")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  What's on?
                </h3>
                <p className="font-satoshi-md text-lg">
                  Our event picker’s like your mate who knows every gig, BBQ,
                  and footy match in town—no effort, just good times sorted ;)
                </p>
                <MdEvent className="h-20 w-24 justify-self-center text-[#3224f2] xl:my-9 xl:h-24" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("messages")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Messages
                </h3>
                <p className="font-satoshi-md text-lg">
                  Having a good ol’ yarn with people on Unibuz, whether you’re
                  doing group assignments or just fishing for a soulmate with a
                  killer GPA 😘
                </p>
                <FaRegEnvelope className="h-16 w-24 justify-self-center text-[#3224f2] xl:my-3 xl:h-24" />
              </div>
              <div
                onMouseEnter={() => setHoveredMascot("unibazaar")}
                onMouseLeave={() => setHoveredMascot(null)}
                className="z-10 h-[450px] w-full rounded-[40px] bg-[#f3f2f4] p-8 text-center hover:h-[500px] hover:cursor-pointer hover:bg-[#cbfd80] sm:w-1/4"
              >
                <h3 className="mb-10 font-clash-grotesk-semibold text-3xl underline decoration-wavy decoration-2 underline-offset-8">
                  Unibazaar
                </h3>
                <p className="font-satoshi-md text-lg">
                  You can empty you wallet, window shopping, and even sell that
                  weird lamp you regret buying! It’s like Gumtree, but for
                  UniLife : D
                </p>
                <FaShoppingCart className="size-20 justify-self-center text-[#3224f2] xl:my-9" />
              </div>
            </div>
          </div>

          {/*Testimonials - Desktop version */}
          <div className="mt-10 hidden bg-gradient-to-b from-neutral-100 to-[#f3f2f4] p-[72px] sm:block">
            <h2 className="font-clash-grotesk-semibold text-5xl text-[#060028]">
              Testimonials - Loved by 1000+ students and organisers!
            </h2>
            <div className="flex w-full flex-wrap gap-5 p-10">
              <div className="max-w-xl justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile1} alt="ava" rounded>
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
                <Fivestars />
              </div>

              <div className="max-w-xl justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile2} alt="ava" rounded>
                  <div className="text-gray-500">Clara Boston</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Monash University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  I found my dream job through a connection I made on UniBuz! I
                  can't thank the team enough for creating this platform.
                </p>
                <Fivestars />
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile3} alt="ava" rounded>
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
                <Fivestars />
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile4} alt="ava" rounded>
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
                <Fivestars />
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile5} alt="ava" rounded>
                  <div className="text-gray-500">Kylie Fehring</div>
                  <div className="text-sm text-gray-400">
                    Student | LaTrobe University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  My go-to app for meeting new friends. Perfect for
                  international students!
                </p>
                <Fivestars />
              </div>

              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile6} alt="ava" rounded>
                  <div className="text-gray-500">Paul Park</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | Swinburne University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  Finally found some mates who love playing Valorant on Unibuz
                  ^^ We love meeting each other at offline sessions.
                </p>
                <Fivestars />
              </div>
              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile7} alt="ava" rounded>
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
                <Fivestars />
              </div>
              <div className="max-w-sm justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile8} alt="ava" rounded>
                  <div className="text-gray-500">Sophia Carter</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Australia National University
                  </div>
                </Avatar>
                <p className="text-md font-satoshi">
                  Great app, beautiful interface and very user friendly.
                </p>
                <Fivestars />
              </div>
            </div>
          </div>

          {/*Testimonials - Mobile version */}
          <div className="relative mt-20 flex h-1/2 w-dvw flex-col space-y-20 bg-gradient-to-b from-neutral-100 to-[#f3f2f4] p-8 sm:hidden">
            <h2 className="font-clash-grotesk-semibold text-3xl text-[#060028]">
              Testimonials - Loved by 1000+ students and organisers!
            </h2>
            <div className="flex max-h-fit flex-nowrap gap-5 justify-self-center overflow-x-auto">
              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-5">
                <Avatar img={profile1} alt="ava" rounded>
                  <div className="text-gray-500">Adam Hubermann</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | University of Melbourne
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  I met my best friends and my current partner from an event on
                  UniBuz! Have been using it ever since and recommending it to
                  anyone I know.
                </p>
                <Fivestars />
              </div>

              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile2} alt="ava" rounded>
                  <div className="text-gray-500">Clara Boston</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Monash University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  I found my dream job through a connection I made on UniBuz! I
                  can't thank the team enough for creating this platform.
                </p>
                <Fivestars />
              </div>

              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile3} alt="ava" rounded>
                  <div className="text-gray-500">Jane Mary</div>
                  <div className="text-sm text-gray-400">
                    Student | Victoria University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  I was struggling to find a house when first moved from
                  Brisbane to Melbourne. Thanks to Unibuz, I have been able to
                  rent one : D
                </p>
                <Fivestars />
              </div>

              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile5} alt="ava" rounded>
                  <div className="text-gray-500">Kevin Bry</div>
                  <div className="text-sm text-gray-400">
                    PhD Student | Swinburne University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  I am from Belgium and Unibuz has helped me connect with other
                  students who comes from the same country as mine! It is so
                  diverse {"<3"}
                </p>
                <Fivestars />
              </div>
            </div>
            <div className="flex max-h-fit max-w-[320px] flex-nowrap gap-5 justify-self-center overflow-x-auto sm:max-w-fit sm:flex-wrap sm:p-10">
              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile5} alt="ava" rounded>
                  <div className="text-gray-500">Kylie Fehring</div>
                  <div className="text-sm text-gray-400">
                    Student | LaTrobe University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  My go-to app for meeting new friends. Perfect for
                  international students!
                </p>
                <Fivestars />
              </div>

              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile6} alt="ava" rounded>
                  <div className="text-gray-500">Paul Park</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | Swinburne University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  Finally found some mates who love playing Valorant on Unibuz
                  ^^ We love meeting each other at offline sessions.
                </p>
                <Fivestars />
              </div>

              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile7} alt="ava" rounded>
                  <div className="text-gray-500">Sara Henn</div>
                  <div className="text-sm text-gray-400">
                    Undergrad Student | University of Sydney
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  I've been using UniBuz for a while now and it's been amazing.
                  I've made so many friends and connections that I wouldn't have
                  otherwise.
                </p>
                <Fivestars />
              </div>
              <div className="w-[300px] flex-none justify-items-start space-y-5 rounded-[40px] bg-white p-10">
                <Avatar img={profile8} alt="ava" rounded>
                  <div className="text-gray-500">Sophia Carter</div>
                  <div className="text-sm text-gray-400">
                    Master Student | Australia National University
                  </div>
                </Avatar>
                <p className="font-satoshi">
                  Great app, beautiful interface and very user friendly.
                </p>
                <Fivestars />
              </div>
            </div>
          </div>

          <div className="space-y-20 bg-white p-10 sm:space-y-[56px] sm:p-[72px]">
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
                  Want to start a club? We’ll walk you through it.
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
    </div>
  );
}

export default Home;
