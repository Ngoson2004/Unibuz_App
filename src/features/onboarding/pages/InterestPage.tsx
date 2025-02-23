"use client";

import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { interests } from "../data/interest";
import { Slideshow } from "@/shared/components/Slideshow";

export default function InterestPage() {
  const navigate = useNavigate();
  return (
    <div className="h-dvh grid-cols-2 gap-5 sm:grid">
      <div className="hidden h-full sm:block">
        <Slideshow />
      </div>
      <div>
        <form
          onSubmit={() => {
            navigate("/onboarding/guide");
          }}
          className="sm:px-auto mx-auto grid max-w-2xl grid-rows-1 gap-5 px-5 py-16 lg:py-32"
        >
          <div className="flex flex-col space-y-2 my-5">
            <div>
              <IoGameController className="size-10 text-[#3B4FE6]" />
            </div>
            <div>
              <p className="text-lg font-bold text-black">
                Interest categories
              </p>
            </div>
            <div>
              <p className="text-xs text-black sm:text-sm">
                What are you interested in?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mb-5 h-72 overflow-y-auto">
            {interests.map((interest) => (
              <Button
                key={interest}
                className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]"
              >
                {interest}
              </Button>
            ))}
          </div>
          <Button
            type="submit"
            className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
