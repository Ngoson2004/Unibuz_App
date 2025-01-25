import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export const Code = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <form
        onSubmit={() => {
          navigate("/pwd");
        }}
        className="sm:px-auto mx-auto inline-block grid max-w-md grid-rows-1 gap-5 px-5 py-32 align-middle sm:py-48 lg:py-56"
      >
        <legend>
          <svg
            className="h-10 w-10 rounded-full bg-slate-300 p-1 text-[#3B4FE6] dark:text-white"
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
              <strong>
                {(document.getElementById("email1") as HTMLInputElement)
                  ?.value || "your email"}
              </strong>
            </p>
          </div>

          <div className="flex justify-between">
            <TextInput
              type="text"
              maxLength={5}
              className="rounded-lg border-2 border-[#3B4FE6] text-center text-lg font-bold"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
        >
          Verify
        </Button>
      </form>
    </div>
  );
};
