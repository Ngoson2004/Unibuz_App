import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

const navItems = [
  { to: "/home", icon: HiHome, label: "Home" },
  { to: "/home/tribes/feed", icon: FaUserFriends, label: "Tribes" },
  { to: "/home/events", icon: FaCalendarAlt, label: "What's On" },
  { to: "/home/unibazaar", icon: FaUserFriends, label: "Unibazaar" },
  { to: "/home/messages", icon: MdMessage, label: "Messages" },
  { to: "/home/notifications", icon: IoNotifications, label: "Notifications" },
  { to: "/home/profile", icon: BsPersonCircle, label: "Profile" },
];

export function Navigation() {
  return (
    <>
      {/* Sidebar for large screens */}
      <div className="fixed left-0 top-36 hidden h-[calc(100vh-9rem)] w-64 bg-white xl:block">
        <nav className="flex h-full flex-col space-y-1 p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center rounded-lg px-4 py-3 text-base transition-colors ${
                  isActive
                    ? "bg-[#3224F2]/5 font-medium text-[#3224F2]"
                    : "text-[#050026] hover:bg-gray-50"
                }`
              }
            >
              <item.icon className="mr-3 size-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom tabs for mobile and medium screens */}
      <div className="xl:hidden">
        <div className="fixed inset-x-0 bottom-0 z-20 bg-white shadow-lg">
          <nav className="flex h-16 items-center justify-around">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs ${
                    isActive ? "text-[#3224F2]" : "text-[#050026]"
                  }`
                }
              >
                <item.icon className="mb-1 size-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
