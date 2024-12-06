"use client";
import { TribeHeader } from "../Components/TribeHeader";
import { FiPlus } from "react-icons/fi";
import { Avatar, Button, Card } from "flowbite-react";

export function Tribe() {
  return (
    <div className="min-h-screen bg-slate-100">
      <TribeHeader />
      <div className="container mx-auto py-10 lg:px-20 xl:px-52">
        <div className="flex-inline mx-auto w-10/12 mb-10 flex justify-between rounded-xl bg-white px-5 py-5">
          <div className="flex-inline flex items-center gap-5">
            <FiPlus className="h-10 w-10 rounded-full bg-indigo-100 p-1 text-[#3224f2] hover:bg-[#cbfd80] hover:text-green-500" />
            <p className="text-lg font-semibold">Create a tribe</p>
          </div>
          <div>
            <Button
              className="bg-indigo-100 px-4 text-lg text-[#3224f2]"
              size="lg"
              pill
            >
              Create
            </Button>
          </div>
        </div>

        <Card className="mx-auto w-10/12">
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 px-10 dark:divide-gray-700">
              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/artTribe.png" />
                <div className="flex gap-1.5">
                  <p className="text-md font-bold">Monash Arts</p>
                </div>
              </li>

              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/animeClub.jpg" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-md font-bold">SWeebs</p>
                  <p className="text-sm font-light">Swinburne Anime Club</p>
                </div>
              </li>

              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/gymClub.avif" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-md font-bold">Swolburne</p>
                  <p className="text-sm font-light">Swinburne Gym Club</p>
                </div>
              </li>

              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/intClub.jpg" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-md font-bold">
                    Swinburne International Students Club
                  </p>
                  <p className="text-sm font-light">
                    Place where students from everywhere connect together
                  </p>
                </div>
              </li>

              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/esportClub.png" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-md font-bold">RMIT Esports and Games</p>
                  <p className="text-sm font-light">RMIT's gaming club</p>
                </div>
              </li>

              <li className="flex-inline flex items-center justify-start gap-5 py-4">
                <Avatar img="./src/media/netflixClub.png" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-md font-bold">Netflix fans</p>
                  <p className="text-sm font-light">
                    Netflix and chill (guys) !!!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
