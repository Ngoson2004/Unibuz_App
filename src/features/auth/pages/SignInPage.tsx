"use client";

import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Slideshow } from "@/shared/components/Slideshow";
import { signIn } from "../services/sign-in";
import { useMutation } from "@tanstack/react-query";

function SignInPage() {
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: async () => {
      return await signIn(email, password);
    },
    onSuccess: (response) => {
      if (response.error) {
        setToastType("error");
        setToastMessage(response.error);
        setShowToast(true);
        return;
      }
      if (response.data?.session) {
        setToastType("success");
        setToastMessage("Signed in successfully!");
        setShowToast(true);
        navigate("/home/tribes/feed");
      }
    },
    onError: (error) => {
      setToastType("error");
      setToastMessage(
        error instanceof Error ? error.message : "Sign in failed",
      );
      setShowToast(true);
    },
  });

  useEffect(() => {
    if (location.state?.showToast) {
      setToastType("success");
      setToastMessage("Account created successfully!");
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Show toast for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInMutation.mutate();
  };

  return (
    <div className="bg-slate-100">
      {showToast && (
        <div className="fixed bottom-5 right-5 z-20">
          <Toast>
            <div
              className={`inline-flex items-center justify-center rounded-lg ${
                toastType === "success"
                  ? "bg-lime-100 text-lime-500"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {toastType === "success" ? (
                <FaCheckCircle className="size-5" />
              ) : (
                <FaExclamationCircle className="size-5" />
              )}
            </div>
            <div
              className={`ml-8 text-xl font-medium ${
                toastType === "success" ? "text-lime-600" : "text-red-600"
              }`}
            >
              {toastMessage}
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
            onSubmit={handleSubmit}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              disabled={signInMutation.isPending}
            >
              {signInMutation.isPending ? "Signing in..." : "Continue"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
