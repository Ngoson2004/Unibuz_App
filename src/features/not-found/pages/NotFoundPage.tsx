import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import unibuz_logo from "@/shared/assets/media/logo_dark.jpeg";

export function NotFound() {
  const messages = [
    "We are working hard to bring you something amazing.",
    "Our team is crafting something special just for you.",
    "Great things take time - we're almost there!",
    "Innovation in progress - stay with us.",
    "The future of campus life is coming soon.",
  ];

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-[#EAE9FE] px-4">
      <div className="text-center">
        <img
          src={unibuz_logo}
          alt="Unibuz Logo"
          className="mx-auto mb-8 w-24"
        />

        <h1 className="mb-4 font-clash-grotesk-semibold text-4xl text-[#3224f2] sm:text-6xl">
          Page Not Found
        </h1>

        <p className="mb-8 font-satoshi-md text-lg text-[#44405e] sm:text-xl">
          {currentMessage}
          <br />
          Stay tuned!
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
