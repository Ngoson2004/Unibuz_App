"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { Slideshow } from "@/shared/components/Slideshow";
import { useSignup } from "@/shared/context/SignupContext";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpPassword } from "../services/sign-up-password";
import { checkVerifiedOTP } from "../services/check-verified-otp";

export default function Password() {
  const navigate = useNavigate();
  const { state, dispatch } = useSignup();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!state.code || !state.email) {
      navigate("/auth/sign-up");
      return;
    }
    console.log(state);

    const preVerifyOTP = async () => {
      try {
        const { data } = await checkVerifiedOTP(
          state.email!,
          Number(state.code),
        );
        if (!(data as { message: string }).message || error) {
          dispatch({ type: "CLEAN_UP", payload: null });
          navigate("/auth/sign-up");
        }
      } catch (err) {
        // Handle any unexpected errors
        dispatch({ type: "CLEAN_UP", payload: null });
        navigate("/auth/sign-up");
      }
    };

    void preVerifyOTP();
  }, []); // Empty dependency array to run only once when mounted

  const { mutateAsync: signUpPasswordMutation, isPending } = useMutation({
    mutationFn: () =>
      signUpPassword(state.email!, password, Number(state.code)),
    onSuccess: () => {
      dispatch({ type: "CLEAN_UP", payload: null });
      navigate("/onboarding/profile");
    },
    onError: (error) => {
      setError(error instanceof Error ? error.message : "Failed to sign up");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signUpPasswordMutation();
      navigate("/onboarding/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign up");
    }
  };

  return (
    <div>
      <div className="h-dvh grid-cols-2 gap-5 sm:grid">
        <div>
          <form
            onSubmit={handleSubmit}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-5 py-32 sm:py-48 lg:py-56"
          >
            <legend>
              <RiLockPasswordLine className="size-10 text-[#3B4FE6]" />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <Button
              type="submit"
              className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Continue"}
            </Button>
          </form>
        </div>
        <div className="mt-10 hidden h-full sm:block">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
