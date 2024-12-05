"use client";
import { TribeHeader } from "../Components/TribeHeader";
import { FiPlus } from "react-icons/fi";

export function Tribe() {
  return (
    <div className="min-h-screen bg-slate-100">
      <TribeHeader />
      <div className="container mx-auto py-10 lg:px-20 xl:px-52">
        <div className="flex-inline flex rounded-xl bg-white px-5 py-5 justify-between">
          <div className="flex flex-inline gap-5 items-center">
              <FiPlus className="h-10 w-10 rounded-full bg-indigo-100 p-1 text-[#3224f2] hover:bg-[#cbfd80] hover:text-green-500" />
              <p className="text-lg font-semibold">Create a tribe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
