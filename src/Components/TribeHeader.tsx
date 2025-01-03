import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { useAppContext } from "../Context/AppContext";
import { Button } from "flowbite-react";
// import { HiBars3 } from "react-icons/hi2";

export const TribeHeader = () => {
  const { setOpenModal } = useAppContext();
  const { openSearch, setOpenSearch } = useAppContext();
  // const { setOpenDrawer } = useAppContext();

  return (
    <div className="fixed z-20 grid h-24 w-full grid-rows-2 items-center gap-10 rounded-b-[40px] bg-[#3224f2] p-10 sm:h-36 sm:gap-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {/* <HiBars3
            className="mt-2 h-6 w-6 text-slate-100 sm:h-10 sm:w-10"
            onClick={() => setOpenDrawer(true)}
          /> */}
          <h1 className="text-xl font-bold text-slate-100 underline decoration-wavy sm:text-4xl">
            Tribes
          </h1>
        </div>

        <div className="flex items-center space-x-5 font-bold sm:space-x-7">
          {openSearch && (
            <form>
              <div className="relative w-72">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <SlMagnifier className="h-6 w-6 text-indigo-400" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block h-14 w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900"
                  placeholder="Search"
                  required
                />
                <Button
                  gradientMonochrome="lime"
                  type="submit"
                  className="py-0.25 absolute bottom-2.5 end-2.5 px-2 text-sm font-medium"
                  pill
                >
                  Search
                </Button>
              </div>
            </form>
          )}
          <Button
            gradientMonochrome="lime"
            className="py-1.0 px-0.5 sm:px-1.5"
            pill
          >
            <SlMagnifier
              className="h-3 w-3 text-[#3224f2] sm:h-6 sm:w-6"
              onClick={() => setOpenSearch(!openSearch)}
            />
          </Button>
          <Button
            gradientMonochrome="lime"
            className="py-1.0 px-0.5 sm:px-1.5"
            pill
          >
            <FiPlus
              className="h-3 w-3 text-[#3224f2] sm:h-6 sm:w-6"
              onClick={() => setOpenModal(true)}
            />
          </Button>
        </div>
      </div>
      <div className="2xl:space-x-94 my-1 flex items-center justify-center space-x-8 p-5 text-sm sm:mt-10 sm:space-x-20 sm:text-lg md:space-x-44 lg:space-x-52 xl:space-x-96">
        <Link to="/feed" className="text-slate-100 hover:text-lime-300">
          Feed
        </Link>
        <Link to="/tribes" className="text-slate-100 hover:text-lime-300">
          My Tribes
        </Link>
        <Link to="/market" className="text-slate-100 hover:text-lime-300">
          Unibazaar
        </Link>
      </div>
    </div>
  );
};
