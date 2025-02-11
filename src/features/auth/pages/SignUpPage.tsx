"use client";

import { Button, Label, TextInput, Toast } from "flowbite-react";
// import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaRegEnvelope } from "react-icons/fa";
import { Slideshow } from "@/shared/components/Slideshow";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { checkEmail } from "../utils/check-email";
import { useNavigate } from "react-router-dom";

function Email() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["check-email"],
    mutationFn: () => checkEmail(email),
    onSuccess: (data) => {
      if (data.redirect) {
        navigate(data.redirect);
      }
    },
    onError: (error) => {
      console.error(error);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync();
  };
  return (
    <div>
      {showToast && (
        <div className="fixed bottom-5 right-5 z-20">
          <Toast>
            <div className="inline-flex items-center justify-center rounded-lg bg-red-100 text-red-500">
              <FaCheckCircle className="size-5" />
            </div>
            <div className="ml-8 text-xl font-medium text-red-600">
              {error instanceof Error ? error.message : "An error occurred"}
            </div>
          </Toast>
        </div>
      )}
      <div className="h-dvh grid-cols-2 gap-5 sm:grid">
        <div className="mt-10 hidden h-full sm:block">
          <Slideshow />
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56"
          >
            <legend className="mb-5 text-center text-lg font-bold text-[#3B4FE6] sm:text-3xl lg:text-4xl">
              Sign Up
            </legend>
            <div>
              <div className="block">
                <FaRegEnvelope className="mb-2 size-10 rounded-xl p-1 text-[#3224f2]" />

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>

            <Button
              type="submit"
              className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
              disabled={isPending}
            >
              {isPending ? "Checking..." : "Continue"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
