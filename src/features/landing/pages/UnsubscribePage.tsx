import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import unibuz_logo from "@/shared/assets/media/logo_dark.jpeg";
import { unsubscribeUser } from "../services/unsubscribe-user";

export function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const [unsubscribeStatus, setUnsubscribeStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const messages = [
    "We're sorry to see you go.",
    "Your feedback helps us improve.",
    "You can resubscribe anytime.",
    "Thank you for being part of our journey.",
    "We hope to see you again soon.",
  ];

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const email = searchParams.get("email");
    if (!email) {
      setUnsubscribeStatus("error");
      setErrorMessage("No email provided");
      return;
    }

    const handleUnsubscribe = async () => {
      try {
        const response = await unsubscribeUser(email);
        if ("error" in response) {
          setUnsubscribeStatus("error");
          setErrorMessage(response.error);
        } else {
          setUnsubscribeStatus("success");
        }
      } catch (err) {
        setUnsubscribeStatus("error");
        setErrorMessage("Failed to unsubscribe. Please try again later.");
      }
    };

    handleUnsubscribe();
  }, [searchParams]);

  useEffect(() => {
    const type = () => {
      if (charIndex < messages[messageIndex].length) {
        setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentMessage("");
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000); // Pause before next message
      }
    };

    const typingInterval = setInterval(type, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, messageIndex]);

  if (unsubscribeStatus === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#EAE9FE] px-4">
        <div className="text-center">
          <img
            src={unibuz_logo}
            alt="Unibuz Logo"
            className="mx-auto mb-8 w-24"
          />
          <p className="font-satoshi-md text-lg text-[#44405e]">
            Processing your unsubscribe request...
          </p>
        </div>
      </div>
    );
  }

  if (unsubscribeStatus === "error") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#EAE9FE] px-4">
        <div className="text-center">
          <img
            src={unibuz_logo}
            alt="Unibuz Logo"
            className="mx-auto mb-8 w-24"
          />
          <h1 className="mb-4 font-clash-grotesk-semibold text-4xl text-red-500 sm:text-6xl">
            Error
          </h1>
          <p className="mb-8 font-satoshi-md text-lg text-[#44405e] sm:text-xl">
            {errorMessage}
          </p>
          <Link
            to="/"
            className="rounded-full bg-[#3224f2] px-8 py-3 font-satoshi-bold text-[#cbfd80] shadow-sm transition-colors hover:bg-[#1a0fb2]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#EAE9FE] px-4">
      <div className="text-center">
        <img
          src={unibuz_logo}
          alt="Unibuz Logo"
          className="mx-auto mb-8 w-24"
        />

        <h1 className="mb-4 font-clash-grotesk-semibold text-4xl text-[#3224f2] sm:text-6xl">
          Unsubscribed
        </h1>

        <p className="mb-8 font-satoshi-md text-lg text-[#44405e] sm:text-xl">
          {currentMessage}
          <br />
          You have been successfully unsubscribed.
        </p>

        <Link
          to="/"
          className="rounded-full bg-[#3224f2] px-8 py-3 font-satoshi-bold text-[#cbfd80] shadow-sm transition-colors hover:bg-[#1a0fb2]"
        >
          Back to Home
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-10 size-20 rounded-full bg-[#cbfd80] opacity-20 blur-xl" />
      <div className="absolute bottom-10 right-10 size-32 rounded-full bg-[#3224f2] opacity-10 blur-xl" />
    </div>
  );
}
