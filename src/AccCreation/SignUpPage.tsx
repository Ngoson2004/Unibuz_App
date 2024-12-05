"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
// import Footers from "../Components/Footer";
import { FaRegEnvelope } from "react-icons/fa";

function Email() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="grid-cols-2 gap-5 sm:grid">
        <div className="hidden sm:block md:h-full">
          <img
            src="./src/media/SignUp.jpg"
            alt="Sign Up"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <form
            onSubmit={() => {
              navigate("/auth");
            }}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56"
          >
            <legend className="mb-5 text-center text-lg font-bold text-[#3B4FE6] sm:text-3xl lg:text-4xl">
              Sign Up
            </legend>
            <div>
              <div className="block">
                <FaRegEnvelope className="h-10 w-10 rounded-xl p-1 text-[#3224f2] mb-2" />

                <Label
                  htmlFor="email1"
                  value="Your email"
                  className="text-lg font-bold text-black"
                />

                <p className="my-2 text-xs text-black sm:text-sm">
                  Use your university email to continue
                </p>
              </div>

              <TextInput
                id="email1"
                type="email"
                placeholder="Type your email"
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
      </div>
    </div>
  );
}

export default Email;
