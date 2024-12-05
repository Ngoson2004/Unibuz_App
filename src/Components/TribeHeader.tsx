import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { useAppContext } from "../Context/AppContext";
import { Button } from "flowbite-react";

export const TribeHeader = () => {
  const { setOpenModal } = useAppContext();
  const { setOpenSearch } = useAppContext();
  return (
    <div className="relative z-20 grid h-20 grid-rows-2 items-center gap-10 rounded-b-xl bg-[#3224f2] p-5 sm:h-32 sm:gap-5">
      <div className="flex flex-row">
        <h1 className="basis-1/2 text-xl font-bold text-slate-100 underline decoration-wavy sm:text-4xl">
          Tribes
        </h1>
        <div className="flex grow justify-end space-x-5 font-bold sm:space-x-10">
          <Button gradientMonochrome="lime" className="py-1.0 px-0.5 sm:px-1.5" pill>
            <SlMagnifier
              className="h-3 w-3 sm:h-6 sm:w-6 text-[#3224f2]"
              onClick={() => setOpenSearch(true)}
            />
          </Button>
          <Button gradientMonochrome="lime" className="py-1.0 px-0.5 sm:px-1.5" pill>
            <FiPlus
              className="h-3 w-3 sm:h-6 sm:w-6 text-[#3224f2]"
              onClick={() => setOpenModal(true)}
            />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-8 p-5 text-sm sm:space-x-20 sm:text-lg md:space-x-44 lg:space-x-52 xl:space-x-80 2xl:space-x-96">
        <Link to="/feed" className="text-slate-100 hover:text-lime-300">
          Feed
        </Link>
        <Link to="/tribes" className="text-slate-100 hover:text-lime-300">
          My Tribes
        </Link>
        <Link to="/explore" className="text-slate-100 hover:text-lime-300">
          Explore
        </Link>
        <Link to="/market" className="text-slate-100 hover:text-lime-300">
          Unibazaar
        </Link>
      </div>
    </div>
  );
};
