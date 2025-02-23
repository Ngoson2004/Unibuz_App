"use client";

import { useState, useEffect } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { Slideshow } from "@/shared/components/Slideshow";
import { genderOptions, pronounOptions, countries } from "../data/profile-info";

export default function ProfileInfoPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const selectElement = document.getElementById(
      "isInternational",
    ) as HTMLSelectElement;
    if (selectElement && selectElement.value === "Y") {
      setIsInternational(true);
    }
  }, []);
  const [isInternational, setIsInternational] = useState(false);
  const [countryOfOrigin, setCountryOfOrigin] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIsInternational(value === "Y");
    if (value === "N") {
      setCountryOfOrigin("Australia");
    }
  };

  return (
    <div>
      <div className="h-dvh grid-cols-2 gap-5 sm:grid">
        <div className="hidden h-full sm:block">
          <Slideshow />
        </div>
        <div>
          <form
            onSubmit={() => {
              navigate("/onboarding/university");
            }}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-10 py-32 sm:px-5"
          >
            <div className="flex flex-col space-y-2 my-4">
              <div>
                <RxAvatar className="size-10 text-[#3B4FE6]" />
              </div>
              <div>
                <p className="text-lg font-bold text-black">
                  Your Unibuz Profile
                </p>
              </div>
              <div>
                <p className="text-xs text-black sm:text-sm">
                  Show of your style by entering your information
                </p>
              </div>
            </div> 

            <div className="grid grid-cols-2 gap-5 mb-4">
              <div>
                <Label
                  htmlFor="name"
                  value="Full Name"
                  className="text-xs font-normal text-black sm:text-sm"
                />
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Type your full name"
                  className="rounded-lg border-2 border-[#3B4FE6]"
                  required
                />
              </div>
              {/* <div>
                <Label
                  htmlFor="username"
                  value="User Name"
                  className="text-xs font-normal text-black sm:text-sm"
                />
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Type your optional username"
                  className="rounded-lg border-2 border-[#3B4FE6]"
                />
              </div> */}
              <div>
                <Label
                  htmlFor="gender"
                  value="Gender"
                  className="text-xs font-normal text-black sm:text-sm"
                />
                <Select
                  id="gender"
                  className="rounded-lg border-2 border-[#3B4FE6]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {genderOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="pronouns"
                  value="Pronouns"
                  className="text-xs font-normal text-black sm:text-sm"
                />
                <Select
                  id="pronouns"
                  className="rounded-lg border-2 border-[#3B4FE6]"
                  required
                >
                  {pronounOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="isInternational"
                  value="Are you international student?"
                  className="text-xs font-normal text-black sm:text-sm"
                />
                <Select
                  id="isInternational"
                  className="rounded-lg border-2 border-[#3B4FE6]"
                  required
                  value={isInternational ? "Y" : "N"}
                  onChange={handleSelectChange}
                >
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </Select>
              </div>
              {isInternational && (
                <div>
                  <Label
                    htmlFor="countryOfOrigin"
                    value="Country of Origin"
                    className="text-xs font-normal text-black sm:text-sm"
                  />
                  <Select
                    id="countryOfOrigin"
                    value={countryOfOrigin}
                    onChange={(e) => setCountryOfOrigin(e.target.value)}
                    className="rounded-lg border-2 border-[#3B4FE6]"
                    required
                  >
                    <option value="" disabled>
                      Select your country of origin
                    </option>
                    {countries.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
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
