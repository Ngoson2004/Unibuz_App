import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export function Tab() {
  return (
    <div className="overflow-x-auto">
      <Tabs
        aria-label="Full width tabs"
        className="fixed inset-x-0 bottom-0 z-20 h-16 sm:h-20 xl:space-x-40 xl:mb-5 xl:mx-32 justify-center items-center rounded-xl xl:rounded-[40px] bg-white font-satoshi-bold shadow-md shadow-[#3224f2]"
      >
        <Tabs.Item
          active
          title={
            <Link
              to="/tribes"
              className="text-xs md:text-md lg:text-lg text-[#050026] hover:text-[#3224f2]"
            >
              <FaUserFriends className="h-4 w-4 mb-1.5 ml-2 lg:ml-4 text-[#050026] hover:text-[#3224f2]" />
              Tribes
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="text-xs md:text-md lg:text-lg text-[#050026] hover:text-[#3224f2]"
              to="/events"
            >
              <FaCalendarAlt className="h-4 w-4 mb-1.5 ml-5 lg:ml-9 text-[#050026] hover:text-[#3224f2]" />
              What's On
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="text-xs md:text-md lg:text-lg text-[#050026] hover:text-[#3224f2]"
              to="/messages"
            >
              <MdMessage className="h-4 w-4 mb-1.5 ml-2 lg:ml-3.5 text-[#050026] hover:text-[#3224f2]" />
              Inbox
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="text-xs md:text-md lg:text-lg text-[#050026] hover:text-[#3224f2]"
              to="/notifications"
            >
              <FaBell className="h-4 w-4 mb-1.5 ml-2 lg:ml-4 text-[#050026] hover:text-[#3224f2]" />
              Notify
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="text-xs md:text-md lg:text-lg text-[#050026] hover:text-[#3224f2]"
              to="/profileIn4"
            >
              <HiUserCircle className="h-4 w-4 mb-1.5 ml-3 lg:ml-5 text-[#050026] hover:text-[#3224f2]" />
              Profile
            </Link>
          }
        />
      </Tabs>
    </div>
  );
}
