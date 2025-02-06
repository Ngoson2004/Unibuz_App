"use client";

import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "@/shared/components/Header";
import { useNavigate } from "react-router-dom";
import { Slideshow } from "@/shared/components/Slideshow";

function SignInPage() {
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.showToast) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Show toast for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="bg-slate-100">
      <Header />
      {showToast && (
        <div className="fixed bottom-5 right-5 z-20">
          <Toast>
            <div className="inline-flex items-center justify-center rounded-lg bg-lime-100 text-lime-500">
              <FaCheckCircle className="size-5" />
            </div>
            <div className="ml-8 text-xl font-medium text-lime-600">
              Accound created successfully!
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}

      <div className="h-dvh grid-cols-2 gap-5 sm:grid">
        <div className="mt-5 hidden h-full sm:block">
          <Slideshow />
        </div>

        <div>
          <form
            className="mx-auto grid max-w-md grid-rows-3 gap-4 px-5 py-32 sm:py-48 lg:py-56"
            onSubmit={() => {
              navigate("/home/tribes/feed");
            }}
          >
            <legend className="text-center text-lg font-bold text-[#3B4FE6] sm:text-3xl lg:text-4xl">
              Sign In
            </legend>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                  className="text-[#3224f2]"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="abc@xyz.com"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Your password"
                  className="text-[#3224f2]"
                />
              </div>
              <TextInput
                id="password1"
                type="password"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-[#3224f2]">
                Remember me
              </Label>
            </div>
            <div>
              <Label className="text-[#3B4FE6]">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="text-[#3B4FE6] underline hover:text-lime-500"
                >
                  Sign Up
                </Link>
              </Label>
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

export default SignInPage;
