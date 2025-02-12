"use client";

import { useSignup } from "@/shared/context/SignupContext";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../services/send-otp";
import { verifyOTP } from "../services/verify-otp";

export default function AuthCode() {
  const navigate = useNavigate();
  const { state } = useSignup();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!state.email) {
      navigate("/auth/sign-up");
      return;
    }

    // Send OTP when component mounts
    const sendOTPToEmail = async () => {
      try {
        await sendOTP(state.email!);
      } catch (err) {
        setError("Failed to send verification code");
      }
    };
    void sendOTPToEmail();
  }, [state.email, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const isVerified = await verifyOTP(state.email!, otp);
      if ((isVerified as { message: string }).message) {
        navigate("/auth/password");
      } else {
        setError("Invalid verification code");
      }
    } catch (err) {
      setError("Failed to verify code");
    } finally {
      setIsLoading(false);
    }
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
              type="text"
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
          disabled={isLoading}
          className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </div>
  );
}
