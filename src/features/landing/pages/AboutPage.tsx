import about_banner from "@/shared/assets/media/about_banner.png";
import mission from "@/shared/assets/media/mission.png";
import vision from "@/shared/assets/media/vision.png";
import story from "@/shared/assets/media/story.png";
import suzanne from "@/shared/assets/media/suzanne.png";
import ellipse1 from "@/shared/assets/media/ellipse1.png";
import ellipse2 from "@/shared/assets/media/ellipse2.png";
import polygon from "@/shared/assets/media/polygon.png";
import rectangle from "@/shared/assets/media/rectangle.png";
import { Avatar, Card } from "flowbite-react";

export function About() {
  return (
    <div>
      <div className="isolate bg-white">
        {/*Banner - Mobile version */}
        <img
          className="absolute top-0 z-[-1] h-[525px] w-full object-cover sm:hidden"
          src={about_banner}
          alt="Unibuz Hero Banner"
        />
        <div className="relative mt-16 w-dvw place-content-center sm:mt-28">
          <div className="h-[465px] w-3/4 bg-transparent bg-gradient-to-r from-[#EAE9FE] from-85% py-24 pr-12 sm:w-1/2 sm:px-14 sm:py-32 sm:pr-32">
            <h1 className="mb-[28px] w-full text-center font-clash-grotesk-semibold text-4xl text-[#3224f2] sm:text-left sm:text-6xl">
              About
            </h1>
            <p className="mx-10 mb-[60px] text-center font-satoshi-md text-sm leading-8 sm:mx-auto sm:inline-block sm:text-left sm:align-middle sm:text-[18px] sm:text-[20px] sm:text-[#050026]">
              Created by students, for students. Our team understands that
              university life is about more than just academics—it's about
              building lasting connections and making memories.
            </p>
          </div>
          {/*Banner - Desktop version */}
          <div className="grow">
            <img
              className="absolute top-0 z-[-1] hidden size-full object-cover sm:block"
              src={about_banner}
              alt="Unibuz Hero Banner"
            />
          </div>
        </div>
      </div>

      <div className="relative my-20 grid grid-rows-3 gap-20 p-10 sm:my-auto sm:gap-40 sm:p-[90px]">
        <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
          <div className="h-full sm:w-[599px] ">
            <img
              src={mission}
              alt="mission"
              className="h-full rounded-[40px] object-cover"
            />
          </div>
          <div className="h-full flex-col place-content-center space-y-10">
            <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
              Our mission
            </h1>
            <p className="max-w-[566px] grow font-satoshi text-[20px]">
              Unibuz’s sole purpose is to encourage connection, eases
              transition, and enhances every aspect of uni life, so all
              students, regardless of where they’re from, can thrive and feel at
              home.
            </p>
          </div>
        </div>

        <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
          <div className="h-full flex-col place-content-center space-y-10">
            <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
              Our vision
            </h1>
            <p className="max-w-[566px] grow font-satoshi text-[20px]">
              We aim to be the one-stop digital meeting place for all university
              students in Australia, where they can connect and build lasting
              relationships that enhance their university experience.
            </p>
          </div>
          <div className="h-full w-auto sm:w-[599px]">
            <img
              src={vision}
              alt="vision"
              className="h-full rounded-[40px] object-cover"
            />
          </div>
        </div>

        <div className="flex h-fit grow flex-col gap-20 sm:h-[503px] sm:flex-1 sm:flex-row">
          <div className="h-full sm:w-[599px]">
            <img
              src={story}
              alt="story"
              className="h-full rounded-[40px] object-cover"
            />
          </div>
          <div className="h-full flex-col place-content-center space-y-10">
            <h1 className="mb-5 font-clash-grotesk-semibold text-5xl">
              Our story
            </h1>
            <p className="max-w-[566px] grow font-satoshi text-[20px]">
              Unibuz began with the founder's personal experiences navigating
              the challenges of university life, from academic pressure to
              cultural differences and social isolation. <br />
              <br />
              Understanding that these struggles affect both local and
              international students, Unibuz was born to help all university
              students in Australia thrive throughout their academic journey.
            </p>
          </div>
        </div>
      </div>

      <div className="relative my-40 flex h-fit w-dvw flex-1 grow place-content-center rounded-[40px] bg-[#EAE9FE] sm:h-[622px]">
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
              “Unibuz is the{" "}
              <p className="text-[#3224f2]">one-stop digital meeting place</p>{" "}
              for university students – enhancing their sense of connectedness
              and social life”
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
    </div>
  );
}
