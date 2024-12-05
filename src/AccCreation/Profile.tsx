"use client";

import { Button, Label, TextInput, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Header from "../Components/Header";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="sm:grid grid-cols-2 gap-5">
        <div className="hidden sm:block">
          <img
            src="./src/media/profile.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <form onSubmit={() => {navigate("/uni")}} className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col space-y-2">
              <div>
                <RxAvatar className="h-10 w-10 text-[#3B4FE6]" />
              </div>
              <div>
                <p className="text-lg font-bold text-black">
                  Your Unibuz Profile
                </p>
              </div>
              <div>
                <p className="text-xs text-black sm:text-sm">
                  Show of your style by entering your information
                </p>
              </div>
            </div>
            <div>
              <Label
                htmlFor="username"
                value="Username"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <TextInput
                id="username"
                type="text"
                placeholder="Type your username"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="nickname"
                value="Nickname"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <TextInput
                id="nickname"
                type="text"
                placeholder="Type your nickname"
                className="rounded-lg border-2 border-[#3B4FE6]"
              />
            </div>
            <div>
              <Label
                htmlFor="pronouns"
                value="Pronouns"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="pronouns"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option>He/His</option>
                <option>She/Her</option>
                <option>They/Them</option>
              </Select>
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
    </div>
  );
};
