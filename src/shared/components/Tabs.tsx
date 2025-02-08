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
        className="fixed inset-x-0 bottom-0 z-20 h-16 items-center justify-center rounded-xl bg-white font-satoshi-bold shadow-md shadow-[#3224f2] sm:h-20 xl:mx-32 xl:mb-5 xl:space-x-40 xl:rounded-[40px]"
      >
        <Tabs.Item
          active
          title={
            <Link
              to="/home/tribes/feed"
              className="md:text-md text-xs text-[#050026] hover:text-[#3224f2] lg:text-lg"
            >
              <FaUserFriends className="mb-1.5 ml-2 size-4 text-[#050026] hover:text-[#3224f2] lg:ml-4" />
              Tribes
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="md:text-md text-xs text-[#050026] hover:text-[#3224f2] lg:text-lg"
              to="/home/events"
            >
              <FaCalendarAlt className="mb-1.5 ml-5 size-4 text-[#050026] hover:text-[#3224f2] lg:ml-9" />
              What's On
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="md:text-md text-xs text-[#050026] hover:text-[#3224f2] lg:text-lg"
              to="/home/messages"
            >
              <MdMessage className="mb-1.5 ml-2 size-4 text-[#050026] hover:text-[#3224f2] lg:ml-3.5" />
              Inbox
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="md:text-md text-xs text-[#050026] hover:text-[#3224f2] lg:text-lg"
              to="/home/notifications"
            >
              <FaBell className="mb-1.5 ml-2 size-4 text-[#050026] hover:text-[#3224f2] lg:ml-4" />
              Notify
            </Link>
          }
        />

        <Tabs.Item
          title={
            <Link
              className="md:text-md text-xs text-[#050026] hover:text-[#3224f2] lg:text-lg"
              to="/home/profile"
            >
              <HiUserCircle className="mb-1.5 ml-3 size-4 text-[#050026] hover:text-[#3224f2] lg:ml-5" />
              Profile
            </Link>
          }
        />
      </Tabs>
    </div>
  );
}
