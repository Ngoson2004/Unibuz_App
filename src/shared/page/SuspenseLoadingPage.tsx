import React from "react";
import darkLogo from "@/shared/assets/media/logo_dark.jpeg";

const SuspenseLoadingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative mb-8 size-32">
          <img
            src={darkLogo}
            alt="Unibuz Logo"
            className="size-full object-contain"
          />
        </div>
        <style>
          {`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default SuspenseLoadingPage;
