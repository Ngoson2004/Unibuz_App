// import { useAppContext } from "@/shared/context/AppContext";
import lime_logo from "@/shared/assets/media/lime_logo_mobile.png";
import { Avatar } from "flowbite-react";
import avatar_img from "@/shared/assets/media/testimonials/Clara.png";
// import { HiBars3 } from "react-icons/hi2";

export const TribeHeader = () => {
  // const { setOpenModal } = useAppContext();

  return (
    <div className="fixed z-20 w-full items-center gap-10 rounded-b-[32px] bg-[#3224f2] p-7 ps-16 sm:gap-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[63px]">
          {/* <HiBars3
            className="mt-2 h-6 w-6 text-slate-100 sm:h-10 sm:w-10"
            onClick={() => setOpenDrawer(true)}
          /> */}
          <img src={lime_logo} alt="lime_logo" className="h-10 w-10 sm:h-[44px] sm:w-[35px]"/>
          <h1 className="text-xl font-bold text-slate-100 underline underline-offset-4 decoration-wavy sm:text-4xl">
            Home
          </h1>
        </div>

        <div className="flex items-center space-x-5 font-bold sm:space-x-7">
          <form>
            <div className="relative w-72">
              <button
                type="submit"
                className="pointer-events-auto absolute inset-y-0 start-0 flex items-center ps-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M16.5 24C20.6421 24 24 20.6421 24 16.5C24 12.3579 20.6421 9 16.5 9C12.3579 9 9 12.3579 9 16.5C9 20.6421 12.3579 24 16.5 24Z"
                    stroke="#060028"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 22.5L27 27"
                    stroke="#060028"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <input
                type="search"
                id="default-search"
                className="block h-[44px] w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900"
                placeholder="Search"
                required
              />
            </div>
          </form>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M18.0299 4.36487C13.0649 4.36487 9.02989 8.39987 9.02989 13.3649V17.6999C9.02989 18.6149 8.63989 20.0099 8.17489 20.7899L6.44989 23.6549C5.38489 25.4249 6.11989 27.3899 8.06989 28.0499C14.5349 30.2099 21.5099 30.2099 27.9749 28.0499C29.7899 27.4499 30.5849 25.3049 29.5949 23.6549L27.8699 20.7899C27.4199 20.0099 27.0299 18.6149 27.0299 17.6999V13.3649C27.0299 8.41487 22.9799 4.36487 18.0299 4.36487Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M20.8049 4.79991C20.3399 4.66491 19.8599 4.55991 19.3649 4.49991C17.9249 4.31991 16.5449 4.42491 15.2549 4.79991C15.6899 3.68991 16.7699 2.90991 18.0299 2.90991C19.2899 2.90991 20.3699 3.68991 20.8049 4.79991Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5303 28.5901C22.5303 31.0651 20.5053 33.0901 18.0303 33.0901C16.8003 33.0901 15.6603 32.5801 14.8503 31.7701C14.0403 30.9601 13.5303 29.8201 13.5303 28.5901"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>

          <Avatar
            img={avatar_img} 
            rounded
            bordered
            size="md"
          />
        </div>
      </div>
    </div>
  );
};
