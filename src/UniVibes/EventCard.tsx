"use client";

import { Card } from "flowbite-react";
import dayjs from "dayjs";
import { ImSphere } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

interface EventProps {
  title: string;
  desc?: string;
  image?: string;
  type: string;
  location: string;
  date: string;
  time: string;
  maxAttend?: number;
}

export const Event: React.FC<EventProps> = ({
  title,
  desc,
  image,
  type,
  location,
  date,
  time,
  maxAttend,
}) => {
  // console.log(date);
  return (
    <Card
      className="m-10 w-1/2 place-self-center rounded-[40px] shadow-lg"
      renderImage={() => (
        <img src={image} alt="Product" className="h-[300px] w-full" />
      )}
    >
      <div className="grid grid-rows-4 items-center gap-3">
        <p className="items-end font-satoshi-bold text-xs text-gray-500 dark:text-gray-400">
          {dayjs(date).format("MMMM D, YYYY")} at {time}
        </p>
        <h1 className="font-satoshi-bold text-2xl text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="font-satoshi text-gray-700 dark:text-gray-400">{desc}</p>
        <div className="flex-inline flex flex-wrap justify-between">
          <p className="flex-inline flex items-center gap-2 font-satoshi-bold text-xs text-gray-500 dark:text-gray-400">
            <IoPeopleOutline className="h-5 w-5" />
            {maxAttend} slots
          </p>
          <p className="flex-inline flex items-center gap-2 font-satoshi-bold text-xs text-gray-500 dark:text-gray-400">
            {type === "Public" ? (
              <ImSphere className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <FaLock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
            {type} event
          </p>
          <p className="flex-inline flex items-center gap-2 font-satoshi-bold text-xs text-gray-500 dark:text-gray-400">
            <CiLocationOn className="h-5 w-5"/>
            {location}
          </p>
        </div>
      </div>
    </Card>
  );
};
