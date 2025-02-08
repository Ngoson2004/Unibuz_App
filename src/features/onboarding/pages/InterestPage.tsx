"use client";

import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import Header from "@/shared/components/Header";

export default function InterestPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100">
      <Header />
      <form
        onSubmit={() => {
          navigate("/onboarding/guide");
        }}
        className="sm:px-auto mx-auto grid max-w-2xl grid-rows-1 gap-5 px-5 py-16 lg:py-32"
      >
        <div className="flex flex-col space-y-2">
          <div>
            <IoGameController className="size-10 text-[#3B4FE6]" />
          </div>
          <div>
            <p className="text-lg font-bold text-black">Interest categories</p>
          </div>
          <div>
            <p className="text-xs text-black sm:text-sm">
              What are you interested in?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Music
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Foodie
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Coffee
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Sports
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Walking
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Travel
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Reading
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Gaming
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Fitness
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Yoga
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Photography
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Art
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Movies
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Technology
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Fashion
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Cooking
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Baking
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Gardening
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            DIY
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Traveling
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Hiking
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Cycling
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Running
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Swimming
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Fishing
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Camping
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Bird Watching
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Astronomy
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Writing
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Blogging
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Podcasting
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Volunteering
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Knitting
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Crocheting
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Sewing
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Origami
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Board Games
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Puzzles
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Magic
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Collecting
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Antiquing
          </Button>
          <Button className="rounded-full bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6]">
            Genealogy
          </Button>
        </div>
        <Button
          type="submit"
          className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
