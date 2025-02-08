"use client";

import { Button, Label, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { Slideshow } from "@/shared/components/Slideshow";
import {
  states,
  degrees,
  universities,
  campuses,
  faculties,
  FacultyUniversity,
  CampusUniversity,
  State,
  University,
  Degree,
  Campus,
  Faculty,
} from "../data/university";

export default function UniversityPage() {
  const navigate = useNavigate();

  const [state, setState] = useState<State["value"]>("");
  const [university, setUniversity] = useState<University["value"]>("");
  const [degree, setDegree] = useState<Degree["value"]>("");
  const [campusOpt, setCampus] = useState<Campus[]>([]);
  const [facultyOpt, setFaculty] = useState<Faculty[]>([]);

  useEffect(() => {
    setCampus(campuses[university as CampusUniversity] || []);
  }, [university]);

  useEffect(() => {
    setFaculty(faculties[university as FacultyUniversity] || []);
  }, [university]);

  return (
    <div>
      <div className="h-dvh grid-cols-2 gap-5 sm:grid">
        <div>
          <form
            onSubmit={() => {
              navigate("/onboarding/interest");
            }}
            className="sm:px-auto mx-auto grid max-w-md grid-rows-1 gap-5 px-10 py-32 sm:px-5"
          >
            <div className="flex flex-col space-y-2">
              <div>
                <GiGraduateCap className="size-10 text-[#3B4FE6]" />
              </div>
              <div>
                <p className="text-lg font-bold text-black">
                  Your Uni and Faculty
                </p>
              </div>
              <div>
                <p className="text-xs text-black sm:text-sm">
                  Which uni and faculty are you in?
                </p>
              </div>
            </div>
            <div>
              <Label
                htmlFor="state"
                value="State"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option value="" disabled>
                  Select your state
                </option>
                {states.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label
                htmlFor="degree"
                value="Degree"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option value="" disabled>
                  Select your degree
                </option>
                {degrees.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label
                htmlFor="uni"
                value="University"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="uni"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                <option value="" disabled>
                  Select your university
                </option>
                {universities.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label
                htmlFor="campus"
                value="Campus"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="campus"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                {campusOpt.map((campus) => (
                  <option key={campus} value={campus}>
                    {campus}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label
                htmlFor="faculty"
                value="Faculty"
                className="text-xs font-normal text-black sm:text-sm"
              />
              <Select
                id="faculty"
                className="rounded-lg border-2 border-[#3B4FE6]"
                required
              >
                {facultyOpt.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </Select>
            </div>

            <Button
              type="submit"
              className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
            >
              Continue
            </Button>
          </form>
        </div>

        <div className="mt-2 hidden h-full sm:block">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
