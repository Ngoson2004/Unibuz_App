"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import Header from "../Components/Header";
import { Slideshow } from "../Components/Slideshow";

export const Password = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="h-dvh sm:grid grid-cols-2 gap-5">
        <div>
          <form onSubmit={() => {navigate("/profile")}} className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56">
            <legend>
              <RiLockPasswordLine className="h-10 w-10 text-[#3B4FE6]" />
            </legend>
            <div>
              <div className="block">
                <Label
                  htmlFor="password"
                  value="Set Password"
                  className="text-lg font-bold text-black"
                />
                <p className="my-3 text-xs text-black sm:text-sm">
                  Your password
                </p>
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Type your password"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>
            <div>
              <div className="block">
                <p className="my-3 text-xs text-black sm:text-sm">
                  Confirm your password
                </p>
              </div>
              <TextInput
                id="confirmPassword"
                type="password"
                placeholder="Retype your password"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>
            <Button
              type="submit"
              className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
            >
              Continue
            </Button>
          </form>
        </div>
        <div className="mt-10 hidden h-full sm:block">
          <Slideshow />
        </div>
      </div>
    </div>
  );
};
