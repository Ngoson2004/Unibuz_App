"use client";

import { useSignup } from "@/shared/context/SignupContext";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../services/send-otp";
import { verifyOTP } from "../services/verify-otp";
import { useMutation } from "@tanstack/react-query";

export default function AuthCode() {
  const navigate = useNavigate();
  const { state, dispatch } = useSignup();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const { mutateAsync: verifyOTPMutation, isPending } = useMutation({
    mutationFn: () => verifyOTP(state.email!, Number(otp)),
    onSuccess: (res) => {
      const { data, error } = res;

      if ("message" in (data as { message: string })) {
        dispatch({ type: "SET_CODE", payload: otp });
        navigate("/auth/password");
      } else if ("error" in (data as { error: string })) {
        setError((data as { error: string }).error);
      } else {
        setError("Failed to verify code with error:" + error.context.json());
      }
    },
  });

  useEffect(() => {
    if (!state.email) {
      navigate("/auth/sign-up");
      return;
    }

    // Send OTP when component mounts
    const sendOTPToEmail = async () => {
      try {
        const { data } = await sendOTP(state.email!);
        if (!data?.success)
          setError(data?.cause ?? "Failed to send verification code");
      } catch (err) {
        console.error("Error sending OTP:", err);
      }
    };
    void sendOTPToEmail();
  }, []); // Only run once when component mounts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    await verifyOTPMutation();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="sm:px-auto mx-auto flex max-w-md flex-col gap-5 px-5 py-32 align-middle sm:py-48 lg:py-56"
      >
        <legend>
          <svg
            className="size-10 rounded-full bg-slate-300 p-1 text-[#3B4FE6] dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 12h.01m6 0h.01m5.99 0h.01"
            />
          </svg>
        </legend>
        <div>
          <div className="block">
            <Label
              htmlFor="authCode"
              value="Enter Code"
              className="text-lg font-bold text-black"
            />
            <p className="my-3 text-xs text-black sm:text-sm">
              Enter the 5-digit code sent to: <br />{" "}
              <strong>{state.email}</strong>
            </p>
          </div>

          <div className="flex justify-between">
            <TextInput
              id="authCode"
              type="number"
              maxLength={5}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="rounded-lg border-2 border-[#3B4FE6] text-center text-lg font-bold"
              required
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
        >
          {isPending ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </div>
  );
}
