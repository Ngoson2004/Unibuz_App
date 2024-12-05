"use client";

import {Button} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import Header from "../Components/Header";

export const Interest = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100">
      <Header />
      <form
        onSubmit={() => {
          navigate("/guide");
        }}
        className="sm:px-auto mx-auto grid max-w-2xl grid-rows-1 gap-5 px-5 py-16 lg:py-32"
      >
        <div className="flex flex-col space-y-2">
          <div>
            <IoGameController className="h-10 w-10 text-[#3B4FE6]" />
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
          <Button className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Music
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Foodie
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Coffee
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Sports
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Walking
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Travel
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Reading
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Gaming
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Fitness
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Yoga
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Photography
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Art
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Movies
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Technology
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Fashion
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Cooking
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Baking
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Gardening
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            DIY
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Traveling
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Hiking
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Cycling
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Running
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Swimming
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Fishing
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Camping
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Bird Watching
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Astronomy
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Writing
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Blogging
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Podcasting
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Volunteering
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Knitting
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Crocheting
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Sewing
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Origami
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Board Games
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Puzzles
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Magic
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Collecting
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
            Antiquing
          </Button>
          <Button   className="bg-indigo-200 text-[#3B4FE6] hover:border-2 hover:border-[#3B4FE6] rounded-full">
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
};
