import { Button } from "flowbite-react";
import { SlMagnifier } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { useAppContext } from "@/shared/context/AppContext";
import { Link } from "react-router-dom";

export function Header() {
  const { openSearch, setOpenSearch } = useAppContext();
  const { setOpenModal } = useAppContext();

  return (
    <div className="fixed inset-x-0 top-0 z-30">
      {/* Top header with logo and actions */}
      <div className="flex h-16 items-center justify-between bg-[#3224F2] px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-white p-1">
            <img
              src="/logo-placeholder.svg"
              alt="Unibuz"
              className="size-full object-contain"
            />
          </div>
          <Link to="/home" className="text-xl font-bold text-white">
            UNIBUZ
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {openSearch && (
            <form className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <SlMagnifier className="size-5 text-indigo-400" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-10 w-72 rounded-full border border-gray-300 bg-gray-50 ps-10 text-sm text-gray-900"
                placeholder="Search"
                required
              />
              <Button
                gradientMonochrome="lime"
                type="submit"
                className="absolute bottom-1 end-1 !p-1.5"
                size="sm"
                pill
              >
                Search
              </Button>
            </form>
          )}
          <Button
            gradientMonochrome="lime"
            size="sm"
            className="!p-2"
            pill
            onClick={() => setOpenSearch(!openSearch)}
          >
            <SlMagnifier className="size-5 text-[#3224F2]" />
          </Button>
          <Button
            gradientMonochrome="lime"
            size="sm"
            className="!p-2"
            pill
            onClick={() => setOpenModal(true)}
          >
            <FiPlus className="size-5 text-[#3224F2]" />
          </Button>
          <div className="size-8 overflow-hidden rounded-full">
            <img
              src="/avatar-placeholder.png"
              alt="Profile"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Secondary header with page title */}
      <div className="flex h-20 items-center justify-between bg-[#3224F2] px-4 pb-6 md:px-6">
        <h1 className="text-2xl font-bold text-white">Tribes</h1>
        <div className="flex items-center gap-4">
          <Link
            to="/feed"
            className="text-lg font-medium text-white hover:text-[#cbfd80]"
          >
            Feed
          </Link>
          <Link
            to="/my-tribes"
            className="text-lg font-medium text-white hover:text-[#cbfd80]"
          >
            My Tribes
          </Link>
          <Link
            to="/unibazaar"
            className="text-lg font-medium text-white hover:text-[#cbfd80]"
          >
            Unibazaar
          </Link>
        </div>
      </div>
    </div>
  );
}
